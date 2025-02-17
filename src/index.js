window.TrelloPowerUp.initialize({
  'board-buttons': function (t, opts) {
    console.log("✅ El botón de la Power-Up debería aparecer ahora...");
    return [
      {
        text: 'CheckITems3',
        callback: function (t) {
          console.log("📌 Botón presionado, abriendo modal...");
          // Usamos una URL relativa para GitHub Pages; asegúrate de que table.html esté en la raíz
          return t.modal({
            title: 'CheckITems3',
            url: 'https://amaiavg.github.io/trello-power-up-assignments/src/checkItems.html',
            fullscreen: true
          });
        }
      }
    ];
  }
});
