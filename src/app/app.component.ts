import { Component, OnInit } from '@angular/core';
//seo
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent  implements OnInit{
  title = 'portfolio';

  //seo
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta) {
  }
  ngOnInit() {
    //se suscribe al evento, al cambio de ruta
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
        // atravesamos de forma recursiva el ActivatedRoute para llegar a la ruta actual
        var rt = this.getChild(this.activatedRoute)
        //se suscribe a la propiedad datos y lee los datos de la ruta
        rt.data.subscribe(data => {
          //console.log(data);

          //establece el titulo
          this.titleService.setTitle(data.title)
 
          if (data.description) {
            this.metaService.updateTag({ name: 'description', content: data.descrption })
          } else {
            this.metaService.removeTag("name='description'")
          }
 
          if (data.robots) {
            this.metaService.updateTag({ name: 'robots', content: data.robots })
          } else {
            this.metaService.updateTag({ name: 'robots', content: "follow,index" })
          }
 
          if (data.ogUrl) {
            this.metaService.updateTag({ property: 'og:url', content: data.ogUrl })
          } else {
            this.metaService.updateTag({ property: 'og:url', content: this.router.url })
          }
 
          if (data.ogTitle) {
            this.metaService.updateTag({ property: 'og:title', content: data.ogTitle })
          } else {
            this.metaService.removeTag("property='og:title'")
          }
 
          if (data.ogDescription) {
            this.metaService.updateTag({ property: 'og:description', content: data.ogDescription })
          } else {
            this.metaService.removeTag("property='og:description'")
          }
 
          if (data.ogImage) {
            this.metaService.updateTag({ property: 'og:image', content: data.ogImage })
          } else {
            this.metaService.removeTag("property='og:image'")
          }
 
 
        })
 
      })
 
  }
 
  getChild(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
 
  }
}
