import { Component } from '@angular/core';
import { PasarTextoService } from '../pasar-texto.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  savedText: string = '';

  constructor(private pasarTexto: PasarTextoService){

  }
  ngOnInit(): void {
    this.pasarTexto.textoCambiado.subscribe((nuevoTexto:boolean)=>{
      if(nuevoTexto){
        this.savedText = this.pasarTexto.texto;
      }
    });

  }

}
