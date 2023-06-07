import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasarTextoService {

  texto: string = '';

  textoCambiado: Subject<boolean> = new Subject<boolean>();

  public setTexto(nuevoTexto: string) {
    this.texto = nuevoTexto;
  }

  public trigger(){
    this.textoCambiado.next(true);
  }

  constructor() { }
}
