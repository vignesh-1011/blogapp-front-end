import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService} from '../../service/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  signupFormProcess(form: NgForm): void {

    this.authService.signup(form.value)
    .subscribe((response) => {
      alert('Registration completed!!');
      this.router.navigate(['/signin']);
    });

  }
}
