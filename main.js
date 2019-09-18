class Main{
    constructor(){
        this._Primos=[];
        document.querySelector('#Iniciar').addEventListener('click', this._mostrarPrimos);
    }
    _colarPrimos = () =>{
        console.log("jala");
        
        for(let i=2;i<this._Primos.length;i++){
            if(this._Primos[i]===1){
                for(let j = i*2; j<this._Primos.length; j+=i){
                    this._Primos[j]=0;
                }
            }
        }
    }
}
let main = new Main();