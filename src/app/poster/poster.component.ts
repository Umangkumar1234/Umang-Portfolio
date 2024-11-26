import { Component, OnInit, HostBinding } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ViewportScroller } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css'],

})
export class PosterComponent implements OnInit {
  private anchorId: string | null = null; // to store the element id

  constructor(private breakpointObserver: BreakpointObserver, private viewPortScroller: ViewportScroller
    , private route :Router
  ) { }
  ngOnInit(): void {
    this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd && this.anchorId) {
        // Scroll up slightly before trying to scroll to the anchor
      //  this.viewPortScroller.scrollToPosition([0, 0]);

        // Delay to ensure the view has fully rendered
        setTimeout(() => {
          if (this.anchorId) {
            const targetElement = document.getElementById(this.anchorId);
            if (targetElement) {
              this.viewPortScroller.scrollToAnchor(this.anchorId);
              this.anchorId = null; // Reset after scroll
            } else {
              console.error(`Element with ID '${this.anchorId}' not found.`);
            }
          }
        }, 100); // Adjust delay as needed
      }
    });
  }

  onClick(elementId: string) {
    this.anchorId = elementId; // Set the anchor ID for scrolling
  
    // Use requestAnimationFrame to wait until the rendering is complete
    requestAnimationFrame(() => {
      if (this.anchorId) {
        const targetElement = document.getElementById(this.anchorId);
        if (targetElement) {
          // Smooth scrolling
          this.viewPortScroller.scrollToAnchor(this.anchorId!); // Scroll to the anchor
          this.anchorId = null; // Reset the anchor ID after scrolling
        } else {
          console.error(`Element with ID '${this.anchorId}' not found.`);
        }
      }
    });
  }
  
  

//   onClick() {
//     this.viewPortScroller.scrollToAnchor('AnchorId');
// }


//   onClickContact(elementId: string): void {
//     this.viewPortScroller.scrollToAnchor(elementId);

//   }


//   onClickCerti(elementId: string): void {
//     this.viewPortScroller.scrollToAnchor(elementId);

//   }

//   onClickskill(elementId: string): void {
//     this.viewPortScroller.scrollToAnchor(elementId);

//   }

//   onClickproject(elementId: string): void {
//     this.viewPortScroller.scrollToAnchor(elementId);

//   }

//   onClickworks(elementId: string): void {
//     this.viewPortScroller.scrollToAnchor(elementId);

//   }
  onClickResume(elementId: string): void {
    this.viewPortScroller.scrollToAnchor(elementId);

  }

//   scrollTo() {
//     this.viewPortScroller.scrollToAnchor('education');
// }

}
