import { Component, OnInit , HostBinding} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Padre } from 'src/app/models/padre';
import { PadresService } from 'src/app/services/padres.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  token: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private padresService : PadresService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      name: [''],
      lastName: [''],
      documentType: [''],
      documentNumber: [''],
      password: ['']
    })
  }

  /**
     * Resolved Captcha - get token
     * @param  {string} captchaResponse
     */
  resolved(captchaResponse: string) {
    if (captchaResponse == null) {
      this.token = null;
      return false;
    }
    this.token = captchaResponse;
  }

  @HostBinding('class') classes = 'row';
  padre: Padre = {
    id:0,
    nombre:'',
    apellido: '',
    tipo_doc: '',
    nro_doc :'',
    contrasena: ''
};
  savePadre(){
    this.padresService.savePadre(this.padre)
      .subscribe(
        res => {
          console.log(res);
        },
        err =>console.error(err)
      )
    // console.log(this.padre);
  }
}



