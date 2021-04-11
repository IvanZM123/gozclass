// Imports modules.
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface ModalConfirm {
  text: string;
  image?: string;
  modalConfirm?: boolean;
}

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.css']
})
export class ModalMessageComponent {
  constructor(
    private dialogRef: MatDialogRef<ModalMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalConfirm
  ) {}

  accept(): void {
    this.dialogRef.close({ confirm: true });
  }

  deny(): void {
    this.dialogRef.close({ confirm: false });
  }

  close(): void {
    this.dialogRef.close();
  }
}
