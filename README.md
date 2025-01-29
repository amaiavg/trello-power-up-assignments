# Trello Power-Up

This Trello Power-Up provides a table view that allows users to track their cards efficiently. It features a customizable interface where users can select multiple members and lists to filter the displayed cards.

## Features

- Displays a table with the following columns:
  - Member
  - List
  - Card Short ID
  - Card Name
  - Card Due Date
  - Custom Field: "Horas Invertidas"
  - Custom Field: "Horas Estimadas"
  - Labels
- Dropdown menus for selecting multiple users and lists.
- Clickable card names that open the corresponding Trello card.

## Project Structure

```
trello-power-up
├── src
│   ├── index.html        # HTML structure for the Power-Up
│   ├── index.js          # Main entry point for the Power-Up
│   ├── styles.css        # Styles for the Power-Up
│   └── components
│       ├── TableView.js  # Renders the table view
│       ├── DropdownMenu.js # Manages dropdown selections
│       └── CardDetails.js # Opens Trello card details
├── package.json          # npm configuration file
├── webpack.config.js     # Webpack configuration file
└── README.md             # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd trello-power-up
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Open `src/index.html` in your browser to view the Power-Up.
2. Use the dropdown menus to select the desired members and lists.
3. Click on the card names in the table to view their details in Trello.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.