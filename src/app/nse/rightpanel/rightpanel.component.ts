import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightpanel',
  templateUrl: './rightpanel.component.html',
  styleUrls: ['./rightpanel.component.css']
})
export class RightpanelComponent implements OnInit {
  username:string = "Amit";
  age:number=0;
  isValidAge:boolean = false;

  todayDate:Date= new Date();


  constructor() { }

  ngOnInit(): void {
  }

  doKeyUp(event:any)
  {
   // console.log(event.target.value);
    let localAge = parseInt(event.target.value);

    if(localAge>18) this.isValidAge = true;
    else this.isValidAge = false;

    console.log(this.isValidAge);
  }
  
}
