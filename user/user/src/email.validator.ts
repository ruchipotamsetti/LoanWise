import { AbstractControl, ValidatorFn } from "@angular/forms";

export function emailValidator():ValidatorFn{
    return (control: AbstractControl): { [key: string]: any } | null =>
    {
        if(control.value=="abc@gmail.com")
        return {"":false}
        else
        return null;
    } 

}