import { OwnerCard } from "../../modules";
import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function OwnerList({ ownerList, updateList }) {
  const api = "http://localhost:9292/owners";

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        updateList(data);
      });
  }, []);

  const makeCards = (ownerList) => {
    return ownerList.map((owner) => {
      if (owner.pets.length < 1) {
        return null;
      }
      return (
        <Col key={owner.id}>
          <OwnerCard ownerInfo={owner}></OwnerCard>
        </Col>
      );
    });
  };

  return (
    <Row xs={1} md={3} lg={5} className="g-4">
      {makeCards(ownerList)}
    </Row>
  );
}

export default OwnerList;
