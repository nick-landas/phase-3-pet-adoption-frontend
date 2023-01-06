import { OwnerEditButton } from "../../modules";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function OwnerCard({ ownerInfo }) {
  const makePets = (pets) => {
    return pets.map((pet) => {
      return (
        <ListGroup.Item key={pet.name + pet.species + pet.personality} className="card text-center">{pet.name}</ListGroup.Item>
      );
    });
  };

  return (
    <div>
      <Card border="dark" style={{ width: "18rem" }}>
        <Card.Title className="card text-center">
          {ownerInfo.last_name + ", " + ownerInfo.first_name}
        </Card.Title>
        <Card.Subtitle className="bm-2 text-center text-muted">Pets:</Card.Subtitle>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            Home Address: {ownerInfo.home_address}
          </ListGroup.Item>
          <ListGroup.Item>
            Daytime Phone #: {ownerInfo.phone_number}
          </ListGroup.Item>
        </ListGroup>
        <ListGroup className="list-group-flush">
          {makePets(ownerInfo.pets)}
        </ListGroup>
        <Card.Body>
          <Card.Text></Card.Text>
        </Card.Body>
        <Card.Body className="card text-center">
          <OwnerEditButton></OwnerEditButton>
        </Card.Body>
      </Card>
    </div>
  );
}

export default OwnerCard;
