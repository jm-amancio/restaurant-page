const textPlaceholder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed egestas egestas fringilla phasellus faucibus. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Eu augue ut lectus arcu bibendum at. Commodo nulla facilisi nullam vehicula ipsum a. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Ut venenatis tellus in metus. Ornare aenean euismod elementum nisi quis eleifend quam. Viverra mauris in aliquam sem fringilla ut. Lectus sit amet est placerat. Viverra nam libero justo laoreet sit. Odio ut enim blandit volutpat maecenas volutpat blandit. Blandit turpis cursus in hac habitasse platea. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Odio facilisis mauris sit amet. Cras semper auctor neque vitae. Metus aliquam eleifend mi in nulla. Velit sed ullamcorper morbi tincidunt ornare. Tincidunt ornare massa eget egestas purus. Semper eget duis at tellus at. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Massa tincidunt dui ut ornare lectus sit amet. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Ut morbi tincidunt augue interdum velit. Vitae semper quis lectus nulla. Sit amet cursus sit amet dictum sit amet justo. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Volutpat consequat mauris nunc congue. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Amet consectetur adipiscing elit ut aliquam purus sit. Tempus quam pellentesque nec nam aliquam sem. In nibh mauris cursus mattis molestie. Quam quisque id diam vel quam elementum pulvinar etiam. Velit euismod in pellentesque massa placerat duis ultricies. Nunc consequat interdum varius sit. In vitae turpis massa sed elementum tempus egestas sed sed. Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum.'

// create about container -> (title + subtitle + description)
export default function displayAbout() {
    const about_page = document.createElement('div');
    about_page.classList.add('about-container');

    const title = document.createElement('h2');
    title.textContent = 'About Us';

    const description = document.createElement('p');
    description.textContent = textPlaceholder;

    about_page.appendChild(title);
    about_page.appendChild(description);

    return about_page;
}