import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users:any ={
    1000:{acno:1000,uname:"Neer",password:"1000",balance:5000},
    1001:{acno:1001,uname:"Laisha",password:"1001",balance:5000},
    1002:{acno:1002,uname:"Vyom",password:"1002",balance:5000}

  }

  constructor() { }

  register(acno:any,password:any,uname:any){

    let db=this.users


    if(acno in db){
      return false
     
    }
    else{

      db[acno]={
        acno,
        uname,
        password,
        balance:0
      }
      //console.log(db);
      return true
      

    }
    // alert("Register clicked !!!!!")
  }
  login(acno:any,password:any){

    let database= this.users

    if(acno in database){


      if(password==database[acno]["password"]){
        return true

      }

      else{
        alert("incorrect password")
        return false
      }

    }
    else{
      alert("Invalid Account Number")
      return false
    }


  }

  deposit(acno:any,password:any,amt:any){

    var amount=parseInt(amt)


    let db=this.users

    if (acno in db){

      if(password==db[acno]["password"]){

        db[acno]["balance"]=db[acno]["balance"]+amount
        return db[acno]["balance"]



      }
      else{
        alert("incorrect password")
        return false
      }


    }
    else{
      alert("Account Doesnot exist")
    return false
    
    }

  }


  withdraw(acno:any,password:any,amt:any){

    var amount=parseInt(amt)


    let db=this.users

    if (acno in db){

      if(password==db[acno]["password"]){

        if(db[acno]["balance"]>amount){

          db[acno]["balance"]=db[acno]["balance"]-amount

        return db[acno]["balance"]
       
      }
        else{
          alert("insufficient Balance")
          return false

        }

        



      }
      else{
        alert("incorrect password")
        return false
      }


    }
    else{
      alert("Account Doesnot exist")
    return false
    
    }

  }




  }

