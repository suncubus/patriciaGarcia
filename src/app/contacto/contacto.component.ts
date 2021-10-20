import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements AfterViewInit{
  
  contactForm: FormGroup = this.fb.group({
    inputName     : ['', [Validators.required, Validators.minLength(3)]],
    inputSurname  : ['', [Validators.required, Validators.minLength(3)]],
    inputEmail    : ['', [Validators.required, Validators.email]],
    txtAreaSubject: ['', Validators.required],
    txtAreaContent: ['', Validators.required]
  })
  
  constructor(private fb:FormBuilder, private http: HttpClient) { }

  //detener animacíon del avión
  @ViewChild('fly') fly: ElementRef;
  ngAfterViewInit(): void {
      this.fly.nativeElement.pauseAnimations();
  } 
  
  isValid( area: string){ 
    return this.contactForm.controls[area].errors && this.contactForm.controls[area].touched;
  }
  save(){
    //si no es válido
    if(this.contactForm.invalid){
      //Pone como si todos los campos han sido tocados
      this.contactForm.markAllAsTouched();
      return
    }else{
      //convierto a string
      let formu = JSON.stringify(this.contactForm.value);
      //convierto a objeto
      let formuValues = JSON.parse(formu);

      const headers = new HttpHeaders({'Content-Type' : 'aplication/json'});

     this.http.post<any>('https://formspree.io/f/mqkwdbyo',
        {Nombre:formuValues.inputName + formuValues.inputSurname, Email: formuValues.inputEmail, Asunto: formuValues.txtAreaSubject, Mensaje:formuValues.txtAreaContent},
        {'headers':headers}).subscribe(
          response => {console.log(response);}      
      ); 
      document.querySelector('#succesMail').classList.remove('d-none');
      document.querySelector('#planeSvg').classList.remove('d-none');

      //comenzar animacíon del avión
      this.fly.nativeElement.unpauseAnimations();
      setTimeout(function(){ 
        this.contactForm.reset(); 
        document.querySelector('#succesMail').classList.add('d-none');
        document.querySelector('#planeSvg').classList.add('d-none');
      }, 6000);
    }    
  }

}
