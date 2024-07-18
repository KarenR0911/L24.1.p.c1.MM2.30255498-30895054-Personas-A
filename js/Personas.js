export default class Personas {
  constructor(nom, s) {
    this.nombre = nom;
    this.sexo = s;
  }
  set nombre(nom) {
    this._nombre = nom;
  }
  set sexo(s) {
    this._sexo = s;
  }
  get nombre() {
    return this._nombre;
  }
  get sexo() {
    return this._sexo;
  }
}
