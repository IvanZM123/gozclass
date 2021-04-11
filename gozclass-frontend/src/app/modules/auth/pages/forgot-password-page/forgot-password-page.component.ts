// Imports modules.
import { FormGroup, FormControl } from "@angular/forms";
import { Component, OnInit } from '@angular/core';

// Imports rules
import { FormsValidators } from "src/app/core/rules/FormsValidators";

// Imports helpers.
import { WriteErrorsForm } from "src/app/core/helpers/WriteErrorsForm";

// Imports services.
import { AuthService } from "src/app/core/services/auth/auth.service";

// Imports components.
import { Notifier } from 'src/app/core/helpers/Notifier';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.css']
})
export class ForgotPasswordPageComponent implements OnInit {
  forgotPassword: FormGroup = new FormGroup({
    email: new FormControl("", [FormsValidators.email()])
  });
  private writeError: WriteErrorsForm = new WriteErrorsForm;
  private input: HTMLInputElement;

  constructor(
    private authService: AuthService,
    private notifier: Notifier
  ) {}

  ngOnInit(): void {
    this.input = document.getElementById("email") as HTMLInputElement;
    this.writeError.validate([this.input]);
  }

  submit(): void {
    const { email } = this.forgotPassword.value;
    this.authService.forgotPassword(email).subscribe(
      res => this.successRequest(res),
      err => this.setError(err.error)
    );
  }

  private successRequest(data: any): void {
    this.notifier.showModal({
      text: data.message,
      image: "/assets/icons/reset-password.svg"
    });
    this.forgotPassword.reset();
  }

  private setError(error: any): void {
    const { name, message } = error;

    if (name === "NonExistentEmail") {
      return this.writeError.writeError(this.input, message);
    }
    
    this.notifier.showNotification(message, "error", "danger");
  }
}
