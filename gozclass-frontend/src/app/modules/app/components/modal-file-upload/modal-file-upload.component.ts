// Imports modules.
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from '@angular/core';

// Import helper.
import { Notifier } from "src/app/core/helpers/Notifier";

// Imports services.
import { UploadService } from "src/app/core/services/upload/upload.service";

@Component({
  selector: 'app-modal-file-upload',
  templateUrl: './modal-file-upload.component.html',
  styleUrls: ['./modal-file-upload.component.css']
})
export class ModalFileUploadComponent {
  status: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { route: string },
    public dialogRef: MatDialogRef<ModalFileUploadComponent>,
    private uploadService: UploadService,
    private notifier: Notifier
  ) {}

  previewImage(event: Event): void {
    const input = event.target as HTMLInputElement | null;
    if (!input || !input.files.length) return;

    const file: File = input.files.item(0);

    const reader: FileReader = new FileReader;
    reader.addEventListener("loadend", () => {
      const image = document.getElementById("image-preview") as HTMLImageElement | null;
      if (image) image.src = reader.result as string;
    });
    reader.readAsDataURL(file);
  }

  upload(): boolean {
    const form = document.getElementById("fileForm") as HTMLFormElement | null;
    if (!form) return false;

    const formdata: FormData = new FormData(form);
    this.status = true;

    this.uploadService.upload(this.data.route, formdata).subscribe(
      res => this.successReqChangeUpload(res),
      err => this.failureReqUpload(err.error)
    );

    return false;
  }

  private successReqChangeUpload(data: any): void {
    this.status = false;
    this.dialogRef.close(data.picture.url);
    this.notifier.showNotification(data.message, "edit", "warning");
  }

  private failureReqUpload(error: any): void {
    this.status = false;
    this.notifier.showNotification(error.message, "error", "danger");
  }

  close(): void {
    this.dialogRef.close();
  }
}
