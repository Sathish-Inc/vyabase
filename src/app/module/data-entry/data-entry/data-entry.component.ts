import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { FormArray, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Router } from "@angular/router";

// import { ListComponent } from '../../gallery/list/list.component';

// import { ConfirmationModalService } from "../../../lib/components/confirmation/confirmation-modal-service";
import { DataService } from './data.service';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.scss']
})
export class DataEntryComponent implements OnInit {

  options: FormArray = new FormArray([]);

  dataEntryForm: FormGroup = new FormGroup({});
  submitted: boolean = false;
  alertMsg: boolean | undefined = undefined;
  Stage: string[] = ["All", "Qualified", "Follow-up","Presentation","Contract Sent","Negotiation"];
  Status: string[] = ["All", "Open", "Won","Lost","Abandoned","Negotiation"];
  Source: string[] = ["All", "Advertising", "Cold Call","Email","Other"];
  LossReason: string[] = ["All", "Competitor", "Features","Price","None"];

  constructor( private formBuilder: FormBuilder, 
              private router: Router,
              private dataService: DataService, 
              // private modelService: ConfirmationModalService
              ) { }

  ngOnInit(): void {
    this.dataEntryForm = this.formBuilder.group({
      id: [""],
      tag: ["", Validators.required],
      name: ["", Validators.required],
      company: ["", Validators.required],
      stage: ["", Validators.required],
      value: ["", Validators.required],
      closeDate: ["", Validators.required],
      win: ["", Validators.required],
      status: ["", Validators.required],
      lossReason: ["", Validators.required],
      priority: ["", Validators.required],
      source: ["", Validators.required],
      description:  ["", Validators.required]
    });
  }


  get f() {
    return this.dataEntryForm.controls;
  }

  onSubmit(data: any) {
    this.submitted = true;

    if (this.dataEntryForm.invalid) {
      this.alertMsg = false;
      return;
    }

    this.alertMsg = true;
    // const questionManagement: QuestionManagement = QuestionManagementObjectBuilder.create(
    //   data
    // );
    this.dataService.add(data).subscribe((resp: any) => {
      if (resp) {
        this.router.navigateByUrl("/gallery");
      }
    });
  }

  // onCancel() {
  //   const modal = this.modelService.createConfirmationModal();
  //   modal.content.showConfirmationModal(
  //     "Cancel confirmation",
  //     "Are you sure want to cancel " + name + "?"
  //   );

  //   modal.content.onClose.subscribe((result: boolean) => {
  //     if (result === true) {
  //       // when pressed Yes
  //       this.router.navigateByUrl("");
  //     } else if (result === false) {
  //       // when pressed No
  //     } else {
  //       // When closing the modal without no or yes
  //     }
  //   });
  // }
}

