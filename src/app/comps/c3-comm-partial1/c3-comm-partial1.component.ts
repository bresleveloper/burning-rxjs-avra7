import { Component, OnInit } from '@angular/core';
import { CommService } from 'src/app/services/comm.service';

@Component({
  selector: 'app-c3-comm-partial1',
  templateUrl: './c3-comm-partial1.component.html',
  styleUrls: ['./c3-comm-partial1.component.css']
})
export class C3CommPartial1Component implements OnInit {

  constructor(public s:CommService) { }

  failedAdd:boolean = false

  ngOnInit(): void {
  }


  sendAddPupil(name, age){
    age = parseInt(age)
    this.s.addPerson(name,age).subscribe(success => this.failedAdd = !success)
  }

}
