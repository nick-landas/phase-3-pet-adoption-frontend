import { ApplicationEditButton } from '../../modules'
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function ApplicationCard({appInfo}){
  return (
    <>
      <div>
        <Card border="dark" style={{ width: "18rem" }}>
          <Card.Title className="card text-center">{appInfo.date}</Card.Title>
          <Card.Img variant="top" src="./lizzy.jpg" />
          <ListGroup className="list-group-flush">
            <ListGroup.Item variant="light">
              Adoption_Approved: {" "}
              {appInfo.accepted ? "Accepted" : "Pending"}
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              Pet ID: {appInfo.pet_id}
            </ListGroup.Item>
            <ListGroup.Item variant="light">
              (Prospective)Owner ID: {appInfo.owner_id}
            </ListGroup.Item>
          </ListGroup>
          <Card.Body className="card text-center">
            <ApplicationEditButton></ApplicationEditButton>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default ApplicationCard;