import {Component } from '@angular/core';

// Creamos el decorador y le asignamos un nombre con el prefijo app 
@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent{

    mostrar = true;

    frase: any = {
        mensaje: 'Un gran poder requiere una gran responsabilidad',
        autor: 'Ben Parker'
    }
    
    personajes: string [] = ['Spiderman', 'Venom', 'Octopus'];
}