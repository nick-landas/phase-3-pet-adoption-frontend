import {
  ApplicationEditButton,
  ApplicationApprovalButton,
} from "../../modules";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function ApplicationCard({ appInfo, lists, updaters }) {
  const api = `http://localhost:9292/adoption-applications/${appInfo.id}/approve`;

  const [isButtonDisabled, setButtonDisabled] = useState(appInfo.accepted);

  const findByID = (list, id) => {
    return list.findIndex((el) => {
      return el.id === id;
    });
  };

  const handleClick = () => {
    fetch(api, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const petToUpdate = findByID(lists.petList, data[0].id);

        let newPetList = [...lists.petList];
        newPetList[petToUpdate].owner_id = data[1].id;
        updaters.updatePetList(newPetList);

        setButtonDisabled(true);
      });
  };

  return (
    <>
      <div>
        <Card border="dark" style={{ width: "18rem" }}>
          <Card.Title className="card text-center">{appInfo.date}</Card.Title>
          <Card.Img variant="top" src="./lizzy.jpg" />
          <ListGroup className="list-group-flush">
            <ListGroup.Item variant="light">
              Adoption status: {appInfo.accepted ? "Accepted" : "Pending"}
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              Pet: {appInfo.pet_name}
            </ListGroup.Item>
            <ListGroup.Item variant="light">
              Applicant: {appInfo.owner_name}
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              Applicant Address: {appInfo.home_address}
            </ListGroup.Item>
            <ListGroup.Item variant="light">
              Applicant Phone #: {appInfo.phone_number}
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
