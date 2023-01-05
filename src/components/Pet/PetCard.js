import { PetEditButton } from "../../modules";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function PetCard({ petInfo }) {
  const [pet, updatePet] = useState({
    name: petInfo.name,
    species: petInfo.species,
    weight: petInfo.weight,
    house_broken: petInfo.house_broken,
    id: petInfo.id,
    personality: petInfo.personality,
    color: petInfo.color
  })
  return (
    <>
      <div>
        <Card border="dark" style={{ width: "18rem" }}>
          <Card.Title className="card text-center">{pet.name}</Card.Title>
          <Card.Img variant="top" src="./lizzy.jpg" />
          <ListGroup className="list-group-flush">
            <ListGroup.Item variant="light">
              Species:{" "}
              {pet.species[0].toUpperCase() + pet.species.slice(1)}
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              Color: {pet.color[0].toUpperCase() + pet.color.slice(1)}
            </ListGroup.Item>
            <ListGroup.Item variant="light">
              Weight: {pet.weight} lbs
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              Housebroken?: {pet.house_broken ? "Yes" : "No"}
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Text>
              {pet.personality}
            </Card.Text>
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
