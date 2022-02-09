import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim ="Your Perfect Banking Partner"

  acno=""

  

  pswd=""


  loginForm=this.fb.group({

    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

  })



  users:any ={
    1000:{acno:1000,uname:"Neer",password:"1000",balance:5000},
    1001:{acno:1001,uname:"Laisha",password:"1001",balance:5000},
    1002:{acno:1002,uname:"Vyom",password:"1002",balance:5000}

  }

  constructor( private router:Router, private ds:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {

  }

  acnoChange(event:any){

this.acno=event.target.value
console.log(this.acno); 

    
  }

  pswdChange(event:any){

    this.pswd=event.target.value
    console.log(this.pswd);
    
        
      }



  login(){
    var acno=this.loginForm.value.acno
    var password=this.loginForm.value.pswd
    if(this.loginForm.valid){
  // Asynchronous

  this.ds.login(acno,password).subscribe((result:any)=>{
        if (result){
          alert(result.message)
          localStorage.setItem("currentAcno",JSON.stringify(result.currentAcno))
          localStorage.setItem("currentUserName",JSON.stringify(result.currentUserName))
          localStorage.setItem("token",JSON.stringify(result.token))

          this.router.navigateByUrl('dashboard')
        }
      },
      (result)=>{
        alert(result.error.message)
      }
      )
    }

    // if (result){
      
    //   alert("Login Successful")
    //   this.router.navigateByUrl('dashboard')
    // }
    // else{
      
    // }
    // }

    else{
      alert('Invalid Form')
    }

 
    // alert("login clicked")
  }

}

// login(a:any,p:any){

//   console.log(a);
  



//   var acno=a.value
//   var password=p.value

//   let database= this.users

//   if(acno in database){


//     if(password==database[acno]["password"]){

//       alert("Login Successful")
//     }

//     else{
//       alert("incorrect password")
//     }

//   }
//   else{
//     alert("Invalid Account Number")
//   }


//   // alert("login clicked")
// }

// }
