class View {

    constructor(elemento) {
        this._elemento = elemento
    }

    template() {
        throw new Error('Metodo "template" implementado.')
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}