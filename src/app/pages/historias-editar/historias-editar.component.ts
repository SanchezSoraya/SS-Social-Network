import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHistoria } from '../../interfaces/historia';
import { HistoriaService } from '../../services/historia.service';

@Component({
  selector: 'app-historias-editar',
  templateUrl: './historias-editar.component.html',
  styleUrls: ['./historias-editar.component.css']
})
export class HistoriasEditarComponent implements OnInit {
   id:string ='';
   historia:IHistoria = {}

  constructor(private activatedRouter: ActivatedRoute, private historiaService: HistoriaService) {}
  
  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params)=>{
      this.id=params['id']
      this.historiaService.getHistoria(this.id).subscribe((res: any)=>{
        this.historia=res[0];
        console.log(this.historia);
      })
      })
  }
  eliminarHistoria(id:any){
    this.historiaService.deleteHistoria(id).subscribe();
  }

  actualizarHistoria(titulo:HTMLInputElement, descripcion:HTMLTextAreaElement, imgPath:HTMLInputElement){
    this.historiaService.putHistoria(titulo.value, descripcion.value, imgPath.value, "SorayaSanchez", this.id).subscribe();
  }

}
