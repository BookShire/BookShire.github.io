class Card extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({ mode: "closed"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'card');

        const Card_titulo = document.createElement('h3');
        Card_titulo.textContent = this.getAttribute('titulo');;

        const Card_descricao = document.createElement('p');
        Card_descricao.textContent = this.getAttribute('descricao');;

        const Card_img = document.createElement('img');
        Card_img.setAttribute('src', this.getAttribute('urlImg'));

        componentRoot.appendChild(Card_img);
        componentRoot.appendChild(Card_titulo);
        componentRoot.appendChild(Card_descricao);

        return componentRoot;
    }

    styles(){
        const style = document.createElement('style');
        style.textContent = `
        
        h3{
            font-family: 'Staatliches', cursive;
            font-size: 30px;
            color: #FF6D1F;
        }
        
        `;

        return style;
    }
}

customElements.define("card-item", Card);