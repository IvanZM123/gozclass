// Imports modules.
import { Component } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { FormGroup, FormControl } from "@angular/forms";

// Imports services.
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Notifier } from 'src/app/core/helpers/Notifier';

@Component({
  selector: 'app-credentials-modal',
  templateUrl: './credentials-modal.component.html',
  styleUrls: ['./credentials-modal.component.css']
})
export class CredentialsModalComponent {
  credentials: FormGroup = new FormGroup({
    password: new FormControl("")
  });
  private email: string = "";

  constructor(
    private dialogRef: MatDialogRef<CredentialsModalComponent>,
    private authService: AuthService,
    private notifier: Notifier
  ) {
    this.authService.currentUser.subscribe((user: any) => this.email = user.email);
  }

  send(): void {
    const { password } = this.credentials.value;

    this.authService.changeEmail(this.email, password).subscribe(
      res => this.dialogRef.close(res),
      ({ error }) => this.notifier.showNotification(error.message, "error", "danger")
    );
  }

  close(): void {
    this.dialogRef.close();
  }
}
