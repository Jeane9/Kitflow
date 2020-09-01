import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.createForm()
    }

    createForm() {
        this.loginForm = this.formBuilder.group({
            email: [''],
            password: ['']
        })
    }
    logout():void{
        try{
            this.router.navigateByUrl('auth/login') ;
            localStorage.clear();   
        }catch(e){
            console.log('Error cleaninglocalstorage', e);
        }
    }
}
