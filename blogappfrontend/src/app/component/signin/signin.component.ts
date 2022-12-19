import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService} from '../../service/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  signinFormProcess(form: NgForm): void {
    
    console.log(form.value);

    this.authService.login(form.value)

 
      .subscribe(data => { 
        console.log(data.status);
        if(data.status=="true")
        {
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("userid", form.value.userid);
          alert('login successful');
          this.router.navigate(['/posts']);
        }
        else
        {
          alert('Incorrect email or password!!');
          this.router.navigate(['/signin']);
        }
      }
);
  }
}
