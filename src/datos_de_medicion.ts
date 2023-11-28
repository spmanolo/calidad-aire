import * as fs from "fs";

export class DatosDeMedicion {
  private ruta: string;
  private mediciones: string | null = null;

  constructor(ruta: string) {
    this.ruta = ruta;
  }

  private leerArchivo(): void {
    try {
      this.mediciones = fs.readFileSync(this.ruta, "utf8");
    } catch (error) {
      console.error(`Error al leer el archivo: ${error}`);
    }
  }

  public getMediciones(): string | null {
    if (!this.mediciones) {
      this.leerArchivo();
    }
    return this.mediciones;
  }
}
