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

  ngOnInit(): void {


    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        console.log(value)
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {

            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
      $(this).removeClass("active");
    }
      $(this).addClass("active");
  }

 
}
