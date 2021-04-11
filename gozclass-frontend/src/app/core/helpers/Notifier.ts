// Imports modules.
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

// Imports components.
import { ModalConfirm, ModalMessageComponent } from "../components/modal-message/modal-message.component";
import { NotificationComponent } from "../components/notification/notification.component";

@Injectable({
    providedIn: "root"
})
export class Notifier {
    constructor(
        private snackbar: MatSnackBar,
        private modal: MatDialog
    ) {}

    showModal(data: ModalConfirm): MatDialogRef<ModalMessageComponent> {
        return this.modal.open(ModalMessageComponent, {
            width: "400px",
            disableClose: true,
            data
        });
    }

    showNotification(message: string, icon: string, color?: string) {
        this.snackbar.openFromComponent(NotificationComponent, {
            duration: 4000,
            panelClass: [`bg-${ color }`],
            data: { message, icon }
        });
    }
}
