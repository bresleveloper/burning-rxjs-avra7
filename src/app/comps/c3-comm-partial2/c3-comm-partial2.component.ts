import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommService } from 'src/app/services/comm.service';
import { Person } from 'src/app/services/helper.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-c3-comm-partial2',
  templateUrl: './c3-comm-partial2.component.html',
  styleUrls: ['./c3-comm-partial2.component.css']
})
export class C3CommPartial2Component implements OnInit, OnDestroy {

  constructor(public s:CommService) { }
  ngOnDestroy(): void {  this.subscribers.forEach(s => s.unsubscribe() ) }

  addedPupils:Person[] = []
  private subscribers:Subscription[] = []
  aggRes:number


  ngOnInit(): void {
    this.subscribers.push( this.s.newPersonAdded2.subscribe(p => this.addedPupils.push(p)))
    this.subscribers.push( this.s.aggregateAgeResult.subscribe(r => this.aggRes = r))
  }

}
