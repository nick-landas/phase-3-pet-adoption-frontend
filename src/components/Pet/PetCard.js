import { PetEditButton } from '../../modules'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function PetCard() {
  return (
    <>
      <div>
      <Card border="dark"style={{ width: '12rem' }}>
      <Card.Img variant="top" src="./lizzy.jpg" />
      <Card.Body>
        <Card.Title className="card text-center" >Lizzy</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body >
      <ListGroup className="list-group-flush">
        <ListGroup.Item variant="light">Cras justo odio</ListGroup.Item>
        <ListGroup.Item variant="dark">Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item variant="light">Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body className="card text-center">
      <a href="#" className="btn btn-dark">Go somewhere</a>
      </Card.Body>
    </Card>
      <PetEditButton></PetEditButton>

      </div>
    </>
  );
}

export default PetCard;