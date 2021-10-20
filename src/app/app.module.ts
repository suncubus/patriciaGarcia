import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';

//popover
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//forms
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


//icons
//URL ayuda instalacion https://www.npmjs.com/package/@fortawesome/angular-fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//rutas
import { AppRoutingModule } from './app-routing.module';

//componentes
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,    
    CurriculumComponent,
    SobremiComponent,
    ContactoComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule
  ],
providers: [Meta],
  bootstrap: [AppComponent],

})
export class AppModule { 

}
