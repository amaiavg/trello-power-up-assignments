// src/TableView.js
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
  