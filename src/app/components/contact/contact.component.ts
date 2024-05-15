import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DialogueState } from '@core-models/netlify-state.model';
import { NetlifyFacade } from '@core-store/facades/netlify-facade';
import { Observable, take, tap, timer } from 'rxjs';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit, AfterViewInit {
  intersectionObserver: () => IntersectionObserver;
  contactDialogueTimer: Observable<number> = timer(1000, 1000);
  contactElement: NodeListOf<Element>;
  dialogueState$: Observable<DialogueState> = this.netlifyFacade.getDialogueState$

  ngOnInit(): void {
    this.intersectionObserver = () => new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        console.log(entry)
        if(entry.isIntersecting) {
          console.log('in')
          this.contactDialogueTimer.pipe(
            take(5),
            tap(count => {
              if(count === 4) {
                this.netlifyFacade.launchDialogue('test')
              }
            })
          ).subscribe()
        }
      })
    })

  }

  ngAfterViewInit(): void {
    this.contactElement = document.querySelectorAll('.contact-container')
    this.contactElement.forEach((element: Element) => this.intersectionObserver().observe(element))
  }

  constructor(private netlifyFacade: NetlifyFacade) {}
}
