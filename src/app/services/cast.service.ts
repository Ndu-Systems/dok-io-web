import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CastService {

  updateNeeded = new BehaviorSubject<number>(1);
  castUpdate = this.updateNeeded.asObservable();

  constructor(private http: HttpClient) {}

  castNextUpdateNotify(id:number) {
    this.updateNeeded.next(id);
  }

}
