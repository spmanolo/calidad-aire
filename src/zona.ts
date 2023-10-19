/**
 * Clase Localizacion.
 * Objeto valor que representa la localización.
 */
export class Localizacion {
    private privincia: string;
    private municipio: string;
    private estacion: string;

    /**
     * Constructor de la clase Localizacion.
     * @param provincia Provincia de la localización.
     * @param municipio Municipio de la localización.
     * @param estacion Estación de la localización.
     */
    constructor(provincia: string, municipio: string, estacion: string) {
        this.privincia = provincia;
        this.municipio = municipio;
        this.estacion = estacion;
    }

    /**
     * Método que devuelve la provincia de la localización.
     * @returns Provincia de la localización.
     */
    public getProvincia(): string {
        return this.privincia;
    }

    /**
     * Método que devuelve el municipio de la localización.
     * @returns Municipio de la localización.
     */
    public getMunicipio(): string {
        return this.municipio;
    }

    /**
     * Método que devuelve la estación de la localización.
     * @returns Estación de la localización.
     */
    public getEstacion(): string {
        return this.estacion;
    }
}