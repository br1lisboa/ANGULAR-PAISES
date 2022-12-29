import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = ''
  hayError: boolean = false
  paises: Country[] = []

  constructor(private paisService: PaisService) { }

  buscar() {

    this.hayError = false

    this.paisService.buscarPais(this.termino)
      .subscribe(
        (resp) => {
          this.paises = resp
          console.log(this.paises)
        },
        (err) => {
          this.hayError = true
          this.paises = []
        })

  }

}
