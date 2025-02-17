window.TrelloPowerUp.initialize({
  'board-buttons': function(t, opts) {
    console.log("✅ El botón de la Power-Up debería aparecer ahora...");
    return [
      {
        text: 'CheckItems5',
        callback: function(t) {
          console.log("📌 Botón presionado, obteniendo datos del board...");
          return Promise.all([
            t.cards('all'),
            t.lists('all'),
            t.board('name')
          ]).then(([cards, lists, boardName]) => {
            const boardData = { cards, lists, name: boardName };
            console.log("Datos del board obtenidos:", boardData);
            return t.modal({
              title: 'CheckItems5',
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
