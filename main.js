import Tablero from "./Tablero.js"
class Main{
    constructor(){
        this._Primos=[];
        this.tablero = new Tablero();
        document.querySelector('#Iniciar').addEventListener('click', this._iniciarPartida);
    }
    _iniciarPartida = () =>{
        this.tablero.iniciarjuego();
    }
}
let main = new Main();