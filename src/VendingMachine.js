import { Link } from "react-router-dom";

function VendingMachine({ snacks }) {
  return (
    <>
      <h1>Vending Machine</h1>
        <ul>
            {snacks.map(snack => (
                <li><Link to={`/${snack}`}>{snack}</Link></li>
            ))}
        </ul>
    </>
  );
}

export default VendingMachine;
