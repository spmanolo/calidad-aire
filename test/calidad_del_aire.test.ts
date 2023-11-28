import { describe, expect, test } from "bun:test";
import { DatosDeMedicion } from "../src/datos_de_medicion";
import { CalidadDelAire } from "../src/calidad_del_aire";
import { MedicionesDeContaminacion } from "../src/mediciones_de_contaminacion";
import { Zona } from "../src/zona";

describe("Comprobar mediciones de contaminación", () => {
  const datosPrueba = [
    {
      nombre: "Granada",
      dia: new Date("2023-11-24"),
      medicionesRuta: "data/GR_20231124.csv",
      zona: new Zona("GRANADA", "ARMILLA", "CIUDAD DEPORTIVA"),
      ruta: "https://www.juntadeandalucia.es/medioambiente/atmosfera/informes_siva/cuantitativo/2023/GR_20231124.csv",
    },
    {
      nombre: "Almería",
      dia: new Date("2023-11-24"),
      medicionesRuta: "data/AL_20230101.csv",
      zona: new Zona("ALMERIA", "EJIDO, EL", "EL EJIDO"),
    },
    {
      nombre: "Cádiz",
      dia: new Date("2023-11-24"),
      medicionesRuta: "data/CA_20230123.csv",
      zona: new Zona("CADIZ", "ALGECIRAS", "ALGECIRAS EPS"),
    },
    {
      nombre: "Córdoba",
      dia: new Date("2023-11-24"),
      medicionesRuta: "data/CO_20230203.csv",
      zona: new Zona("CORDOBA", "ESPIEL", "POBLADO"),
    },
    {
      nombre: "Huelva",
      dia: new Date("2023-11-24"),
      medicionesRuta: "data/HU_20230126.csv",
      zona: new Zona("HUELVA", "HUELVA", "LA ORDEN"),
    },
    {
      nombre: "Jaén",
      dia: new Date("2023-11-24"),
      medicionesRuta: "data/JA_20230228.csv",
      zona: new Zona(
        "JAEN",
        "VILLANUEVA DEL ARZOBISPO",
        "VILLANUEVA DEL ARZOBISPO"
      ),
    },
    {
      nombre: "Málaga",
      dia: new Date("2023-11-24"),
      medicionesRuta: "data/MA_20230305.csv",
      zona: new Zona("MALAGA", "CAMPILLOS", "CAMPILLOS"),
    },
    {
      nombre: "Sevilla",
      dia: new Date("2023-11-24"),
      medicionesRuta: "data/SE_20230317.csv",
      zona: new Zona("SEVILLA", "DOS HERMANAS", "DOS HERMANAS"),
    },
  ];

  datosPrueba.forEach((datos) => {
    test(
      "debería obtener correctamente las mediciones de " +
        `${datos.nombre}` +
        " desde su fichero dada una zona",
      () => {
        const mediciones = new DatosDeMedicion(datos.medicionesRuta);

        const calidadDelAire = new CalidadDelAire(
          datos.dia,
          datos.zona,
          mediciones
        );

        console.log("zona: ", calidadDelAire.getZona());

        const medicionesDeContaminacion: Array<MedicionesDeContaminacion> =
          calidadDelAire.getMedicionesContaminacion();
        // esperamos obtener tantas mediciones de una zona como horas tenga un día
        expect(medicionesDeContaminacion.length).toBe(24);

        const mediaMedidas: Array<[string, number]> =
          calidadDelAire.calcularMediaContaminacion();

        // esperamos obtener 5 mediciones de contaminación
        expect(mediaMedidas.length).toBe(5);

        console.log("media de mediciones: ", mediaMedidas);
      }
    );
  });

  test.skip("debería descargar el fichero correcto de la web dado un día", () => {});
});
