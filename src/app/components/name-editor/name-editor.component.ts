import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";

import { UserJourneyService } from '../../services/user-journey.service';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  name = new FormControl('');
  zipCode?: number;

  constructor(
    private route: ActivatedRoute,
    private usrJrny: UserJourneyService,
    private apiSrv: ApiService) {

    this.route.params.subscribe(params => this.zipCode = params.id); //console.log(params.id));

  }

  ngOnInit() {
    //debugger;
    this.usrJrny.profileForm.patchValue({
      address:{
        zip: this.zipCode
      }
    })
    
    //value.address.zip.setValue(this.zipCode);

    //.patchValue({account:{email: 'myvalue@asd.com'}});
  }

  updateName() {
    this.name.setValue('Nancy');
  }

}
