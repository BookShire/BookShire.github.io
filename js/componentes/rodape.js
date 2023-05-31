//CRIANDO O COMPONENTE RODAPÉ
class Rodape extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({ mode: "closed"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    //criando a base do componente rodapé
    build(){
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'rodape');

        const txtSlogan = document.createElement('h2');
        txtSlogan.setAttribute('id','slogan');
            txtSlogan.textContent = 'BookShire: porque todos merecemos o direito à leitura.';

        const iconRedesSociais = document.createElement('div');
        iconRedesSociais.setAttribute('class', 'redes');

            const imgTikTok = document.createElement('img');
                imgTikTok.setAttribute('src','../assets/rodape/iconTikTok.svg');
                imgTikTok.setAttribute('alt','Logo do TikTok')
            const imgInsta = document.createElement('img');
                imgInsta.setAttribute('src','../assets/rodape/iconInstagram.svg');
                imgInsta.setAttribute('alt','Logo do Instagram')
            const imgMail = document.createElement('img');
                imgMail.setAttribute('src','../assets/rodape/iconEmail.svg');
                imgMail.setAttribute('alt','Ícone de E-mail')

            const tiktok = document.createElement('a');
                tiktok.setAttribute('href', 'https://www.tiktok.com/@bookshiretok?_t=8ae44KKEao9&_r=1');
                tiktok.setAttribute('target','_blank');
                tiktok.setAttribute('title','Perfil no TikTok');
            const insta = document.createElement('a');
                insta.setAttribute('href', 'https://www.instagram.com/thebookshire_/');
                insta.setAttribute('target','_blank');
                insta.setAttribute('title','Perfil no Instagram');
            const mail = document.createElement('a');
                mail.setAttribute('href', 'mailto:bookshireteam@gmail.com');
                mail.setAttribute('target', '_blank');
                mail.setAttribute('title','Contate-nos por e-mail');
                

            mail.appendChild(imgMail);
            iconRedesSociais.appendChild(mail);
            tiktok.appendChild(imgTikTok);
            iconRedesSociais.appendChild(tiktok);
            insta.appendChild(imgInsta);
            iconRedesSociais.appendChild(insta);
        
        //Add elementos gerais
        componentRoot.appendChild(txtSlogan);
        componentRoot.appendChild(iconRedesSociais);
        
        return componentRoot;
    }

    styles(){
        const style = document.createElement('style');
        style.textContent = `
            .rodape{
                margin-top: auto;
                width: 100%;
                padding: .15rem 3rem;
                background-color: #152139;

                position: absolute;
                bottom: 0;

                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                box-sizing: border-box;
            }

            #slogan{
                color: #C8D1E2;
                font-family: 'Roboto', sans-serif;
                font-size: 18px;
            }

            .redes a img{
                height: 3rem;
                width: auto;
            }

            @media all and (max-width: 750px) {
                .rodape{
                    width: 100%;
                    padding: .1rem 2rem;
    
                    flex-direction: row;
                    align-items: center;
                }

                #slogan{ font-size: 15px; }
    
                .redes a img{
                    height: 2.5rem;
                    width: auto;
                }
            }

            @media all and (max-width: 575px) {
                .rodape{
                    width: 100%;
                    padding: .05rem 2rem;
    
                    flex-direction: column;
                    align-items: center;
                }

                #slogan{ font-size: 12px; }
    
                .redes a img{
                    height: 2rem;
                    width: auto;
                }
            }
        `;

        return style;
    }
}

//definindo o componente rodapé
customElements.define("rodape-bookshire", Rodape);