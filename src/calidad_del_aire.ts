import { Zona } from "./zona";
import { MedicionesDeContaminacion } from "./mediciones_de_contaminacion";
import { DatosDeMedicion } from "./datos_de_medicion";
export class CalidadDelAire {
  private dia: Date;
  private zona: Zona;
  private contaminacion: Array<MedicionesDeContaminacion>;

  constructor(dia: Date, zona: Zona, mediciones: DatosDeMedicion) {
    this.dia = dia;
    this.zona = zona;
    let infoMediciones: string | null = mediciones.getMediciones();

    if (infoMediciones) {
      this.contaminacion = this.extraerMediciones(infoMediciones);
    } else {
      this.contaminacion = [];
    }
  }

  public getMedicionesContaminacion(): Array<MedicionesDeContaminacion> {
    return this.contaminacion;
  }

  public getZona(): Array<string> {
    return this.zona.getZona();
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
          .every((zona, index) => zona === this.zona.getZona()[index])
      ) {
        let indices = [5, 6, 7, 8, 9];
        let mediciones = indices.map((i) => Number(elementos_linea[i]));
        let medicion = new MedicionesDeContaminacion(mediciones);
        contaminacion.push(medicion);
      }
    });

    return contaminacion;
  }

  // hacer la media de las mediciones de contaminación
  public calcularMediaContaminacion(): Array<[string, number]> {
    let mediciones: number[] = new Array(5).fill(0);

    // sumar los valores de cada contaminante
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

    // terminar de hacer la media y parsear a dos decimales
    const media: MedicionesDeContaminacion = new MedicionesDeContaminacion(
      mediaValores
    );

    return media.getMediciones();
  }
}
