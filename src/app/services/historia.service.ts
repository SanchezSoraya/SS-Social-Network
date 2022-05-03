import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHistoria } from '../interfaces/historia';

@Injectable({
  providedIn: 'root',
})
export class HistoriaService {
  URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getHistoria(id:string) {
    return this.http.get<IHistoria>(`${this.URL}/api/historia/${id}`);
  }

  
  getHistorias() {
    return this.http.get<IHistoria[]>(`${this.URL}/api/historia/listar`);
  }


  postHistoria(
    titulo: string,
    descripcion: string,
    imagen: string,
    username: string
  ) {
    const historia = {
      titulo,
      descripcion,
      imgPath: imagen,
      username:'sorayasanchez',
    };
    console.log(historia);

    return this.http.post(`${this.URL}/api/historia`, historia);
  }

putHistoria(titulo:string, descripcion:string, imgPath:string, username:string, id:string){
  const historia = {
    titulo,
    descripcion,
    imgPath: imgPath,
    username:'sorayasanchez',
  };

  return this.http.put(`${this.URL}/api/historia/${id}`, historia);
}

  deleteHistoria(id:string){
    return this.http.delete(`${this.URL}/api/historia/${id}`);
  }
}
