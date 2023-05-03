import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo: string;
  subtitulo: string;
  image: string;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mi primer app en angular';
  public ArregloTarjeta : Tarjeta []=[];

  ngOnInit():void{//Inicializar cuando se ejecuta la página
  this.ArregloTarjeta = [
    {titulo: 'Video 1', subtitulo: 'Subtitulo de video', image: "./assets/descarga.jpg"},
    {titulo: 'Video 2', subtitulo: 'Subtitulo de video', image: "./assets/im2.jpg"},
    {titulo: 'Video 3', subtitulo: 'Subtitulo de video', image: "./assets/im3.jpg"},
    {titulo: 'Video 4', subtitulo: 'Subtitulo de video', image: "./assets/im4.jpg"},
    {titulo: 'Video 5', subtitulo: 'Subtitulo de video', image: "./assets/im5.jpg"},
  ]
}
}
