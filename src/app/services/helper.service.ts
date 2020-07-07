import { Injectable } from '@angular/core';
import { Observable, of, Subject, observable, BehaviorSubject } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  ServicePersonsSubject:Subject<Person[]> = new Subject<Person[]>()
  ServicePersonsBehaviorSubject:BehaviorSubject<Person[]> = new BehaviorSubject<Person[]>(null)

  constructor(private http:HttpClient) { 
    this.httpGetPersonsFromDB().subscribe(data => {
      this.ServicePersonsSubject.next(data)
      this.ServicePersonsBehaviorSubject.next(data)
    })


    this.ServicePersonsSubject.subscribe(data => console.log('ServicePersonsSubject next', data))
    this.ServicePersonsBehaviorSubject.subscribe(data => console.log('ServicePersonsBehaviorSubject next', data))
    
  }

  getRandomNumber():Observable<number>{
    let n = Math.floor(Math.random() * 66) + 1  
    return of(n);
  }

  getRandomNumberDelay():Observable<number>{
    let n = Math.floor(Math.random() * 66) + 1  
    return of(n).pipe(delay(1122));
  }


  iDoNothing():void{}
  countriesAutoComplete(startWithValue:string):string[]{
    return this.countries.filter(c => c.toLowerCase().startsWith(startWithValue.toLowerCase()))
  }
  private countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
    
  countriesAutoCompleteObs(startWithValue:string):Observable<string[]>{
    return of(this.countriesAutoComplete(startWithValue)).pipe(delay(500))
  }



  httpGetPersonsFromDB() : Observable<Person[]>{
    let u="https://raw.githubusercontent.com/bresleveloper/db/master/ajax/someDB.json"
    return this.http.get(u).pipe(
      map(ajaxResults => {
        let a1:Person[] = ajaxResults['students']
        let a2:Person[] = ajaxResults['jiraffs']
        return a1.concat(a2)
      })
    )
  }






}

export class Person {
  name:string
  age:number
}
