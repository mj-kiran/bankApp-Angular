import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  acno=""
  pswd=""
  amount=""


  acno1=""
  pswd1=""
  amount1=""

  depositForm=this.fb.group({

    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
   amount:['',[Validators.required,Validators.pattern('[0-9]*')]]


  })

  withdrawForm=this.fb.group({

    acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
   amount1:['',[Validators.required,Validators.pattern('[0-9]*')]]


  })


  constructor(private ds:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  deposit(){
    var acno=this.acno
    var pswd=this.pswd
    var amount=this.amount

    if(this.depositForm.valid){
      let result=this.ds.deposit(acno,pswd,amount)

    if(result){

      alert(amount+" credited. New balance is :"+ result)
    }

    // alert("Deposit Clicked!!!!!")
  }
  else{
    alert("Invalid Form")
  }
  }

 

  withdraw(){

    var acno=this.acno1
    var pswd=this.pswd1
    var amount=this.amount1

   if(this.withdrawForm.valid){
    let result=this.ds.withdraw(acno,pswd,amount)

    if(result){

      alert(amount+" debited. New balance is :"+ result)
    }
    // alert("Withdraw Clicked!!!!")
  }
  else{
    alert("invalid form")
  }

   }
}
