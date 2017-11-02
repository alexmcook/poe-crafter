export default class Stat {
  id: string;
  valueMin: number;
  valueMax: number;
  value?: number;
  key: number;
  constructor(stat: Stat) {
    this.id = stat.id;
    this.valueMin = stat.valueMin;
    this.valueMax = stat.valueMax;
    if (stat.value != null) {
      this.value = stat.value;
    }
    this.key = stat.key;
  }
}
