import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PasarTextoService } from '../pasar-texto.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit{

  inputText: string = '';

  constructor(private pasarTexto: PasarTextoService){

  }
  ngOnInit(): void {
    this.pasarTexto.textoCambiado.subscribe((nuevoTexto:boolean)=>{
      if(nuevoTexto)this.pasarTexto.setTexto(this.inputText);
    });
  }

}
