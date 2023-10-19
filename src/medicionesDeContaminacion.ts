/**
 * Clase MedicionesDeContaminacion.
 * Objeto valor que representa las mediciones de la contaminación de una localización.
 */
export class MedicionesDeContaminacion {
    private pm10: number;
    private pm25: number;
    private no2: number;
    private o3: number;
    private so2: number;

    /**
     * Constructor de la clase MedicionesDeContaminacion.
     * @param pm10 Medición de PM10.
     * @param pm25 Medición de PM2.5.
     * @param no2 Medición de NO2.
     * @param o3 Medición de O3.
     * @param so2 Medición de SO2.
     */
    constructor(pm10: number, pm25: number, no2: number, o3: number, so2: number) {
        this.pm10 = pm10;
        this.pm25 = pm25;
        this.no2 = no2;
        this.o3 = o3;
        this.so2 = so2;
    }
}