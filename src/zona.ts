export class Zona {
  private provincia: string;
  private municipio: string;
  private estacion: string;

  constructor(provincia: string, municipio: string, estacion: string) {
    this.provincia = provincia.trim().toUpperCase();
    this.municipio = municipio.trim().toUpperCase();
    this.estacion = estacion.trim().toUpperCase();
  }

  public getZona(): Array<string> {
    return [this.provincia, this.municipio, this.estacion];
  }
}
