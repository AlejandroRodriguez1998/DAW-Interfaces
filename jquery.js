function createNavbar(){
    $(document).ready(function() {
        // Crear el elemento <nav> y asignarle clases
        const $nav = $('<nav>', { class: 'navbar navbar-expand-lg navbar-light bg-light fixed-top' });

        // Crear el div contenedor fluido
        const $containerFluid = $('<div>', { class: 'container-fluid' });

        // Crear el enlace de la marca de la navbar
        const $navbarBrand = $('<a>', { class: 'navbar-brand pt-0', href: '#', text: 'JQuery' });

        // Crear el botón del toggler de la navbar
        const $navbarToggler = $('<button>', {
            class: 'navbar-toggler',
            type: 'button',
            'data-bs-toggle': 'collapse',
            'data-bs-target': '#navbarNav',
            'aria-controls': 'navbarNav',
            'aria-expanded': 'false',
            'aria-label': 'Toggle navigation'
        }).append($('<span>', { class: 'navbar-toggler-icon' }));

        // Crear el div para el contenido colapsable
        const $collapseDiv = $('<div>', { class: 'collapse navbar-collapse', id: 'navbarNav' });

        // Crear la lista de navegación
        const $ul = $('<ul>', { class: 'navbar-nav' });

        // Crear los elementos de la lista
        const navItems = [
            { href: '#', text: 'Home', active: true },
            { href: '#', text: 'Features', active: false },
            { href: '#', text: 'Pricing', active: false },
            { href: '#', text: 'Disabled', active: false, disabled: true }
        ];

        $.each(navItems, function(i, item) {
            const $li = $('<li>', { class: 'nav-item' });
            const $a = $('<a>', {
                class: 'nav-link' + (item.active ? ' active' : '') + (item.disabled ? ' disabled' : ''),
                href: item.href,
                text: item.text
            });
            if (item.disabled) {
                $a.attr('tabindex', '-1').attr('aria-disabled', 'true');
            }
            $li.append($a);
            $ul.append($li);
        });

        // Ensamblando todo
        $nav.append($containerFluid.append($navbarBrand).append($navbarToggler).append($collapseDiv.append($ul)));

        // Agregar el <nav> al cuerpo del documento
        $('#navBar').append($nav);
    });
}

function createHome(){
    $(document).ready(function() {
        // Crear y añadir el elemento <img>
        const $img = $('<img>', {
            src: 'img/background.webp',
            alt: 'Home',
            class: 'background-image'
        });
        $('#home').append($img);
      
        // Crear y añadir el elemento <h1>
        const $h1 = $('<h1>', {
          text: 'Web Development',
          class: 'home-title'
        });
        $('#home').append($h1);
      
        // Crear y añadir el elemento <h2>
        const $h2_Al = $('<h2>', {
            text: 'Alejandro Paniagua Rodriguez',
            class: 'person-names'
        });

        const $h2_An = $('<h2>', {
          text: 'Angela Gijón Flores',
          class: 'person-names m-0 p-0'
        });

        $('#home').append($h2_Al);
        $('#home').append($h2_An);
    });
}

function createList(){
    $(document).ready(function() {
        // Crear el elemento <ul> y asignarle la clase
        const $ul = $('<ul>', { class: 'list-group' });
      
        // Array con el texto de cada item
        const items = ['An item', 'A second item', 'A third item', 'A fourth item', 'And a fifth one'];
      
        // Crear y añadir los <li> al <ul>
        $.each(items, function(index, item) {
          const $li = $('<li>', { class: 'list-group-item', text: item });
          $ul.append($li);
        });
      
        // Añadir el <ul> al cuerpo del documento
        $('#list').append($ul);
      });
}

function main() {
    createNavbar();
    createHome();
    createList();
}

window.onload = main();