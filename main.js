"use strict";
//Relacion entre TS y JS
/*
function imprimir(message) {
  console.log(message);
}

imprimir("Hola mundo");
 */
exports.__esModule = true;
//Tipos
/* let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[];
let f: any[];
a = "a"; */
//ENUM
/*
const ColorVerde;
const ColorAzul;
const ColorRojo;

enum Color {
  Verde = 1,
  Azul = 2,
  Rojo = 3
}
let colorFondo = Color.Azul;
console.log(colorFondo);
 */
//interface (tipos propios)
/*
interface Punto {
  x: number;
  y: number;
}

let dibujarPunto = (punto: Punto) => {
  //...
};

dibujarPunto({
  x: 5,
  y: 6
});
 */
//Clases (cohesion)
/* class Punto {
  x: number;
  y: number;
  dibujar() {
    console.log("X: " + this.x + " Y: " + this.y);
  }
  obtenerPunto() {
    //...
  }
}
//objetos
let punto = new Punto();
punto.x = 4;
punto.y = 2;
punto.dibujar();
 */
//Constructores (cuando se crea instancia de objeto, para hacer el código más corto)
/* class Punto {
  x: number;
  y: number;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }
}

let punto = new Punto(2, 4); */
// Modificadores de acceso: public, private, protected (Para que nuestras propiedades no se cambien después de que se inicialice).
//Por defecto son public
/* class Punto {
  private x: number;
  private y: number;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }
}

let punto = new Punto(2, 4); */
//Modificadores de acceso + constructores (permite reducir codigo)
/* class Punto {
  constructor(private x: number, private y: number) {}
  draw() {
    console.log(this.x + " " + this.y);
  }
}

let punto = new Punto(2, 3);
punto.draw(); */
//Propiedades (setter y getter) parte 1
/* class Punto {
  constructor(private x?: number, y?: number) {}
  getX() {
    return this.x;
  }
  setX(value) {
    if (value <= 0) throw new Error("el valor no puede ser menor a 0");

    this.x = value;
  }
}

let punto = new Punto(2, 3);
punto.setX(5);
let x = punto.getX();
console.log(x);
 */
//Setters y getters parte2 (set y get como palabras reservadas, _x para poder usar camelcase en setters y getters)
/* class Punto {
  constructor(private _x?: number, private _y?: number) {}
  get x() {
    return this._x;
  }
  set x(value) {
    if (value <= 0) throw new Error("invalido por ser menor a 0");

    this._x = value;
  }
}

let punto = new Punto();
let x = punto.x;
console.log(6); */
//Modulos
/* export class Punto {
  constructor(private x?: number, private y?: number) {}
  dibujarPunto() {
    console.log(this.x + ", " + this.y);
  }
}

import { Punto } from "./punto";
let punto = new Punto(2, 4);
 */
var facebook_1 = require("./facebook");
var facebook = new facebook_1.Facebook(4, false);
facebook.like();
console.log("Tienes " + facebook.likeCounter + " likes y el bot\u00F3n est\u00E1 " + facebook.isClicked);
//nuevo comentario
