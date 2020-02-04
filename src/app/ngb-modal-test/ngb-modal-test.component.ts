import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'ngb-modal-test',
  templateUrl: './ngb-modal-test.component.html',
  styleUrls: ['./ngb-modal-test.component.css']
})
export class NgbModalTestComponent implements OnInit {
  bsModalRef: BsModalRef;

  editProfileForm: FormGroup;
  userList = [
    {
      id: "1",
      firstname: "Aiman",
      lastname: "Rahmat",
      username: "aimanrahmat",
      email: "aimanrahmat@gmail.com"
    },
    {
      id: "2",
      firstname: "Christiano",
      lastname: "Ronaldo",
      username: "ronaldo7",
      email: "ronaldo7@gmail.com"
    },
    {
      id: "3",
      firstname: "Wayne",
      lastname: "Rooney",
      username: "rooney8",
      email: "rooney8@gmail.com"
    }];

  constructor(private fb: FormBuilder, private modalService: BsModalService ) { }

  ngOnInit() {
    this.editProfileForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      username: [''],
      email: ['']
    });
  }

  openModal(targetModal, user) {
    this.bsModalRef = this.modalService.show(targetModal, {
      backdrop: 'static'
    });

    this.editProfileForm.patchValue({
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      email: user.email
    });
  }

  onSubmit() {
    // this.modalService.dismissAll();
    this.bsModalRef.hide();
    console.log("res:", this.editProfileForm.getRawValue());
  }
}
