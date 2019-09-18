class Dado{
    constructor(){

    }
    Lanzar = () =>{
        let numeroRandom = Math.ceil((Math.random()*6));
        return numeroRandom
    }
}
export default Dado