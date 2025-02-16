// src/App.js
const { useState, useEffect } = React;

const DropdownMenu = ({ onUserSelect, onListSelect }) => {
  const users = ['Usuario1', 'Usuario2', 'Usuario3'];
  const lists = ['To Do', 'Doing', 'Done'];

  return (
    <div style={{ marginBottom: '20px' }}>
      <label>
        Filtrar por usuario: 
        <select onChange={(e) => onUserSelect(e.target.value)} defaultValue="">
          <option value="">Todos</option>
          {users.map(user => (
            <option key={user} value={user}>{user}</option>
          ))}
        </select>
      </label>
      <label style={{ marginLeft: '20px' }}>
        Filtrar por lista: 
        <select onChange={(e) => onListSelect(e.target.value)} defaultValue="">
          <option value="">Todas</option>
          {lists.map(list => (
            <option key={list} value={list}>{list}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

const TableView = ({ data, onCardClick }) => {
  return (
    <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th>Miembro</th>
          <th>Lista</th>
          <th>Short ID</th>
          <th>Nombre</th>
          <th>Due Date</th>
          <th>Labels</th>
        </tr>
      </thead>
      <tbody>
        {data.map(card => (
          <tr key={card.shortId}>
            <td>{card.member}</td>
            <td>{card.list}</td>
            <td>{card.shortId}</td>
            <td>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                onCardClick(card.id);
              }}>
                {card.name}
              </a>
            </td>
            <td>{card.dueDate}</td>
            <td>{card.labels ? card.labels.join(', ') : ''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const App = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedList, setSelectedList] = useState('');

  const t = TrelloPowerUp.iframe();

  // Simula la obtención de tarjetas. Deberás adaptar esto a tu integración real.
  const fetchCards = async () => {
    try {
      // Por ejemplo: t.cards('all')
      const cardsData = await t.cards('all');
      setCards(cardsData);
      setFilteredCards(cardsData);
    } catch (err) {
      console.error('Error obteniendo tarjetas:', err);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  useEffect(() => {
    let filtered = cards;
    if (selectedUser) {
      filtered = filtered.filter(card => card.member === selectedUser);
    }
    if (selectedList) {
      filtered = filtered.filter(card => card.list === selectedList);
    }
    setFilteredCards(filtered);
  }, [selectedUser, selectedList, cards]);

  const handleCardClick = (cardId) => {
    t.popup({
      title: 'Detalles de la Tarjeta',
      url: `https://trello.com/c/${cardId}`,
      height: 400
    });
  };

  return (
    <div>
      <h1>Trello Power-Up Table View</h1>
      <DropdownMenu 
        onUserSelect={setSelectedUser} 
        onListSelect={setSelectedList} 
      />
      <TableView data={filteredCards} onCardClick={handleCardClick} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
