import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}

  hacerclick(){
    console.log("hice click");
    this.router.navigate(['pagina1']);
  }
  hacerclick2(){
    console.log("hice click");
    this.router.navigate(['pagina2']);
  }

  navegar(ruta:string){
    this.router.navigate(['/'+ruta])
  }
  hacerclick3(){
    console.log("hice click");
    this.router.navigate(['formulario']);
  }
}
