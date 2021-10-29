import { BankDetails } from './BankDetails';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nseApp';
   // localhost:8080/springapp/{username}/{bankname}
  bankName:string = "ICICI-Bank";
  username:string = "Ramesh";
  balance:number= 1000;
  bankArr:BankDetails[] = [];
  status:boolean = false;

  bankInfo:BankDetails = new BankDetails('IDBI-Bank','IDBI-123','Delhi - ABC');


  constructor()
  {
    this.bankArr.push(new BankDetails('ICICI-Bank','icici123','Delhi - ABC'));
    this.bankArr.push(new BankDetails('HDFC-Bank','ABV23','Delhi - Bghj'));
    this.bankArr.push(new BankDetails('SBI-Bank','fgvrt123','Noida - 1'));
    this.bankArr.push(new BankDetails('Axis-Bank','ythty23','Noida - 2'));
    

  }

  doThis(fund:string)
  {
    let fund2 = parseInt(fund);
    console.log("Button clicked ...."+(fund2+1));
  }
}
