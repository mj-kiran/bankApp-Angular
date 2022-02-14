import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
const options ={
  headers:new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})

export class DataService {

  currentUserName: any

  currentAcno: any

  users: any = {
    1000: { acno: 1000, uname: "Neer", password: "1000", balance: 5000, transaction: [] },
    1001: { acno: 1001, uname: "Laisha", password: "1001", balance: 5000, transaction: [] },
    1002: { acno: 1002, uname: "Vyom", password: "1002", balance: 5000, transaction: [] }

  }

  constructor(private http:HttpClient) {
    // this.getDetails()
  }

  getTransaction(acno:any) {
    const data={
      acno
    }
    // asynchronous
    return this.http.post('http://localhost:3000/getTransaction/'+acno,data,this.getOptions())
    // return this.http.post(environment.apiUrl+'/getTransaction/'+acno,data,this.getOptions())


  }


  // // to store in local storage
  // saveDetails(): void {
  //   if (this.users) {
  //     localStorage.setItem("userDB", JSON.stringify(this.users))
  //   }
  //   if (this.currentUserName) {
  //     localStorage.setItem("cUsername", JSON.stringify(this.currentUserName))
  //   }

  //   if(this.currentAcno){
  //     localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
  //   }
  // }

  // // // to get values from local storage

  // getDetails(): void {
  //   if (localStorage.getItem("userDB")) {
  //     this.users = JSON.parse(localStorage.getItem("userDB") || '')
  //   }

  //   if (localStorage.getItem("cUsername")) {
  //     this.currentUserName = JSON.parse(localStorage.getItem("cUsername") || '')
  //   }
  //   if(localStorage.getItem("currentAcno"))
  //   {
  //     this.currentAcno=JSON.parse(localStorage.getItem("currentAcno") || '')
  //   }
  
  // }




  register(acno: any, password: any, uname: any) {

    const data ={
      acno,
      password,
      uname
    }
// asynchronous

    return this.http.post('http://localhost:3000/register',data)
    // return this.http.post(environment.apiUrl+'/register',data)

  }

  login(acno: any, password: any) {

    const data ={
      acno,
      password,
      
    }

  
// asynchronous

    return this.http.post('http://localhost:3000/login',data)
    // return this.http.post(environment.apiUrl+'/login',data)

  }


  deposit(acno: any, password: any, amt: any): any {

    // var amount = parseInt(amt)

    const data ={
      acno,
      password,
      amt
    }
    
    
  
    // asynchronous

    return this.http.post('http://localhost:3000/deposit',data,this.getOptions())
    // return this.http.post(environment.apiUrl+'/deposit',data,this.getOptions())

  }
  // to add token into the request header
  getOptions(){
    const token = JSON.parse(localStorage.getItem("token") || '')
    console.log(token)
    let headers = new HttpHeaders()
  if(token){
    headers = headers.append('x-access-token',token)
    options.headers=headers
  }
  return options
  }


  


  withdraw(acno: any, password: any, amt: any) {
  // var amount = parseInt(amt)
const data ={
    acno,
    password,
    amt
  }
  
  

  // asynchronous

  return this.http.post('http://localhost:3000/withdraw',data,this.getOptions())
  // return this.http.post(environment.apiUrl+'/withdraw',data,this.getOptions())
}

delete(acno:any){
  
  // return this.http.delete('http://localhost:3000/deleteAcc/'+acno,this.getOptions())
  return this.http.delete(environment.apiUrl+'/deleteAcc/'+acno,this.getOptions())


}

}
