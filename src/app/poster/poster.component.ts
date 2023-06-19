import { Component, OnInit, HostBinding } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css'],

})
export class PosterComponent implements OnInit {


  constructor(private breakpointObserver: BreakpointObserver, private viewPortScroller: ViewportScroller) { }
  ngOnInit(): void {


  }
  onClick() {
    this.viewPortScroller.scrollToAnchor('AnchorId');
}


  onClickContact(elementId: string): void {
    this.viewPortScroller.scrollToAnchor(elementId);

  }


  onClickCerti(elementId: string): void {
    this.viewPortScroller.scrollToAnchor(elementId);

  }

  onClickskill(elementId: string): void {
    this.viewPortScroller.scrollToAnchor(elementId);

  }

  onClickproject(elementId: string): void {
    this.viewPortScroller.scrollToAnchor(elementId);

  }

  onClickworks(elementId: string): void {
    this.viewPortScroller.scrollToAnchor(elementId);

  }
  onClickResume(elementId: string): void {
    this.viewPortScroller.scrollToAnchor(elementId);

  }

  scrollTo() {
    this.viewPortScroller.scrollToAnchor('education');
}

}
