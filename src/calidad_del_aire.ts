import { Zona } from "./zona";
import { MedicionesDeContaminacion } from "./mediciones_de_contaminacion";

/**
 * Clase calidadDelAire.
 * Entidad.
 */
class calidadDelAire {

    private dia: Date;
    private zona: Zona;
    private contaminacion: Array<MedicionesDeContaminacion>;

    /**
     * Constructor de la clase calidadDelAire.
     * @param dia 
     * @param zona 
     * @param contaminacion 
     */
    constructor(dia: Date, zona: Zona, contaminacion: Array<MedicionesDeContaminacion>) {
        this.dia = dia;
        this.zona = zona;
        this.contaminacion = contaminacion;
    }
}