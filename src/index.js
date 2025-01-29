const t = TrelloPowerUp.iframe();

// Inicializa la Power-Up
TrelloPowerUp.initialize({
    'board-buttons': function (t) {
        return [{
            icon: 'https://example.com/icon.png',
            text: 'Ver Tarjetas',
            callback: function (t) {
                return t.modal({
                    title: 'Lista de Tarjetas',
                    url: 'https://amaiavg.github.io/trello-power-up-assignments/table.html',
                    fullscreen: true
                });
            }
        }];
    },
    'show-settings': function (t) {
        return t.popup({
            title: 'Configuración',
            url: 'https://amaiavg.github.io/trello-power-up-assignments/settings.html',
            height: 200
        });
    }
});
