export class Idea {
  static idSiguiente = 1;

  _id: number;
  _titulo: string;
  _descripcion: string;
  _categoria: string;
  _estado: string;

  constructor(titulo: string, descripcion: string, categoria: string, estado: string = 'Borrador') {
    this._id = Idea.idSiguiente++;
    this._titulo = titulo;
    this._descripcion = descripcion;
    this._categoria = categoria;
    this._estado = estado;

  }
}
