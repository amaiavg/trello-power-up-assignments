//const t = TrelloPowerUp.iframe();

console.log("🚀 Power-Up de Trello se está ejecutando.");

const init = (t) => {
    return t.get('board', 'shared', 'selectedUsers')
        .then(selectedUsers => {
            // Initialize dropdowns and table view
            const dropdownMenu = new DropdownMenu(t, selectedUsers);
            const tableView = new TableView(t);
            dropdownMenu.render();
            tableView.render();
        });
};

const onCardClick = (cardId) => {
    t.popup({
        title: 'Card Details',
        url: `src/CardDetails.js?cardId=${cardId}`,
        height: 400
    });
};

const onUserSelect = (selectedUsers) => {
    // Fetch and update table view based on selected users
    tableView.update(selectedUsers);
};

const onListSelect = (selectedLists) => {
    // Fetch and update table view based on selected lists
    tableView.update(selectedLists);
};

// Inicializa la Power-Up
window.TrelloPowerUp.initialize({
    'board-buttons': function (t, opts) {
        console.log("✅ El botón de la Power-Up debería aparecer ahora...");
        return [{
            text: 'Ver Tarjetas',
            callback: function (t) {
                console.log("📌 Botón presionado, abriendo modal...");
                return t.modal({
                    title: 'Asignaciones',
                    url: 'https://amaiavg.github.io/trello-power-up-assignments/table.html',
                    fullscreen: true
                });
            }
        }];
    }
});

init();