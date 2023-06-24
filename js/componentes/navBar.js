class Navbar extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({ mode: "closed"});
        shadow.appendChild(this.build());
        // shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement('nav');

        const embrulho = document.createElement('ul');
        embrulho.setAttribute('class', 'embrulho');

        const tituloBarra = document.createElement('div');
        tituloBarra.setAttribute('class', 'ulItem tituloBarra');
        tituloBarra.setAttribute('onlick', 'window.location="../index.html";');

        const logo = document.createElement('img');
        logo.setAttribute('class', 'logoNav');
        logo.setAttribute('alt', 'Logo do BookShire');
        logo.setAttribute('src', '../assets/logos/BookShire.png');

        const titulo = createElement('h1');
        titulo.setAttribute('class', 'tituloBarra');
        titulo.textContent = 'BookShire';

        const sessoes = document.createElement('div');
        sessoes.setAttribute('class', 'ulItem');

        const home = document.createElement('li');
        home.setAttribute('class', 'active');


        //unindo o Frankenstein
        tituloBarra.appendChild(logo);
        tituloBarra.appendChild(titulo);
        embrulho.appendChild(tituloBarra);

        componentRoot.appendChild(embrulho);

        return componentRoot;
    }

}

customElements.define("nav-bar", Navbar);