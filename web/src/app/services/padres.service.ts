import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Padre} from '../models/padre';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PadresService {
  // private API_URI :'http://localhost:3000/api';
  private API_URI :'http://localhost:3000/api/padres';
  constructor(private http: HttpClient) { }

  getPadres(){
    // return this.http.get('${this.API_URI}/games');
    return this.http.get('http://localhost:3000/api/padres');
  }
  getPadre(id: string){
    return this.http.get('${this.API_URI}/${id}');
  }
  delete (id:string){
    return this.http.delete('${this.API_URI}/game/${id}');
  }
  savePadre(padre : Padre){
    return this.http.post('http://localhost:3000/api/padres',padre);
  }
  update(id: string, updatepadre: Padre): Observable<Padre>{
    return <Observable<Padre>> this.http.put('${this.API_URI}/games/${id}', updatepadre);
  }
}
{}