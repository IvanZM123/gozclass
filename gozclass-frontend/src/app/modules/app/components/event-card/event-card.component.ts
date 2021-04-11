// Imports modules
import { Component, Input, EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';

// Imports interfaces.
import { Event } from 'src/app/core/services/events/interfaces/events.interfaces';
import { User } from 'src/app/core/services/user/interfaces/user.interfaces';

// Imports services
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { EventService } from 'src/app/core/services/events/event.service';

// Imports helpers.
import { Notifier } from 'src/app/core/helpers/Notifier';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnChanges {
  @Output() leave = new EventEmitter<{ eventId: string }>();

  @Input() event: Event;

  private user: User;
  isParticipating: boolean = false;

  constructor(
    private eventService: EventService,
    private authService: AuthService,
    private notifier: Notifier
  ) {
    this.authService.currentUser.subscribe(user => this.user = user);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const event = changes.event.currentValue as Event;
    const result: string = event.members.find(member => this.user._id === member);
    this.isParticipating = !!result;
  }

  participate(eventId: string, status: boolean): void {
    status ? this.leaveEvent(eventId) : this.joinEvent(eventId);
  }

  private joinEvent(eventId: string): void {
    this.eventService.addUserToEvent(eventId, this.user._id).subscribe(
      ({ message }) => this.notifier.showNotification(message, "check_circle", "success"),
      
      ({ error }) => this.notifier.showModal({
        text: error.message,
        image: this.event.banner
      })
    );
  }

  private leaveEvent(eventId: string): void {
    const modalRef = this.notifier.showModal({
      text: `${ this.user.nickname }, quedaras baneado del evento, ¿Deseas continuar?`,
      image: this.event.banner,
      modalConfirm: true
    });

    modalRef.beforeClosed().subscribe((data: { confirm: boolean }) => {
      if (data.confirm) {
        this.eventService.removeUserFromEvent(eventId, this.user._id).subscribe(
          res => this.successLeaveEventReq(res.message),
          err => this.notifier.showNotification(err.error.message, "error", "danger")
        );
      }
    });
  }

  private successLeaveEventReq(message: string): void {
    this.leave.emit({ eventId: this.event._id });
    this.notifier.showNotification(message, "delete_forever", "danger");
  }
}
