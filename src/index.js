window.TrelloPowerUp.initialize({
  'board-buttons': function (t, opts) {
    console.log("✅ El botón de la Power-Up debería aparecer ahora...");
    return [
      {
        text: 'CheckItems4',
        callback: function (t) {
          console.log("📌 Botón presionado, obteniendo datos del board...");
          // Obtenemos los datos del board (tarjetas, listas y nombre)
          return t.board('cards', 'lists', 'name')
            .then(boardData => {
              console.log("Datos del board obtenidos:", boardData);
              // Abrimos el modal y pasamos boardData en args
              return t.modal({
                title: 'CheckItems4',
                url: 'https://amaiavg.github.io/trello-power-up-assignments/src/checkItems.html',
                fullscreen: true,
                args: { board: boardData }
              });
            });
        }
      }
    ];
  }
});
