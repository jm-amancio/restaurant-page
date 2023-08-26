const textPlaceholder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida dictum fusce ut placerat orci nulla pellentesque. In hendrerit gravida rutrum quisque non tellus orci ac auctor.';

// create home container -> (title + subtitle + description)
export default function displayHome() {
    const home_page = document.createElement('div');
    home_page.classList.add('home-container');

    const title = document.createElement('h1');
    title.textContent = 'Gintama Cafe'
    const subtitle = document.createElement('h3');
    subtitle.textContent = `Eastern Visayas's Gintama Themed Cafe`;
    const description = document.createElement('p');
    description.textContent = textPlaceholder;

    home_page.appendChild(title);
    home_page.appendChild(subtitle);
    home_page.appendChild(description);

    return home_page;
}