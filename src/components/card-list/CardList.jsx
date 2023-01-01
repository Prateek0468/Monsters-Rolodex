import Card from "../card/Card";
import "./card-list.styles.css";

// its a example of implicit return

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
);

export default CardList;
