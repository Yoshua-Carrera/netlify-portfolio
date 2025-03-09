import { Injectable } from '@angular/core';
import { ContentCopy } from '../models/static-copy.model';
import contentCopy from '@core-assets/text/content-copy.json'

@Injectable({
  providedIn: 'root'
})
export class StaticCopyService {

  constructor() { }

  getJsonCopy(): ContentCopy {
    return contentCopy.content
  }
}
