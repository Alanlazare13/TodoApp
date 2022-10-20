import { Component, OnInit } from '@angular/core';
import { Tareas } from 'src/app/clases/clases/tareas';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})

export class ListaTareasComponent implements OnInit {

  constructor() { }
  form!: FormGroup;

  ngOnInit(): void {  
  }

  addtareas: Tareas = new Tareas();

  auxiliar:string = "Nueva tarea"

  arraytareas:Tareas[]=[
    //utilizar : para darle valor
    ];

  

  agregartareas(){

    if (this.addtareas.nombretarea == null || this.addtareas.calificaciontarea ==null || this.addtareas.fechatarea ==null) {

      alert('Ningun dato puede quedar vacio')
      
    }else{

      if (this.addtareas.idtarea ===0) {

        this.addtareas.idtarea = this.arraytareas.length+1;
        this.arraytareas.push(this.addtareas);
        alert('Tarea añadida con exito')
        this.addtareas = new Tareas();
        
      }else{
      alert("Se a modificado con exito")
      this.addtareas = new Tareas();
      this.auxiliar = "Nueva tarea"
      }
      }

  }

  modificar(data: Tareas){

  
    this.addtareas = data;
    this.auxiliar = 'Modificar'

  }

  borrar(data:Tareas){
    this.addtareas = data;
  this.arraytareas = this.arraytareas.filter(x => x != this.addtareas);
  this.addtareas = new Tareas();
  alert('tarea eliminada con exito')
  this.auxiliar = 'Nueva tarea'


  }

}


