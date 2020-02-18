import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>Inline template</div>`,
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
