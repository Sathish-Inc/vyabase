import { Component, OnInit } from '@angular/core';
// import { TreeModel, TreeNode } from '@circlon/angular-tree-component';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  options = {
    useCheckbox: true
  };
  nodes = [
    {
      name: 'North America',
      children: [
        { name: 'United States', children: [
          {name: 'New York'},
          {name: 'California'},
          {name: 'Florida'}
        ] },
        { name: 'Canada' }
      ]
    },
    {
      name: 'South America',
      children: [
        { name: 'Argentina', children: [] },
        { name: 'Brazil' }
      ]
    },
    {
      name: 'Europe',
      children: [
        { name: 'England' },
        { name: 'Germany' },
        { name: 'France' },
        { name: 'Italy' },
        { name: 'Spain' }
      ]
    }
  ];

  
  constructor() { }

  ngOnInit(): void {
  }
  
  
}
