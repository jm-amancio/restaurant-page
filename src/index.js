import displayHome from "./home.js";
import displayMenu from "./menu.js";
import displayAbout from "./about.js";
import './style.css';

const main_content = document.querySelector('#content');

function startHome(){
    // create header navigation
    const header = document.querySelector('#header');
    const nav_container = document.createElement('div');
    nav_container.classList.add('navigation');
    const button = [];
    button[0] = document.createElement('button');
    button[0].textContent = "Home";
    button[0].setAttribute('value', 'home');
    button[1] = document.createElement('button');
    button[1].textContent = "Menu";
    button[1].setAttribute('value', 'menu');
    button[2] = document.createElement('button');
    button[2].textContent = "About";
    button[2].setAttribute('value', 'about');
    button.forEach(btn => { 
        btn.addEventListener('click', (e) => switchDisplay(e.target.value));
        nav_container.appendChild(btn);
    });
    header.appendChild(nav_container);

    // create content 
    main_content.appendChild(displayHome());

    // create footer
    const footer = document.querySelector('#footer');
    const p = document.createElement('p');
    p.textContent = "Copyright © JM 2023";
    footer.appendChild(p);
}

function switchDisplay(newTab){
    main_content.firstElementChild.remove(); 
    switch(newTab){
        case 'home': 
            main_content.appendChild(displayHome());
            break;
        case 'menu': 
            main_content.appendChild(displayMenu());
            break;
        case 'about': 
            main_content.appendChild(displayAbout());
            break;
        default: 
            main_content.appendChild(displayHome());
    } 
}

startHome();