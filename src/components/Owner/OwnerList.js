import { OwnerCard } from "../../modules";
import { useEffect} from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function OwnerList( {lists, updaters }) {
  const api = "http://localhost:9292/owners";

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        updaters.updateOwnerList(data);
      });
  }, []);

  function deleteOwner(id) {
    console.log("deleting owner...")
    fetch(api + `/${id}`, {
      method: 'DELETE'
    }).then(resp => {
      updaters.updateOwnerList(lists.ownerList.filter(owner => owner.id !== id))
      updaters.updateApplicationList(lists.applicationList.filter(application => application.owner_id !== id))
    })
  }

  const makeCards = (ownerList) => {
    return ownerList.map((owner) => {
      if (owner.pets.length < 1) {
        return null;
      }
      return (
        <Col key={owner.id}>
          <OwnerCard ownerInfo={owner} id={owner.id} deleteOwner={deleteOwner}></OwnerCard>
        </Col>
      );
    });
  };

  return (
    <Row xs={1} md={3} lg={5} className="g-4">
      {makeCards(lists.ownerList)}
    </Row>
  );
}

export default OwnerList;
