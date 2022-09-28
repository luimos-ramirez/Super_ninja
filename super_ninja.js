class Ninja {

    constructor(nombre, salud, velocidad, fuerza) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName() {
        return this.nombre;
    }
    showStats() {
        return `
        Nombre: ${this.nombre}
        Fuerza: ${this.fuerza}
        Velocidad: ${this.velocidad}
        Salud: ${this.salud}
        `
    }
    drinkSake() {
        return this.salud=this.salud+1;
    }
}
class Sensei extends Ninja {

    constructor(nombre, salud=200, velocidad=10, fuerza=10, sabiduria) {
        super(nombre, salud, velocidad, fuerza)
        this.sabiduria = 10;
    }
    speakWisdom() {
        let mensaje_padre = super.drinkSake();
        return mensaje_padre+" Eres el mejor!";
    }
}
const superSensei = new Sensei("Maria")

console.log(superSensei.speakWisdom());
console.log(superSensei.drinkSake());

