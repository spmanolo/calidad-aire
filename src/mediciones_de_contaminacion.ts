export class MedicionesDeContaminacion {
  private pm10: number;
  private pm25: number;
  private no2: number;
  private o3: number;
  private so2: number;

  constructor(
    pm10: number,
    pm25: number,
    no2: number,
    o3: number,
    so2: number
  ) {
    this.pm10 = pm10;
    this.pm25 = pm25;
    this.no2 = no2;
    this.o3 = o3;
    this.so2 = so2;
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
