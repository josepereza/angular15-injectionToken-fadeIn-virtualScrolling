import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { APIURL } from '../app.module';
@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  constructor(
    private http: HttpClient,
    @Inject(APIURL) public ApiUrl: string
  ) {
    console.log('esta prueada',this.ApiUrl)
  }
  
  getAll() {
    return this.http.get(this.ApiUrl).pipe(
      catchError((error) => {
        return error;
      })
    );
  }
}
