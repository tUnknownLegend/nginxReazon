'use strict'

export default class Header {
    #data
    #parent

    constructor(parent) {
        this.#parent = parent;
    }

    get items() {
        return this.#data
    }

    set items(value) {
        this.#data = value
    }

    render() {
        alert(111);
        // const template = Handlebars.compile('Header.hbs')
        // Handlebars.registerPartial('HeaderComponent', Handlebars.templates['Header.hbs']);
        this.#parent.insertAdjacentHTML('beforebegin', Handlebars.templates['Header.hbs']); 
    }
}
