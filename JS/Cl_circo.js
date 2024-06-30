export default class Cl_circo{
    constructor(){
        this.contNiño = 0;
        this.contAdolescente = 0;
        this.contEspectador = 0;
        this.acumVentAdol = 0;
        this.mayorEspectador = "";
    }

    procesarEspectador(e){
        //Contar niños, adolescentes y acumular ventas a adolescentes
        if(e.edad <= 12){
            this.contNiño++;
        } else if((e.edad > 12) && (e.edad <= 18)){
            this.contAdolescente++;
            this.acumVentAdol += e.calcMontoTotal();
        }

        //Contar espectadores totales
        this.contEspectador++;

        //Comparar cantidad de niños y adolescentes espectadores
        if(this.contNiño > this.contAdolescente){
            this.mayorEspectador = "Niños";
        } else if(this.contAdolescente > this.contNiño){
            this.mayorEspectador = "Adolescentes";
        } else if (this.contNiño == this.contAdolescente){
            this.mayorEspectador = "Misma cantidad";
        }
    }

    calcPromedioVentAdolescente(){
        if(this.contAdolescente > 0){
            return this.acumVentAdol / this.contAdolescente;
        } else {
            return 0.0;
        }
    }

    devolverMayorEspectador(){
        return this.mayorEspectador;
    }

    calcPorcNiñoEspectador(){
        if(this.contEspectador > 0){
            return (this.contNiño / this.contEspectador) * 100;
        } else {
            return 0;
        }
    }
}