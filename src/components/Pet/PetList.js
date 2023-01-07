import { PetCard } from "../../modules";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function PetList({ listData, updateList }) {

  const api = "http://localhost:9292/pets";
  const [pets, setPets] = useState([])
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        updateList(data);
      });
  }, []);

  function deletePet (id) {
    console.log("deleting...")
    fetch(api + `/${id}`, {
      method: 'DELETE'
    }).then(resp => {
      setPets(pets.filter(pet => pet.id !== id))
    })
  }

  const makeCards = (petInfo) => {
    return petInfo.map((pet) => {
      return (
        <Col key={pet.name + pet.species + pet.weight + pet.personality}>
          <PetCard petInfo={pet} id={pet.id} deletePet={deletePet}></PetCard>
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
