import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//Imports httpClient
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  //Declar an instance of HttpClient
  constructor(private hc: HttpClient) { }

  GetPokemonData():Observable<any>{

    return this.hc.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
  }
}
