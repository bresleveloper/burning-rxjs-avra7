import { Injectable } from '@angular/core';
import { Person } from './helper.service';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommService {

  public amIReady:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)


  constructor() { 
    this.newPersonAddedSubject.pipe(delay(670))
      .subscribe(p => this.newPersonAddedSubject2.next(p))
  }

  private pupilsDB:Person[] = []

  private newPersonAddedSubject:Subject<Person> = new Subject<Person>()

  private newPersonAddedSubject2:Subject<Person> = new Subject<Person>()
  public newPersonAdded2 = this.newPersonAddedSubject2.asObservable()

  addPerson(name:string, age:number):Observable<boolean>{
    let isSuccessIntoDB:boolean = Math.floor(Math.random() * 66) > 20 ;
    if (isSuccessIntoDB) {
      let newPupil:Person = {name:name, age:age}
      this.pupilsDB.push(newPupil)
      this.newPersonAddedSubject.next(newPupil)
    }
    this.amIReady.next(isSuccessIntoDB)
    this.aggregateAge()
    return of(isSuccessIntoDB).pipe(delay(670))
  }

  
  private aggregateAgeSubject:Subject<number> = new Subject<number>()
  aggregateAgeResult= this.aggregateAgeSubject.asObservable()
  aggregateAge():void{
    let total:number = 0
    this.pupilsDB.forEach(p => total += p.age )
    of(total).pipe(delay(680)).subscribe(()=> this.aggregateAgeSubject.next(total))
  }
}
