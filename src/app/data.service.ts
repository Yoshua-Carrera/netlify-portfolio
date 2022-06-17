import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private projectSBJ$: Subject<string> = new Subject()
  projectOBS$: Observable<any> = this.projectSBJ$.asObservable()
  
  constructor() { }

  pushData(project: any) {
    this.projectSBJ$.next(project)
  }
}
