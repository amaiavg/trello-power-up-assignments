//const t = TrelloPowerUp.iframe();

console.log("🚀 Power-Up de Trello se está ejecutando.");

// Inicializa la Power-Up
window.TrelloPowerUp.initialize({
    'board-buttons': function (t, opts) {
        console.log("✅ El botón de la Power-Up debería aparecer ahora...");
        return [{
            text: 'Ver Tarjetas',
            callback: function (t) {
                console.log("📌 Botón presionado, abriendo modal...");
                return t.modal({
                    title: 'Lista de Tarjetas',
                    url: 'https://amaiavg.github.io/trello-power-up-assignments/',
                    fullscreen: true
                });
            }
        }];
    }
});
