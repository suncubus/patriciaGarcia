import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

//asignar los componentes a sus rutas correspondientes
import { MenuComponent } from  './menu/menu.component';
import { SobremiComponent } from  './sobremi/sobremi.component';
import { CurriculumComponent } from  './curriculum/curriculum.component';
import { PortfolioComponent } from  './portfolio/portfolio.component';
import { ContactoComponent } from  './contacto/contacto.component';


//Para navegar en la propia página
const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
  scrollPositionRestoration: 'enabled'
}

const routes: Routes = [
  //agregar rutas a los componentes, Cada objeto de la matriz define una ruta
    {
      path:  'menu', //el path que se utiliza
      component:  MenuComponent, //nombre del componente
      data:{//metatags
          title:"Menú web",
          description:"Menú de navegación web, enlaces a Sobre mí, curriculum, experiencia, habilidades, portfolio, redes sociales y contacto",
          ogTitle:"Patricia Garcia. Desarrolladora fron-end"
      }
    },
    {
      path:  'sobremi',
      component:  SobremiComponent,
      data:{//metatags
        title:"Mis competencias y habilidades",
        description:"Descripción de mis habilidades y comppetencias adquiridas. CSS, SASS, JAVASCRIPT, HTML, ANGULAR, BOOTSTRAP, LEAFLET, UX/UI, WORDPRESS, PRESTASHOP, SEO diseño, trabajo en equipo, multidisciplinar",
        ogTitle:"Patricia Garcia. Desarrolladora fron-end"
      }
    },
    {
      path:  'curriculum',
      component:  CurriculumComponent,
      data:{//metatags
        title:"Mi formación y experiencia",
        description:"Fotografía, Técnico superior de Administración de Sistemas informáticos, Master en Diseño y Programación Web, Desarrollo web con Angular",
        ogTitle:"Patricia Garcia. Desarrolladora fron-end"
      }
    },
    {
      path:  'portfolio',
      component:  PortfolioComponent,
      data:{//metatags
        title:"Mis proyectos y trabajos realizados",
        description:"Ekka Oreka, Ureder Estetika, Zufiagi, AlgodónEco",
        ogTitle:"Patricia Garcia. Desarrolladora fron-end"
      }
    },
    {
      path:  'contacto',
      component:  ContactoComponent,
      data:{//metatags
        title:"Formulario de contacto",
        description:"Formulario de contacto, cuéntame lo que quieras",
        ogTitle:"Patricia Garcia. Desarrolladora fron-end"
      }
    }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
