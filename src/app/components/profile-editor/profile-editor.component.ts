import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";

import { UserJourneyService } from '../../services/user-journey.service';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });

  // profileForm = this.fb.group({
  //   firstName: ['', Validators.required],
  //   lastName: [''],
  //   address: this.fb.group({
  //     street: [''],
  //     city: [''],
  //     state: [''],
  //     zip: ['']
  //   }),
  // });

  zipCode?: number;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usrJrny: UserJourneyService,
    private apiSrv: ApiService
  ) {
    this.route.params.subscribe(params => this.zipCode = params.id); 
   }

  ngOnInit() {
    this.usrJrny.profileForm.patchValue({
      address:{
        zip: this.zipCode
      }
    })
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
   // console.warn(this.usrJrny.profileForm.value);
   this.router.navigate(['/summary']);
  }

  // updateProfile() {
  //   this.usrJrny.profileForm.patchValue({
  //     firstName: 'Nancy',
  //     address: {
  //       street: '123 Drew Street'
  //     }
  //   });
  // }

  getTodosByID(){
    debugger;
    let data = this.apiSrv.getTodosById(1)
    .subscribe(
      data => {
        console.log(data);
      }
        ,
      error => {//this.handleError(error),
          console.log(error);
      },
      () => {//this.onComplete()
        console.log("call was success");
      }
  );
    let temp = "";
  }

}
