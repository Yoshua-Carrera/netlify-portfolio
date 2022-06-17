import { Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { take, of, map, tap } from 'rxjs';
import { DataService } from '../data.service';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass'],
})

export class DialogComponent implements OnInit {
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  @ViewChild('carousel', {static : true}) carousel?: NgbCarousel;
  @ViewChild('videoEle', {static : true}) videoEle?: ElementRef;

  constructor(private dataS: DataService, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    console.log(this.carousel)
    console.log(this.videoEle)
  }
  
  togglePaused() {
    if (this.paused) {
      this.carousel?.cycle();
    } else {
      this.carousel?.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    console.log(this.carousel)
    console.log(slideEvent)
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  prevVideo($event: Event) {
    this.carousel?.prev()
  }

  nextVideo($event: Event) {
    this.carousel?.next()
  }
}
