import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HelperService, Person } from 'src/app/services/helper.service';
import { delay } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-c2-operators',
  templateUrl: './c2-operators.component.html',
  styleUrls: ['./c2-operators.component.css']
})
export class C2OperatorsComponent implements OnInit {

  constructor(public svc:HelperService) { }


  persons1:Person[] = null

  Persons2Subject:Subject<Person[]> = new Subject<Person[]>()
  makeNextPersons2(){
    setTimeout(()=>this.Persons2Subject.next(this.persons1),1222)
  
  }

  counter=0
  timnoutetyty:Subject<number> = new Subject<number>()

  ngOnInit(): void {
    this.svc.httpGetPersonsFromDB()
      .pipe(delay(1550))
      .subscribe(data => {
        this.persons1 = data
        //this.Persons2Subject.next(this.persons1)
      })


    setInterval(()=>this.timnoutetyty.next(++this.counter), 1100)

    //this.timnoutetyty.subscribe(console.log);
    //this.timnoutetyty.subscribe(c => console.log("another sub: " + c));
    
  }

}
