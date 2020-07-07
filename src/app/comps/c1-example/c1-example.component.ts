import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, of, fromEvent } from 'rxjs';
import { HelperService } from 'src/app/services/helper.service';
import { delay, debounceTime, distinctUntilChanged, tap, switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-c1-example',
  templateUrl: './c1-example.component.html',
  styleUrls: ['./c1-example.component.css']
})
export class C1ExampleComponent implements OnInit {

  counter1:number
  counter2:number
  constructor(public svc:HelperService) { }

  @ViewChild('coutriesInput', {static:true}) coutriesInputRef:ElementRef
  coutriesInput:HTMLInputElement
  coutriesInputObs:Observable<Event>
  coutriesArrResults:string[] = []


  @ViewChild('coutriesInput2', {static:true}) coutriesInputRef2:ElementRef
  coutriesInput2:HTMLInputElement
  coutriesArrResults2:string[] = []


  ngOnInit(): void {
    console.log('coutriesInputRef : ', this.coutriesInputRef);
    this.coutriesInput = this.coutriesInputRef.nativeElement
    
    this.coutriesInputObs = fromEvent(this.coutriesInput, "input")

    this.coutriesInputObs.pipe(
      tap(ev => console.log('coutriesInput fired input events')),
      debounceTime(1200),
      map(ev => /*ev.target['value']*/ (ev.target as HTMLInputElement).value),
      tap(val => console.log('coutriesInput debounceTime(1200)+map')),
      distinctUntilChanged(),
      tap(val => console.log('coutriesInput distinctUntilChanged')),
    ).subscribe(val => {
      console.log('coutriesInput subscribe')
      //this.svc.countriesAutoComplete(ev.target.value)
      this.coutriesArrResults = this.svc.countriesAutoComplete(val.toString())
    })



    fromEvent(this.coutriesInputRef2.nativeElement, "input").pipe(
      debounceTime(1200),
      map(ev => ev['target']['value']),
      distinctUntilChanged(),
      switchMap(val => this.svc.countriesAutoCompleteObs(val))
    ).subscribe(results => {
      console.log('coutriesInput2 countriesAutoCompleteObs')
      this.coutriesArrResults2 = results
    })

  }


  obsRnd(){
    this.svc.getRandomNumber().subscribe(rndNum => this.counter1 = rndNum)
  }

  obsRndWithDelay(){
    this.svc.getRandomNumberDelay().subscribe(rndNum => this.counter2 = rndNum)
  }

  


}
