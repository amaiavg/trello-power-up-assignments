// src/App.js
const { useState, useEffect } = React;

const App = () => {
  // Estados para las tarjetas y los filtros
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedList, setSelectedList] = useState('');

  // Obtenemos el objeto t de Trello
  const t = TrelloPowerUp.iframe();

  // Función para obtener las tarjetas del tablero.
  // Debes adaptar este ejemplo según la forma en que obtengas la data real.
  const fetchCards = async () => {
    try {
      // Se asume que t.cards('all') devuelve una promesa con la lista de tarjetas.
      const cardsData = await t.cards('all');
      setCards(cardsData);
      setFilteredCards(cardsData);
    } catch (err) {
      console.error('Error obteniendo tarjetas: ', err);
    }
  };

  // Obtener las tarjetas al cargar el componente
  useEffect(() => {
    fetchCards();
  }, []);

  // Actualiza la lista filtrada cuando cambian los filtros o las tarjetas
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

  // Callback para cuando se hace clic en una tarjeta
  const handleCardClick = (cardId) => {
    t.popup({
      title: 'Detalles de la Tarjeta',
      url: `https://trello.com/c/${cardId}`,
      height: 400
    });
  };

  return (
    <div>
      <h1>Lista de Tarjetas</h1>
      <DropdownMenu 
        onUserSelect={setSelectedUser} 
        onListSelect={setSelectedList} 
      />
      <TableView data={filteredCards} onCardClick={handleCardClick} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
