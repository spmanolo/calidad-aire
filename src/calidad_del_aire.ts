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
      let zona_linea = new Zona(
        elementos_linea[0],
        elementos_linea[1],
        elementos_linea[2]
      );

      if (
        zona_linea
          .getZona()
          .every((zona, index) => zona === this.zona.getZona()[index])
      ) {
        let medicion = new MedicionesDeContaminacion(
          Number(elementos_linea[5]),
          Number(elementos_linea[6]),
          Number(elementos_linea[7]),
          Number(elementos_linea[8]),
          Number(elementos_linea[9])
        );
        contaminacion.push(medicion);
      }
    });

    return contaminacion;
  }

  // hacer la media de las mediciones de contaminación
  public calcularMediaContaminacion(): Array<[string, number]> {
    let totalPM10 = 0;
    let totalPM25 = 0;
    let totalNO2 = 0;
    let totalO3 = 0;
    let totalSO2 = 0;

    // sumar los valores de cada contaminante
    this.contaminacion.forEach((medicion) => {
      const medicionesTotales: Array<[string, number]> =
        medicion.getMediciones();

      totalPM10 += medicionesTotales[0][1];
      totalPM25 += medicionesTotales[1][1];
      totalNO2 += medicionesTotales[2][1];
      totalO3 += medicionesTotales[3][1];
      totalSO2 += medicionesTotales[4][1];
    });

    // terminar de hacer la media y parsear a dos decimales
    const media: MedicionesDeContaminacion = new MedicionesDeContaminacion(
      parseFloat((totalPM10 / this.contaminacion.length).toFixed(2)),
      parseFloat((totalPM25 / this.contaminacion.length).toFixed(2)),
      parseFloat((totalNO2 / this.contaminacion.length).toFixed(2)),
      parseFloat((totalO3 / this.contaminacion.length).toFixed(2)),
      parseFloat((totalSO2 / this.contaminacion.length).toFixed(2))
    );

    return media.getMediciones();
  }
}
