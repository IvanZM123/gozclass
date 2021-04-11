// Imports modules.
import { FormGroup, FormControl } from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

// Imports interfaces.
import { AuthTokens, LoginResponse } from "src/app/core/services/auth/interfaces/auth.interfaces";
import { User } from "src/app/core/services/user/interfaces/user.interfaces";

// Imports helpers.
import { WriteErrorsForm } from "src/app/core/helpers/WriteErrorsForm";
import { LocalStorage } from "src/app/core/helpers/LocalStorage";

// Imports rules.
import { FormsValidators } from 'src/app/core/rules/FormsValidators';

// Imports services.
import { AuthService } from "src/app/core/services/auth/auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  register: FormGroup = new FormGroup({
    email: new FormControl("", [FormsValidators.email()]),
    password: new FormControl("", [FormsValidators.password()]),
    stayConnected: new FormControl(false)
  });
  private writeError: WriteErrorsForm = new WriteErrorsForm;
  private inputs: NodeListOf<HTMLInputElement>;

  constructor(
    private localStorage: LocalStorage<User | AuthTokens>,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.inputs = document.querySelectorAll("input");
    this.writeError.validate(Array.from(this.inputs));
  }

  submit(): void {
    this.authService.login(this.register.value).subscribe(
      res => this.successRequest(res),
      err => this.failureRequest(err.error)
    );
  }

  private successRequest(data: LoginResponse): void {
    this.localStorage.insert(this.localStorage.TEAMANGULAR15_ACCESS_TOKEN, data.tokens);
    this.localStorage.insert(this.localStorage.TEAMANGULAR15_USER, data.user);
    this.router.navigate(["/app"]);
  }

  private failureRequest(error: any): void {
    const { name, message } = error;

    if (name === "UnverifiedEmail") {
      const input = document.getElementById("email") as HTMLInputElement;
      this.writeError.writeError(input, message);
      return;
    }

    if (name === "EmailDoesNotExist" || name === "UnconfirmedEmail") {
      const emailInput = document.getElementById("email") as HTMLInputElement;
      this.writeError.writeError(emailInput, message);
    }

    if (name === "IncorrectPassword") {
      const passwordInput = document.getElementById("password") as HTMLInputElement;
      this.writeError.writeError(passwordInput, message);
    }
  }
}
