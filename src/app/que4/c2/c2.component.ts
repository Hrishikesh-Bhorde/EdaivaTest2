import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.scss']
})
export class C2Component implements OnInit {
  @Input() values:any;
  constructor() { }

  ngOnInit(): void {
  }

}
