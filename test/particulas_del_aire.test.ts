import { describe, expect, test } from "bun:test";
import { DatosDeMedicion } from "../src/datos_de_medicion";
import { ParticulasDelAire } from "../src/particulas_del_aire";
import { MedicionesDeContaminacion } from "../src/mediciones_de_contaminacion";
import { Zona } from "../src/zona";

describe("Comprobar mediciones de contaminación", () => {
  const datosPrueba = [
    {
      nombre: "Granada",
      dia: new Date("2023-11-24"),
      medicionesRuta: "data/GR_20231124.csv",
      zona: new Zona("GRANADA", "ARMILLA", "CIUDAD DEPORTIVA"),
      expected: Array<[string, number]>(
        ["pm10", 33.72],
        ["pm25", 0],
        ["no2", 27.88],
        ["o3", 34.91],
        ["so2", 4.17]
      ),
      ruta: "https://www.juntadeandalucia.es/medioambiente/atmosfera/informes_siva/cuantitativo/2023/GR_20231124.csv",
    },
    {
      nombre: "Almería",
      dia: new Date("2023-01-01"),
      medicionesRuta: "data/AL_20230101.csv",
      zona: new Zona("ALMERIA", "EJIDO, EL", "EL EJIDO"),
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
      zona: new Zona("CADIZ", "ALGECIRAS", "ALGECIRAS EPS"),
      expected: Array<[string, number]>(
        ["pm10", 9.18],
        ["pm25", 0],
        ["no2", 20.25],
        ["o3", 62.54],
        ["so2", 2.67]
      ),
    },
    {
      nombre: "Córdoba",
      dia: new Date("2023-02-03"),
      medicionesRuta: "data/CO_20230203.csv",
      zona: new Zona("CORDOBA", "ESPIEL", "POBLADO"),
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
      zona: new Zona("HUELVA", "HUELVA", "LA ORDEN"),
      expected: Array<[string, number]>(
        ["pm10", 15.24],
        ["pm25", 0],
        ["no2", 2.46],
        ["o3", 43.31],
        ["so2", 16.63]
      ),
    },
    {
      nombre: "Jaén",
      dia: new Date("2023-02-28"),
      medicionesRuta: "data/JA_20230228.csv",
      zona: new Zona(
        "JAEN",
        "VILLANUEVA DEL ARZOBISPO",
        "VILLANUEVA DEL ARZOBISPO"
      ),
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
      zona: new Zona("MALAGA", "CAMPILLOS", "CAMPILLOS"),
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
      zona: new Zona("SEVILLA", "DOS HERMANAS", "DOS HERMANAS"),
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

        const medicionesDeContaminacion: Array<MedicionesDeContaminacion> =
          calidadDelAire.getMedicionesContaminacion();

        expect(medicionesDeContaminacion.length).toBe(24);

        const mediaMedidas: Array<[string, number]> =
          calidadDelAire.calcularDatosParaAlergicos();

        expect(mediaMedidas.length).toBe(5);

        expect(mediaMedidas).toEqual(datos.expected);
      }
    );
  });

  test.skip("debería descargar el fichero correcto de la web dado un día", () => {});
});
