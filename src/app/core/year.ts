import { FormControl } from '@angular/forms';
// Control especifico
export class YearValidation{
    //cada nueva condicion es una funcion estatica
    static isOld(control: FormControl){
        let value=control.value;
        if(value<1900){
            //retorno error
            return {
                'isOld':true
            }
        }
        //si no hay fallos
        return null;
    }
}