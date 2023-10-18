import { Localizacion } from "./localizacion";
import { MedicionesDeContaminacion } from "./medicionesDeContaminacion";

/**
 * Clase calidadDelAire.
 * Entidad.
 */
class calidadDelAire {

    private dia: Date;
    private zona: Localizacion;
    private contaminacion: Array<MedicionesDeContaminacion>;

    /**
     * Constructor de la clase calidadDelAire.
     * @param dia 
     * @param zona 
     * @param contaminacion 
     * @param mediaDeContaminacion 
     * @param fiabilidad 
     */
    constructor(dia: Date, zona: Localizacion, contaminacion: Array<MedicionesDeContaminacion>) {
        this.dia = dia;
        this.zona = zona;
        this.contaminacion = contaminacion;
    }
}