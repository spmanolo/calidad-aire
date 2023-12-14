import { Zona } from "./zona";
import { MedicionesDeContaminacion } from "./mediciones_de_contaminacion";
import { DatosDeMedicion } from "./datos_de_medicion";

export class ParticulasDelAire {
  private dia: Date;
  private zona: Zona;
  private contaminacion: Array<MedicionesDeContaminacion>;

  constructor(dia: Date, zona: string, mediciones: DatosDeMedicion) {
    this.dia = dia;
    this.zona = this.obtenerZona(zona);
    let infoMediciones: string | null = mediciones.getMediciones();

    if (infoMediciones && this.zona instanceof Zona) {
      this.contaminacion = this.extraerMediciones(infoMediciones);
    } else {
      this.contaminacion = [];
    }
  }

  public obtenerZona(zona: string): Zona {
    let elementos_zona: Array<string> = zona.split(",");
    let provincia = elementos_zona[0];
    let municipio = elementos_zona[1];
    let estacion = elementos_zona[2] ? elementos_zona[2] : "";

    return new Zona(provincia, municipio, estacion);
  }

  public extraerMediciones(
    infoMediciones: string
  ): Array<MedicionesDeContaminacion> {
    let contaminacion: Array<MedicionesDeContaminacion> = [];
    let lineas: Array<string> = infoMediciones.split("\n");

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
        let mediciones = indices.map((i) => Number(elementos_linea[i]));
        let medicion = new MedicionesDeContaminacion(mediciones);
        contaminacion.push(medicion);
      }
    });

    return contaminacion;
  }

  public calcularDatosParaAlergicos(): Array<[string, number]> {
    let mediciones: number[] = new Array(5).fill(0);

    this.contaminacion.forEach((medicion) => {
      const medicionesTotales: Array<[string, number]> =
        medicion.getMediciones();

      medicionesTotales.forEach((medicion, index) => {
        mediciones[index] += medicion[1];
      });
    });

    let mediaValores = mediciones.map((medicion) =>
      parseFloat((medicion / this.contaminacion.length).toFixed(2))
    );

    const media: MedicionesDeContaminacion = new MedicionesDeContaminacion(
      mediaValores
    );

    return media.getMediciones();
  }
}
