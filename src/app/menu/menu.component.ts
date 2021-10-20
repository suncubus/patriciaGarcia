import { Component } from '@angular/core';

//ICONS
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
//https://github.com/FortAwesome/Font-Awesome/tree/master/svgs
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
//https://github.com/FortAwesome/Font-Awesome/tree/master/svgs/solid

import { Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],

})
export class MenuComponent  {  

  faLinkedin  = faLinkedin;
  faGithub    = faGithub;
  faEnvelope  = faEnvelope;

  

  constructor() { }
  
  isOpen = false;

  //animación menu
  toggle(event) {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen)
    //event.preventDefault();
  }
  goLink(url:string){
    window.open(url, "_blank");
  }

}