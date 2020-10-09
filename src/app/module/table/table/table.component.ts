import { Component, OnInit } from '@angular/core';
import {TableModel } from '../table.model'; 
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  datas:TableModel[] =[];
  constructor(private tableService: TableService) { }

  ngOnInit(): void {
    this.tableService.getData().subscribe((data)=>{
      this.datas = JSON.parse(JSON.stringify(data));
    })
  }

}
