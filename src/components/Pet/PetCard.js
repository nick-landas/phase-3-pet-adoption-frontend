import { PetEditButton } from "../../modules";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function PetCard({ petInfo }) {
  return (
    <>
      <div>
        <Card border="dark" style={{ width: "18rem" }}>
          <Card.Title className="card text-center">{petInfo.name}</Card.Title>
          <Card.Img variant="top" src="./lizzy.jpg" />
          <ListGroup className="list-group-flush">
            <ListGroup.Item variant="light">
              Species: {" "}
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
            <Card.Text>{petInfo.personality[0].toUpperCase() + petInfo.personality.slice(1)}</Card.Text>
          </Card.Body>
          <Card.Body className="card text-center">
            <PetEditButton></PetEditButton>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default PetCard;
