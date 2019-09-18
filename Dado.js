class Dado{
    constructor(){

    }
    Lanzar = () =>{
        let numeroRandom = Math.ceil((Math.random()*45)+5);
        return numeroRandom
    }
}
export default Dado