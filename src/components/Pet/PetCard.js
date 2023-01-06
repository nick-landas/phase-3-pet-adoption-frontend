import { PetDeleteButton } from "../../modules";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function PetCard({ petInfo }) {
  const availability = (owner_id) => {
    return owner_id === null ? "Available for Adoption" : "Already Adopted";
  };
  return (
    <div>
      <Card border="dark" style={{ width: "18rem" }}>
        <Card.Title className="card text-center">{petInfo.name}</Card.Title>
        <Card.Subtitle className="bm-2 text-center text-muted">{availability(petInfo.owner_id)}</Card.Subtitle>
        <Card.Img variant="top" src={petInfo.image} />
        <ListGroup className="list-group-flush">
          <ListGroup.Item variant="light">
            Species:{" "}
            {petInfo.species[0].toUpperCase() + petInfo.species.slice(1)}
          </ListGroup.Item>
          <ListGroup.Item variant="dark">
            Color: {petInfo.color[0].toUpperCase() + petInfo.color.slice(1)}
          </ListGroup.Item>
          <ListGroup.Item variant="light">
            Weight: {petInfo.weight} lbs
          </ListGroup.Item>
          <ListGroup.Item variant="dark">
            Housebroken?: {petInfo.house_broken ? "Yes" : "No"}
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Text>
            {petInfo.personality[0].toUpperCase() +
              petInfo.personality.slice(1)}
          </Card.Text>
        </Card.Body>
        <Card.Body className="card text-center">
          <PetDeleteButton></PetDeleteButton>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PetCard;
