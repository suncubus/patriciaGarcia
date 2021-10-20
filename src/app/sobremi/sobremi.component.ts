import { Component, OnInit } from '@angular/core';
import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';

import { faCog } from '@fortawesome/free-solid-svg-icons';

import { Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.scss']
})
export class SobremiComponent implements OnInit {

  faCog = faCog;


  constructor(config: NgbPopoverConfig) { 
    //muestra el popover al hacer el hover
    config.triggers = 'hover';

  }

  ngOnInit(): void {
      
  }
  
}
