import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class UserJourneyService {

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  });

  constructor(private fb: FormBuilder) {
    this.profileForm.valueChanges.subscribe(val => {
     // debugger;
      console.log(JSON.stringify(val));
      sessionStorage.setItem('userJourney', JSON.stringify(val));
   });

   //debugger;
   let formValues = sessionStorage.getItem('userJourney');
    if (formValues) {
      this.applyFormValues(this.profileForm, JSON.parse(formValues));
    }
  }

  private applyFormValues (group, formValues) {
    //debugger;
    Object.keys(formValues).forEach(key => {
      let formControl = <FormControl>group.controls[key];
      if (formControl instanceof FormGroup) {
        this.applyFormValues(formControl, formValues[key]);
      } else {
        formControl.setValue(formValues[key]);
      }
    });
  }

  destroyFormValues() {
    sessionStorage.removeItem('userJourney');
    alert('Saved data deleted');
  }

}
