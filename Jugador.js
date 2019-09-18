class Jugador{
    constructor(numero){
        this._numero = numero;
        this._posiscion = 0;
    }
    get numero(){
        return this._numero
    }
    set numero(numero){
        this._numero = numero;
    }
    get posiscion(){
        return this._posiscion
    }
    set posiscion(posiscion){
        this._posiscion = posiscion;
    }
    mover = (dado) =>{
        let resultado = 0;
        resultado = this._posiscion + dado;
        return resultado
    }
}
export default Jugador