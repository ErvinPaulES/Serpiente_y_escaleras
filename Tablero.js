import Jugador from "./Jugador.js"
import Dado from "./Dado.js"
class Tablero{
    constructor(){
        this._cuadros = [];
    }
    inicializar = () =>{
        for(let i = 0; i<110; i++ ){
            this._cuadros[i] = i;
        }
        this._cuadros[10] = 20;
        this._cuadros[15] = 23;
        this._cuadros[19] = 25;
        this._cuadros[30] = 40;
        this._cuadros[35] = 44;
        this._cuadros[52] = 65;
        this._cuadros[62] = 80;
        this._cuadros[75] = 90;

        this._cuadros[25] = 9;
        this._cuadros[13] = 3;
        this._cuadros[95] = 60;
        this._cuadros[80] = 70;
        this._cuadros[64] = 21;
        this._cuadros[55] = 28;
        this._cuadros[46] = 33;
        this._cuadros[28] = 12;

    }
    iniciarjuego = () =>{
        this.inicializar();
        let jugador1 = new Jugador(1);
        let jugador2 = new Jugador(2);
        let dado = new Dado();
        let rondas = 1;
        console.log("Jugadores listos en el punto de partida");
        
        do{
            jugador1.posiscion = this._cuadros[jugador1.mover(dado.Lanzar())];
            jugador2.posiscion = this._cuadros[jugador2.mover(dado.Lanzar())];
            console.log("Ronda " + rondas);
            console.log("jugador 1 llego a la posición " + jugador1.posiscion);
            console.log("jugador 2 llego a la posición " + jugador2.posiscion);
            rondas++;
            
        }while(jugador1.posiscion<100&&jugador2.posiscion<100)

        if(jugador1.posiscion>=100 && jugador2.posiscion>=100){
            console.log("Empate");
        }
        else if(jugador1.posiscion>=100){
            console.log("El jugador "+ "Numero "+ jugador1.numero + " Gano");
            
        }
        else{
            console.log("El jugador "+ "Numero "+ jugador2.numero + " Gano");
        }
    }
}
export default Tablero
    