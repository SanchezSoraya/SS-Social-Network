import { Component, OnInit } from '@angular/core';
import { HistoriaService } from '../../services/historia.service';
import { IHistoria } from '../../interfaces/historia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historias',
  templateUrl: './historias.component.html',
  styleUrls: ['./historias.component.css'],
})
export class HistoriasComponent implements OnInit {
  historias: IHistoria[] = [];

  constructor(private historiaService: HistoriaService, private router: Router) {
    console.log('primero');
  }

  ngOnInit(): void {
    console.log('OnInit');
    this.historiaService.getHistorias().subscribe((res) => {
      this.historias = res;
      console.log(res);
    });
  }
  
  cardSeleccionada(id: any) {
    console.log(id);
    this.router.navigate(['/historia',id])
  }
}
