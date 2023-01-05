import {
  ApplicationEditButton,
  ApplicationApprovalButton,
} from "../../modules";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function ApplicationCard({ appInfo }) {
  const api = `http://localhost:9292/adoption-applications/${appInfo.id}/approve`;

  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleClick = (e) => {
    setButtonDisabled(true);

    fetch(api, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <div>ApplicationCard</div>
      <div>
        <Card border="dark" style={{ width: "18rem" }}>
          <Card.Title className="card text-center">{appInfo.date}</Card.Title>
          <Card.Img variant="top" src="./lizzy.jpg" />
          <ListGroup className="list-group-flush">
            <ListGroup.Item variant="light">
              Adoption_Approved: {appInfo.accepted ? "Accepted" : "Pending"}
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
          <Card.Body className="card text-center">
            <ApplicationApprovalButton
              disabled={isButtonDisabled}
              action={handleClick}
            ></ApplicationApprovalButton>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default ApplicationCard;
