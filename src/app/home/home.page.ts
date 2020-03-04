import { YearValidation } from './../core/year';
import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  name: string;
  grupoControl: FormGroup;
  constructor() {
    this.crearGrupoControl();
  }

  private crearGrupoControl() {
    this.grupoControl = new FormGroup({
      longitudMinima: new FormControl("", Validators.minLength(3)),
      longitudMaxRequerida: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.maxLength(3)])
      ),
      regularUno: new FormControl(Validators.pattern("hola[oa]")),
      regularTres: new FormControl("", Validators.pattern("hola[ao]{3}")),
      yearInput:new FormControl('',YearValidation.isOld)
    });
  }

  validationMessages = {
    'nameInput': {
      'required': 'Username is required.',
      'minlength': 'Username must be at least 5 characters long.',
      'maxlength': 'Username cannot be more than 25 characters long.',
      'pattern': 'Your username must contain only numbers and letters.',
      'validUsername': 'Your username has already been taken.'
    },
    //mensajes para el año
    'yearInput':{
      'isOld':"Deben ser posteriores a 1900",
      'pattern': 'el año no cumple el patron'
    }
  }
}
