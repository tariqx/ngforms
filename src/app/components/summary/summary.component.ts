import { Component, OnInit } from '@angular/core';
import { UserJourneyService } from '../../services/user-journey.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private usrJvnySrv: UserJourneyService) { }

  ngOnInit() {
   console.log(this.usrJvnySrv.profileForm.value);

  }

  getFormValues() {
    let formObj = this.usrJvnySrv.profileForm.getRawValue(); 
    let serializedForm = JSON.stringify(formObj);
    return serializedForm;
  }

}
