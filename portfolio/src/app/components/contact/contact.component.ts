import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ContactMedium } from '@core-models/contact.model';
import { DialogueState } from '@core-models/netlify-state.model';
import { ContactCopy } from '@core-models/static-copy.model';
import { StaticCopyService } from '@core-services/static-copy.service';
import { NetlifyFacade } from '@core-store/facades/netlify-facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  standalone: false
})
export class ContactComponent implements OnInit, AfterViewInit {
  intersectionObserver: () => IntersectionObserver;
  contactElement: NodeListOf<Element>;
  dialogueState$: Observable<DialogueState> = this.netlifyFacade.getDialogueState$
  contactCopy: ContactCopy;
  mediums: ContactMedium[];

  ngOnInit(): void {
    this.contactCopy = this.staticCopyService.getJsonCopy().contact
    this.mediums = Object.values(this.contactCopy.contactMediums)
  }

  ngAfterViewInit(): void {
    this.contactElement = document.querySelectorAll('.contact-container')
    this.contactElement.forEach((element: Element) => this.intersectionObserver().observe(element))
  }

  constructor(private netlifyFacade: NetlifyFacade, private staticCopyService: StaticCopyService) { }
}
