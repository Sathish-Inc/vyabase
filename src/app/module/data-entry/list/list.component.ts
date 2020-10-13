import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { ConfirmationModalService } from "../../../lib/components/confirmation/confirmation-modal-service";

import { DataService } from '../data.service';
import { DataEntryModel } from '../dataEntry.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  datas: DataEntryModel[] = [];
  submitted: boolean = false;

  isChecked: boolean = false;
  checkedIdList: any[] = [];
  id: string = "";

  constructor(
    private dataService: DataService,
    private router: Router,
    private modelService: ConfirmationModalService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.dataService.get().subscribe((res)=>{
      this.datas = res;
    })
  }

  onDelete(id: string) {
    const modal = this.modelService.createConfirmationModal();
    modal.content.showConfirmationModal(
      "Delete confirmation",
      "Are you sure want to delete " + name + "?"
    );

    modal.content.onClose.subscribe((result: boolean) => {
      if (result === true) {
        // when pressed Yes
        this.dataService.delete(id).subscribe(() => {
          this.getAll();
        });
      } else if (result === false) {
        // when pressed No
      } else {
        // When closing the modal without no or yes
      }
    });
  }

  editDocument(_id: string) {
    this.router.navigate(["/dataEntry/edit"], {
      queryParams: { id: _id },
    });
  }

  getSelectedId(isChecked: boolean, id: string) {
    this.id = id;
    if (isChecked === true) {
      this.checkedIdList.push(this.id);
    } else {
      const index = this.checkedIdList.indexOf(this.id);
      this.checkedIdList.splice(index);
    }
  }
  refreshPage() {
    this.getAll();
  }

}
