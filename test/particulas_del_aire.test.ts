import { describe, expect, test } from "bun:test";
import { DatosDeMedicion } from "../src/datos_de_medicion";
import { ParticulasDelAire } from "../src/particulas_del_aire";

describe("Comprobar mediciones de contaminación", () => {
  const datosPrueba = [
    {
      nombre: "Granada",
      dia: new Date("2023-11-24"),
      medicionesRuta: "data/GR_20231124.csv",
      zona: "granada, granada",
      expected: Array<[string, number]>(
        ["pm10", 23.31],
        ["pm25", 10.92],
        ["no2", 47],
        ["o3", 17.61],
        ["so2", 9.81]
      ),
      ruta: "https://www.juntadeandalucia.es/medioambiente/atmosfera/informes_siva/cuantitativo/2023/GR_20231124.csv",
    },
    {
      nombre: "Almería",
      dia: new Date("2023-01-01"),
      medicionesRuta: "data/AL_20230101.csv",
      zona: "almeria, ejido el",
      expected: Array<[string, number]>(
        ["pm10", 56.64],
        ["pm25", 0],
        ["no2", 29.21],
        ["o3", 18.53],
        ["so2", 3.17]
      ),
    },
    {
      nombre: "Cádiz",
      dia: new Date("2023-01-23"),
      medicionesRuta: "data/CA_20230123.csv",
      zona: "cadiz, algeciras",
      expected: Array<[string, number]>(
        ["pm10", 4.59],
        ["pm25", 3.68],
        ["no2", 20.58],
        ["o3", 31.27],
        ["so2", 3.25]
      ),
    },
    {
      nombre: "Córdoba",
      dia: new Date("2023-02-03"),
      medicionesRuta: "data/CO_20230203.csv",
      zona: "cordoba, espiel",
      expected: Array<[string, number]>(
        ["pm10", 2.37],
        ["pm25", 0],
        ["no2", 3.13],
        ["o3", 0],
        ["so2", 3.96]
      ),
    },
    {
      nombre: "Huelva",
      dia: new Date("2023-01-26"),
      medicionesRuta: "data/HU_20230126.csv",
      zona: "huelva, huelva",
      expected: Array<[string, number]>(
        ["pm10", 20.16],
        ["pm25", 2.46],
        ["no2", 12.17],
        ["o3", 14.7],
        ["so2", 8.51]
      ),
    },
    {
      nombre: "Jaén",
      dia: new Date("2023-02-28"),
      medicionesRuta: "data/JA_20230228.csv",
      zona: "jaen, villanueva del arzobispo",
      expected: Array<[string, number]>(
        ["pm10", 18.09],
        ["pm25", 0],
        ["no2", 12.46],
        ["o3", 65.87],
        ["so2", 0]
      ),
    },
    {
      nombre: "Málaga",
      dia: new Date("2023-03-05"),
      medicionesRuta: "data/MA_20230305.csv",
      zona: "malaga, campillos",
      expected: Array<[string, number]>(
        ["pm10", 0],
        ["pm25", 4.89],
        ["no2", 4.92],
        ["o3", 104.79],
        ["so2", 0]
      ),
    },
    {
      nombre: "Sevilla",
      dia: new Date("2023-03-17"),
      medicionesRuta: "data/SE_20230317.csv",
      zona: "sevilla, dos hermanas",
      expected: Array<[string, number]>(
        ["pm10", 0],
        ["pm25", 0],
        ["no2", 9.42],
        ["o3", 71.81],
        ["so2", 3.79]
      ),
    },
  ];

  datosPrueba.forEach((datos) => {
    test(
      "debería obtener correctamente las mediciones de " +
        `${datos.nombre}` +
        " desde su fichero dada una zona",
      () => {
        const mediciones = new DatosDeMedicion(datos.medicionesRuta);

        const calidadDelAire = new ParticulasDelAire(
          datos.dia,
          datos.zona,
          mediciones
        );

        const mediaMedidas: Array<[string, number]> =
          calidadDelAire.calcularDatosParaAlergicos();

        expect(mediaMedidas.length).toBe(5);

        expect(mediaMedidas).toEqual(datos.expected);
      }
    );
  });

  test.skip("debería descargar el fichero correcto de la web dado un día", () => {});
});
