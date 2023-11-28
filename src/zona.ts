export class Zona {
  private provincia: string;
  private municipio: string;
  private estacion: string;

  constructor(provincia: string, municipio: string, estacion: string) {
    this.provincia = provincia.trim();
    this.municipio = municipio.trim();
    this.estacion = estacion.trim();
  }

  public getZona(): Array<string> {
    return [this.provincia, this.municipio, this.estacion];
  }
}
