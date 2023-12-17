import { Zona } from "./zona";

export type MedicionDeContaminacion = {
  pm10: number;
  pm25: number;
  no2: number;
  o3: number;
  so2: number;
};

export class ParticulasDelAire {
  private dia: Date;
  private zona: Zona;
  private mediciones: Array<MedicionDeContaminacion> = [];
  private ruta_archivo: string;

  constructor(dia: Date, zona: string, ruta: string) {
    this.dia = dia;
    this.zona = this.obtenerZona(zona);
    this.ruta_archivo = ruta;
  }

  private async inicializar() {
    const archivo = Bun.file(this.ruta_archivo);
    const contenido_archivo = await archivo.text();
    this.mediciones = this.extraerMediciones(contenido_archivo);
  }

  public obtenerZona(zona: string): Zona {
    let elementos_zona: Array<string> = zona.split(",");
    let provincia = elementos_zona[0];
    let municipio = elementos_zona[1];
    let estacion = elementos_zona[2] ? elementos_zona[2] : "";

    return new Zona(provincia, municipio, estacion);
  }

  public extraerMediciones(
    contenido_archivo: string
  ): Array<MedicionDeContaminacion> {
    let mediciones: Array<MedicionDeContaminacion> = [];
    let lineas: Array<string> = contenido_archivo.split("\n");

    lineas.shift();
    lineas.pop();

    lineas.forEach((linea) => {
      let elementos_linea: Array<string> = linea.split(";");
      let provincia = elementos_linea[0];
      let municipio = elementos_linea[1];
      let estacion = elementos_linea[2];
      let zona_linea = new Zona(provincia, municipio, estacion);

      if (
        zona_linea
          .getZona()
          .slice(0, 2)
          .every(
            (zona, index) =>
              zona.replace(/,/g, "") ===
              this.zona.getZona().slice(0, 2)[index].replace(/,/g, "")
          )
      ) {
        let indices = [5, 6, 7, 8, 9];
        let medicion_linea = indices.map((i) => Number(elementos_linea[i]));
        let medicion: MedicionDeContaminacion = {
          pm10: medicion_linea[0],
          pm25: medicion_linea[1],
          no2: medicion_linea[2],
          o3: medicion_linea[3],
          so2: medicion_linea[4],
        };

        mediciones.push(medicion);
      }
    });

    return mediciones;
  }

  public async calcularDatosParaAlergicos(mañana: number) {
    if (this.mediciones.length == 0) {
      await this.inicializar();
    }

    this.mediciones =
      mañana == 0
        ? this.mediciones.slice(0, this.mediciones.length / 2)
        : this.mediciones.slice(
            this.mediciones.length / 2,
            this.mediciones.length
          );

    let medicionesTotales: MedicionDeContaminacion = {
      pm10: 0,
      pm25: 0,
      no2: 0,
      o3: 0,
      so2: 0,
    };

    for (let medicion of this.mediciones) {
      for (let key in medicion) {
        medicionesTotales[key as keyof MedicionDeContaminacion] +=
          medicion[key as keyof MedicionDeContaminacion];
      }
    }

    let mediaValores: MedicionDeContaminacion = {
      pm10: 0,
      pm25: 0,
      no2: 0,
      o3: 0,
      so2: 0,
    };

    for (let key in medicionesTotales) {
      if (medicionesTotales.hasOwnProperty(key)) {
        mediaValores[key as keyof MedicionDeContaminacion] = parseFloat(
          (
            medicionesTotales[key as keyof MedicionDeContaminacion] /
            this.mediciones.length
          ).toFixed(2)
        );
      }
    }

    return mediaValores;
  }
}
