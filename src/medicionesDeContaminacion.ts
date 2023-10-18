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

    /**
     * Metedo que devuelve la medición de PM10.
     * @returns Medición de PM10.
     */
    public getPm10(): number {
        return this.pm10;
    }

    /**
     * Metedo que devuelve la medición de PM2.5.
     * @returns Medición de PM2.5.
     */
    public getPm25(): number {
        return this.pm25;
    }

    /**
     * Metedo que devuelve la medición de NO2.
     * @returns Medición de NO2.
     */
    public getNo2(): number {
        return this.no2;
    }

    /**
     * Metedo que devuelve la medición de O3.
     * @returns Medición de O3.
     */
    public getO3(): number {
        return this.o3;
    }

    /**
     * Metedo que devuelve la medición de SO2.
     * @returns Medición de SO2.
     */
    public getSo2(): number {
        return this.so2;
    }
}