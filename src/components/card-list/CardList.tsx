import Card from "../card/Card";
import { Monster } from "../../App";
import "./card-list.styles.css";

// its a example of implicit return

type Prop = {
  monsters: Monster[];
};

const CardList = ({ monsters }: Prop) => (
  <div className="card-list">
    {monsters.map((monster: Monster) => {
      return <Card monster={monster} />;
    })}
  </div>
);

export default CardList;
