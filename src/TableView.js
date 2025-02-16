const TableView = ({ data }) => {
    return (
        <table>
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
                    {data.map((card) => (
                        <tr key={card.shortId}>
                            <td>{card.member}</td>
                            <td>{card.list}</td>
                            <td>{card.shortId}</td>
                            <td>
                                <a href="#" onClick={() => CardDetails(card.id)}>
                                    {card.name}
                                </a>
                            </td>
                            <td>{card.dueDate}</td>
                            <td>{card.labels.join(', ')}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
};

export default TableView;
