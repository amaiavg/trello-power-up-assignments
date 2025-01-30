class DropdownMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedUsers: [], selectedLists: [] };
    }

    handleUserChange = (event) => {
        const value = Array.from(event.target.selectedOptions, option => option.value);
        this.setState({ selectedUsers: value });
        this.props.onFilterChange(value, this.state.selectedLists);
    };

    handleListChange = (event) => {
        const value = Array.from(event.target.selectedOptions, option => option.value);
        this.setState({ selectedLists: value });
        this.props.onFilterChange(this.state.selectedUsers, value);
    };

    render() {
        const { users, lists } = this.props;
        return (
            <div>
                <label>Seleccionar Usuarios:</label>
                <select multiple onChange={this.handleUserChange}>
                    {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
                </select>

                <label>Seleccionar Listas:</label>
                <select multiple onChange={this.handleListChange}>
                    {lists.map(list => <option key={list.id} value={list.id}>{list.name}</option>)}
                </select>
            </div>
        );
    }
}

export default DropdownMenu;
