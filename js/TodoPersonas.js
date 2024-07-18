export default class TodoPersonas {
  constructor() {
    this.contPersonas = 0;
    this.contFem = 0;
    this.contMasc = 0;
  }
  procesarPersonas(per) {
    this.contPersonas++;
    if (per.sexo == "F") {
      this.contFem++;
    } else if (per.sexo == "M") {
      this.contMasc++;
    }
  }
  porcentajeMujeres() {
    return (this.contFem / this.contPersonas) * 100;
  }
  retornarMasPersonas() {
    if (this.contFem > this.contMasc) {
      return "Hay más mujeres";
    } else if (this.contFem < this.contMasc) {
      return "Hay más hombres";
    } else {
      return "Están iguales";
    }
  }
}
