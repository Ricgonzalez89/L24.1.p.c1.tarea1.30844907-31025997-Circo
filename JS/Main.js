/* Para un espectáculo de circo se tienen 3 tipos de entrada: niños (hasta 12 años), adolescentes
|* (hasta 18) y adultos (mayores de 18, respectivamente), el precio de la entrada general es de
|* 15$. Por cada espectador se tiene: nombre, edad y sexo. Además, se sabe que si el
|* espectador es niño o adolescente obtiene un descuento del 10%. Se requiere mostrar: a)
|* Precio Cancelado por cada espectador, b) Promedio de las Ventas hechas a espectadores
|* adolescentes, c) Entre niños y adolescentes cuál asistió más al circo, b) Porcentaje que
|* representa la cantidad de niños que asistieron al circo con respecto al total de espectadores
|* procesados.
|*
|* El circo suministra la siguiente información demostrativa, para 4 espectadores: (nombre,
|* edad, sexo) (Ana, 8, F) (Luis, 15, M) (Valeria, 12, F) (Fabian, 21, M), según lo cual la salida
|* requerida presenta el siguiente formato:
|*
|* El espectador Ana debe cancelar 13.5$
|* El espectador Luis debe cancelar 13.5$
|* El espectador Valeria debe cancelar 13.5$
|* El espectador Fabián debe cancelar 15.0$
|* Promedio de las Ventas hechas a espectadores adolescentes 13.5
|* Entre niños y adolescentes el espectador que asistió más al circo fue Niños
|* Porcentaje que representa la cantidad de niños que asistieron al circo 50%
*/

import Cl_circo from "./Cl_circo.js";
import Cl_espectador from "./Cl_espectador.js";

let circo = new Cl_circo();
const mensaje = document.getElementById("mensaje");

let espectador1 = new Cl_espectador ("Ana", 8, "F");
let espectador2 = new Cl_espectador ("Luis", 15, "M");
let espectador3 = new Cl_espectador ("Valeria", 12, "F");
let espectador4 = new Cl_espectador ("Fabian", 21, "M");

circo.procesarEspectador(espectador1);

mensaje.innerHTML = `
<br>El espectador ${espectador1._nombre} debe cancelar: ${espectador1.calcMontTotal()}$
`;

circo.procesarEspectador(espectador2);

mensaje.innerHTML += `
<br>El espectador ${espectador2._nombre} debe cancelar: ${espectador2.calcMontTotal()}$
`;

circo.procesarEspectador(espectador3);

mensaje.innerHTML += `
<br>El espectador ${espectador3._nombre} debe cancelar: ${espectador3.calcMontTotal()}$
`;

circo.procesarEspectador(espectador4);

mensaje.innerHTML += `
<br>El espectador ${espectador4._nombre} debe cancelar: ${espectador4.calcMontTotal()}$
<br>
<br>Promedio de las Ventas hechas a espectadores adolescentes ${circo.calcPromedioVentAdolescente()}
<br>Entre niños y adolescentes, el espectador que asistió más al circo fue ${circo.devolverMayorEspectador()}
<br>Porcenaje que representa la cantidad de niños que asistieron al circo ${circo.calcPorcNiñoEspectador()}%
`;