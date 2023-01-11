import "./card.styles.css";

import { Monster } from "../../App";

type Props = {
  monster: Monster
}
const Card = ({monster: {name, email, id}}: Props) => {
//   const { name, email, id } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
