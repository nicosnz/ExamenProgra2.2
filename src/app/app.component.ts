import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Idea } from './idea';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'StartupUCB';
  tituloInput = '';
  descripcionInput = '';
  categoriaInput = '';
  estadoInput = 'Borrador';
  listacategorias:string[] = ["Tecnologia","Salud","Educacion"]

  ideas: Idea[] = [];
  modoEditar = false;
  ideaAeditar:any

  addIdea():void {
    if (this.modoEditar && this.ideaAeditar) {
      this.ideaAeditar._titulo = this.tituloInput;
      this.ideaAeditar._descripcion = this.descripcionInput;
      this.ideaAeditar._categoria = this.categoriaInput;
      this.ideaAeditar._estado = this.estadoInput;
      this.modoEditar = false;
      this.ideaAeditar = null;
    
    } else {
      let nuevaIdea = new Idea(this.tituloInput, this.descripcionInput, this.categoriaInput, this.estadoInput);
      this.ideas.push(nuevaIdea);
    }

    this.limpiarFormulario();
  }

  editarIdea(idea: Idea):void {
    this.tituloInput = idea._titulo;
    this.descripcionInput = idea._descripcion;
    this.categoriaInput = idea._categoria;
    this.estadoInput = idea._estado;
    this.modoEditar = true;
    this.ideaAeditar = idea;
    
  }

  eliminarIdea(id: number):void {
    this.ideas = this.ideas.filter(idea => idea._id !== id);
  }

  limpiarFormulario():void {
    this.tituloInput = '';
    this.descripcionInput = '';
    this.categoriaInput = '';
    this.estadoInput = 'Borrador';
  }
}

