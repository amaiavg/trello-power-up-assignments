window.TrelloPowerUp.initialize({
    'board-buttons': function (t, opts) {
      console.log("✅ El botón de la Power-Up debería aparecer ahora...");
      return [
        {
          text: 'Asignaciones',
          callback: function (t) {
            console.log("📌 Botón presionado, abriendo modal...");
            // Usamos una URL relativa para GitHub Pages; asegúrate de que table.html esté en la raíz
            return t.modal({
              title: 'Asignaciones',
              url: 'https://amaiavg.github.io/trello-power-up-assignments/table.html',
              fullscreen: true
            });
          }
        }
      ];
    }
  });
  