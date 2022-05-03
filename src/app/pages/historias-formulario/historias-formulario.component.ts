import { Component, OnInit } from '@angular/core';
import { HistoriaService } from '../../services/historia.service';

interface HtmlInputEvent extends Event {
  target: EventTarget & HTMLInputElement;
}

@Component({
  selector: 'app-historias-formulario',
  templateUrl: './historias-formulario.component.html',
  styleUrls: ['./historias-formulario.component.css'],
})
export class HistoriasFormularioComponent implements OnInit {
  constructor(private historiaService: HistoriaService) {}

  crearHistoria(titulo: HTMLInputElement, descripcion: HTMLTextAreaElement, imagen: HTMLInputElement) {
    console.log(titulo.value);
    this.historiaService.postHistoria(titulo.value,descripcion.value,imagen.value,"").subscribe()


    return false;
  }

  ngOnInit(): void {}
}
