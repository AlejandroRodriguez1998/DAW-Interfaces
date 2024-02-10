function createNavbar() {
    // Crear el elemento <nav> y asignarle clases
    const nav = document.createElement('nav');
    nav.className = 'navbar navbar-expand-lg navbar-light bg-light';

    // Crear el div contenedor fluido
    const containerFluid = document.createElement('div');
    containerFluid.className = 'container-fluid';
    nav.appendChild(containerFluid);

    // Crear el enlace de la marca de la navbar
    const navbarBrand = document.createElement('a');
    navbarBrand.className = 'navbar-brand pt-0';
    navbarBrand.href = '#';
    navbarBrand.textContent = 'JQuery';
    containerFluid.appendChild(navbarBrand);

    // Crear el botón del toggler de la navbar
    const navbarToggler = document.createElement('button');
    navbarToggler.className = 'navbar-toggler';
    navbarToggler.type = 'button';
    navbarToggler.dataset.bsToggle = 'collapse';
    navbarToggler.dataset.bsTarget = '#navbarNav';
    navbarToggler.setAttribute('aria-controls', 'navbarNav');
    navbarToggler.setAttribute('aria-expanded', 'false');
    navbarToggler.setAttribute('aria-label', 'Toggle navigation');

    const span = document.createElement('span');
    span.className = 'navbar-toggler-icon';
    navbarToggler.appendChild(span);

    containerFluid.appendChild(navbarToggler);

    // Crear el div para el contenido colapsable
    const collapseDiv = document.createElement('div');
    collapseDiv.className = 'collapse navbar-collapse';
    collapseDiv.id = 'navbarNav';
    containerFluid.appendChild(collapseDiv);

    // Crear la lista de navegación
    const ul = document.createElement('ul');
    ul.className = 'navbar-nav';
    collapseDiv.appendChild(ul);

    // Crear los elementos de la lista
    const navItems = [
    { href: '#', text: 'Home', active: true },
    { href: '#', text: 'Features', active: false },
    { href: '#', text: 'Pricing', active: false },
    { href: '#', text: 'Disabled', active: false, disabled: true }
    ];

    navItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'nav-item';

        const a = document.createElement('a');
        a.className = 'nav-link';
        
        if (item.active) a.classList.add('active');

        if (item.disabled) {
            a.classList.add('disabled');
            a.setAttribute('tabindex', '-1');
            a.setAttribute('aria-disabled', 'true');
        }

        a.href = item.href;
        a.textContent = item.text;

        li.appendChild(a);
        ul.appendChild(li);
    });

    // Finalmente, agregar el <nav> al cuerpo del documento o a cualquier otro elemento deseado
    document.getElementById('navBar').appendChild(nav);
}

function createHome(){
    // Crear el elemento <img>
    const img = document.createElement('img');
    img.src = 'img/background.webp';
    img.alt = 'Home';
    img.className = 'background-image';

    // Crear el elemento <h1>
    const h1 = document.createElement('h1');
    h1.textContent = 'Web Development';
    h1.className = 'home-title';

    // Crear el elemento <h2>
    const h2_Al = document.createElement('h2');
    h2_Al.textContent = 'Alejandro Paniagua Rodriguez';
    h2_Al.className = 'person-names';

    const h2_An = document.createElement('h2');
    h2_An.textContent = 'Angela Gijón Flores';
    h2_An.className = 'person-names m-0 p-0';

    // Añadir los elementos creados al home del documento o al contenedor deseado
    document.getElementById('home').appendChild(img);
    document.getElementById('home').appendChild(h1);
    document.getElementById('home').appendChild(h2_Al);
    document.getElementById('home').appendChild(h2_An);

}

function createList(){
    // Crear el elemento <ul> y asignarle la clase
    const ul = document.createElement('ul');
    ul.className = 'list-group';

    // Array con el texto de cada item
    const items = ['An item', 'A second item', 'A third item', 'A fourth item', 'And a fifth one'];

    // Crear y añadir los <li> al <ul>
    items.forEach(item => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = item;
        ul.appendChild(li);
    });

    // Añadir el <ul> al cuerpo del documento
    document.getElementById('list').appendChild(ul);

}

function main() {
    createNavbar();
    createHome();
    createList();
}

window.onload = main();