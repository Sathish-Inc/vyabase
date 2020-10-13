import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

import { DataService } from '../data.service';
import { DataEntryModel } from '../dataEntry.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  submitted: boolean = false;

  datas: DataEntryModel[] = [];
  dataEntryForm: FormGroup = new FormGroup({});

  id: string = "";
  alertMsg: boolean | undefined = undefined;
  Stage: string[] = ["All", "Qualified", "Follow-up","Presentation","Contract Sent","Negotiation"];
  Status: string[] = ["All", "Open", "Won","Lost","Abandoned","Negotiation"];
  Source: string[] = ["All", "Advertising", "Cold Call","Email","Other"];
  LossReason: string[] = ["All", "Competitor", "Features","Price","None"];
  Priority: string[] = ["Low","High","Medium"];

  constructor(
    private router: Router,
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.route.snapshot.queryParamMap.get("id")) {
      // @ts-ignore TS2322
      this.id = this.route.snapshot.queryParamMap.get("id");
      this.getDocumentFormEditById(this.id);
    }
    this.dataEntryForm = this.formBuilder.group({
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
      description: ["", Validators.required]
    });
  }

  getDocumentFormEditById(id: string) {
    this.dataService.getById(id).subscribe((data: any) => {
      this.datas = data;
      this.updateEditView(this.datas);
    });
  }

  updateEditView(data: any) {
    this.dataEntryForm.patchValue({
      tag: data.tag,
      name: data.name,
      company: data.company,
      stage: data.stage,
      value: data.value,
      closeDate: data.closeDate,
      win: data.win,
      status: data.status,
      lossReason: data.lossReason,
      priority: data.priority,
      source: data.source,
      description: data.description
    });
  }

  get f() {
    return this.dataEntryForm.controls;
  }

  onFormSubmit(data: any) {
    this.submitted = true;

    if (this.dataEntryForm.invalid) {
      this.alertMsg = false;
      return;
    }
    this.alertMsg = true;

    this.datas = data;
    this.dataService.edit(this.datas, this.id).subscribe(() => {
      this.router.navigate(["/dataEntry"]);
    });
  }
}
