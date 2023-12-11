export class MedicionesDeContaminacion {
  private pm10: number;
  private pm25: number;
  private no2: number;
  private o3: number;
  private so2: number;

  constructor(mediciones: number[]) {
    this.pm10 = mediciones[0];
    this.pm25 = mediciones[1];
    this.no2 = mediciones[2];
    this.o3 = mediciones[3];
    this.so2 = mediciones[4];
  }

  public getMediciones(): Array<[string, number]> {
    return [
      ["pm10", this.pm10],
      ["pm25", this.pm25],
      ["no2", this.no2],
      ["o3", this.o3],
      ["so2", this.so2],
    ];
  }
}
