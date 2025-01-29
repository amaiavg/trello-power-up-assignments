const t = TrelloPowerUp.iframe();

// Inicializa la Power-Up y añade botones en el tablero
TrelloPowerUp.initialize({
    'board-buttons': function (t) {
        return [{
            icon: 'https://example.com/icon.png',
            text: 'Ver Tarjetas',
            callback: function (t) {
                return t.modal({
                    title: 'Lista de Tarjetas',
                    url: 'table.html',
                    fullscreen: true
                });
            }
        }];
    },
    'show-settings': function (t) {
        return t.popup({
            title: 'Configuración',
            url: 'settings.html',
            height: 200
        });
    }
});

// Función para inicializar la tabla
const init = () => {
    t.render(() => {
        renderTable();
    });
};

// Llamar a la función de inicialización
init();
