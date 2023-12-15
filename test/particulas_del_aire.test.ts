import { describe, expect, test } from "bun:test";
import { DatosDeMedicion } from "../src/datos_de_medicion";
import { ParticulasDelAire } from "../src/particulas_del_aire";

describe("Comprobar mediciones de contaminación", () => {
  const datosPrueba = [
    {
      nombre: "Granada",
      dia: new Date("2023-11-24"),
      mañana: 0,
      medicionesRuta: "data/GR_20231124.csv",
      zona: "granada, granada",
      expected: Array<[string, number]>(
        ["pm10", 21.78],
        ["pm25", 10.31],
        ["no2", 38],
        ["o3", 17.66],
        ["so2", 9.88]
      ),
      ruta: "https://www.juntadeandalucia.es/medioambiente/atmosfera/informes_siva/cuantitativo/2023/GR_20231124.csv",
    },
    {
      nombre: "Almería",
      dia: new Date("2023-01-01"),
      mañana: 0,
      medicionesRuta: "data/AL_20230101.csv",
      zona: "almeria, ejido el",
      expected: Array<[string, number]>(
        ["pm10", 56.85],
        ["pm25", 0],
        ["no2", 34.08],
        ["o3", 3.92],
        ["so2", 3.33]
      ),
    },
    {
      nombre: "Cádiz",
      dia: new Date("2023-01-23"),
      mañana: 1,
      medicionesRuta: "data/CA_20230123.csv",
      zona: "cadiz, algeciras",
      expected: Array<[string, number]>(
        ["pm10", 4.62],
        ["pm25", 3.98],
        ["no2", 27.5],
        ["o3", 31.04],
        ["so2", 3.71]
      ),
    },
    {
      nombre: "Córdoba",
      dia: new Date("2023-02-03"),
      mañana: 0,
      medicionesRuta: "data/CO_20230203.csv",
      zona: "cordoba, espiel",
      expected: Array<[string, number]>(
        ["pm10", 4.73],
        ["pm25", 0],
        ["no2", 2.92],
        ["o3", 0],
        ["so2", 3.25]
      ),
    },
    {
      nombre: "Huelva",
      dia: new Date("2023-01-26"),
      mañana: 1,
      medicionesRuta: "data/HU_20230126.csv",
      zona: "huelva, huelva",
      expected: Array<[string, number]>(
        ["pm10", 21.31],
        ["pm25", 2.49],
        ["no2", 13.36],
        ["o3", 15.25],
        ["so2", 8.68]
      ),
    },
    {
      nombre: "Jaén",
      dia: new Date("2023-02-28"),
      mañana: 1,
      medicionesRuta: "data/JA_20230228.csv",
      zona: "jaen, villanueva del arzobispo",
      expected: Array<[string, number]>(
        ["pm10", 19.66],
        ["pm25", 0],
        ["no2", 14.75],
        ["o3", 70.32],
        ["so2", 0]
      ),
    },
    {
      nombre: "Málaga",
      dia: new Date("2023-03-05"),
      mañana: 0,
      medicionesRuta: "data/MA_20230305.csv",
      zona: "malaga, campillos",
      expected: Array<[string, number]>(
        ["pm10", 0],
        ["pm25", 4.88],
        ["no2", 4.5],
        ["o3", 106.13],
        ["so2", 0]
      ),
    },
    {
      nombre: "Sevilla",
      dia: new Date("2023-03-17"),
      mañana: 0,
      medicionesRuta: "data/SE_20230317.csv",
      zona: "sevilla, dos hermanas",
      expected: Array<[string, number]>(
        ["pm10", 0],
        ["pm25", 0],
        ["no2", 10.5],
        ["o3", 70.57],
        ["so2", 3.17]
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
          calidadDelAire.calcularDatosParaAlergicos(datos.mañana);

        expect(mediaMedidas.length).toBe(5);

        expect(mediaMedidas).toEqual(datos.expected);
      }
    );
  });

  test.skip("debería descargar el fichero correcto de la web dado un día", () => {});
});
