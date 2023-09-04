import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  usuario = {
    username: '',
    password: '',
  } 

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.usuario.username)
  }
}
