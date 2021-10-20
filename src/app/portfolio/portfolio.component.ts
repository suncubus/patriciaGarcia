import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Meta, MetaDefinition } from '@angular/platform-browser';
declare var $:any;
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }
  isCertainButtonAlreadyActive:any;
  ngOnInit(): void {

  }

  //activar y desactivar botón
  onButtonGroupClick($event) {    
    let clickedElement = $event.target || $event.srcElement;
    //poner botón active
      if (this.isCertainButtonAlreadyActive) {
          this.isCertainButtonAlreadyActive.classList.remove("active");
      }else{
          this.isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
      }
      //mostrar proyectos por filtro
      if($event.target.id == "all")
        {
            //todos los que contienen la clase filter
            $('.filter').show('1000');
          
        }
        else
        {
            //ocultar todos los que tienen la clase filter
            $(".filter").not('.'+$event.target.id).hide('3000');
            //mostrar los que tienen la clase pulsada
            $('.filter').filter('.'+$event.target.id).show('3000');
            
        }
 }
 

}
