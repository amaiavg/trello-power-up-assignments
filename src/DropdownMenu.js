// src/DropdownMenu.js
const DropdownMenu = ({ onUserSelect, onListSelect }) => {
    // Ejemplo: valores estáticos para usuarios y listas
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
  