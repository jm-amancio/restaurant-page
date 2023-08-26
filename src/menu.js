const textPlaceholder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

// create menu container -> (title + subtitle + card_container)
export default function displayMenu() {
    const menu_page = document.createElement('div');
    menu_page.classList.add('menu-container');

    const title = document.createElement('h2');
    title.textContent = 'Menu'
    const card_container = document.createElement('div');
    card_container.classList.add('card-container');

    // cards info
    const card = [];
    card[0] = new Card('Gintoki Sakata', textPlaceholder, "'https://cdn.myanimelist.net/images/characters/15/241479.jpg'");
    card[1] = new Card('Kagura', textPlaceholder, "'https://cdn.myanimelist.net/images/characters/2/245933.jpg'");
    card[2] = new Card('Shinpachi Shimura', textPlaceholder, "'https://cdn.myanimelist.net/images/characters/14/114081.jpg'");
    card[3] = new Card('Kotaro Katsura', textPlaceholder, "'https://cdn.myanimelist.net/images/characters/11/30271.jpg'");
    card[4] = new Card('Toshiro Hijikata', textPlaceholder, "'https://cdn.myanimelist.net/images/characters/7/73155.jpg'");
    card[5] = new Card('Okita Sogo', textPlaceholder, "'https://cdn.myanimelist.net/images/characters/6/112926.jpg'");
    for(let i=0; i<card.length; i++){
        card_container.appendChild(card[i].createCardDisplay());
    }

    menu_page.appendChild(title);
    menu_page.appendChild(card_container);

    return menu_page;
}

class Card  {
    constructor (cardName, cardText, cardImg_src){
        this.cardName = cardName;
        this.cardText = cardText;
        this.cardImg_src = cardImg_src;
    }

    // public method
    createCardDisplay() {
        const card = document.createElement('div');
        card.classList.add('card');
    
        const name = document.createElement('h3');
        name.textContent = this.cardName;
        const text = document.createElement('p');
        text.textContent = this.cardText;
        const image = document.createElement('img');
        image.src = this.cardImg_src;
    
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(text);
    
        return card;
    }
}