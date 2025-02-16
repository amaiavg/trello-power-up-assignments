// src/CardDetails.js
const CardDetails = ({ cardId }) => {
    const openCard = () => {
      window.open(`https://trello.com/c/${cardId}`, '_blank');
    };
  
    return (
      <span 
        onClick={openCard} 
        style={{ cursor: 'pointer', color: '#0079bf', textDecoration: 'underline' }}
      >
        Ver Tarjeta
      </span>
    );
  };
  