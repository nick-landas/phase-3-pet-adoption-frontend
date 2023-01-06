import { PetCard } from "../../modules";
import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function PetList({ listData, updateList }) {
  // useeffect to make api call
  const api = "http://localhost:9292/pets";

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        updateList(data);
      });
  }, []);

  useEffect(() => {
    console.log(listData);
  });

  const makeCards = (petInfo) => {
    return petInfo.map((pet) => {
      return (
        <Col key={pet.name + pet.species + pet.weight + pet.personality}>
          <PetCard petInfo={pet}></PetCard>
        </Col>
      );
    });
  };

  return (
    <>
      <h1>Pet List</h1>
      <Row xs={1} md={3} lg={5} className="g-4">
        {makeCards(listData)}
      </Row>
    </>
  );
}

export default PetList;
