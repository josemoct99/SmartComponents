import { Component } from '@angular/core';
import { PasarTextoService } from '../pasar-texto.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})


export class ButtonComponent {

  constructor(private pasarTexto: PasarTextoService){

  }

  onButtonClick() {
    this.pasarTexto.trigger();
  }

}
