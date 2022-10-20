import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  loading:boolean= false;

  constructor(private fb:FormBuilder , private router:Router) { 
    this.form = this.fb.group({
    
      user:['',[Validators.required]],
      password:['',[Validators.required]]


    })
  }

  ngOnInit(): void {
  }


  ingresar(){

   console.log(this.form)
   const usuarios = this.form.value.user;
   const passwords = this.form.value.password;
   console.log(usuarios);
   console.log(passwords);

   if (usuarios == "admin" && passwords == "admin123") {
     
    this.fakeloading();
    //redireccion al home
    
   }else{

     //mensaje de error

     alert("El usuario o la contraseña son incorrectos")
     this.form.reset

     this.form.value.usuario = ""
   }

  }


  fakeloading(){

    this.loading = true
    setTimeout(() => {
     
    //this.loading = false;
    //redireccionamos a home

    this.router.navigate(['tareas'])
    }, 1500);

  }


}
