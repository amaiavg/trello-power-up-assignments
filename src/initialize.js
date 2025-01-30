import TableView from './TableView';

const t = TrelloPowerUp.iframe();

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

init(t);