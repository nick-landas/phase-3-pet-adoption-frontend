import { PetCard } from "../../modules";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../style.css"

function PetList({ listData, updateList }) {

  const api = "http://localhost:9292/pets";


  const [currentPage, setCurrentPage] = useState([1]);
  const [itemsPerPage, setItemsPerPage] = useState([5]);

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);



  const handleClick = (e) => {
      setCurrentPage(Number(e.target.id))
  }
  const pages =[];
  for (let i=1; i <=Math.ceil(listData.length/itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage*itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = listData.slice(indexOfFirstItem,indexOfLastItem)

  const renderPageNumbers = pages.map(number => {

      if(number < maxPageNumberLimit+1 && number >minPageNumberLimit) {
          return (
            <li key={number} id={number} onClick={handleClick}
            className={currentPage === number ? "active":null}>
                {number}
            </li>
          );
      }else {
          return null;
      }
  });

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        updateList(data);
      });
  }, [updateList]);

  function deletePet (id) {
    console.log("deleting...")
    fetch(api + `/${id}`, {
      method: 'DELETE'
    }).then(resp => {
      updateList(listData.filter(pet => pet.id !== id))
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

  const handleNextBtn = () => {
      setCurrentPage(currentPage + 1);

      if (currentPage + 1 > maxPageNumberLimit) {

        setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
    };

    const handlePrevBtn = () => {
      setCurrentPage(currentPage - 1);

      if ((currentPage - 1)%pageNumberLimit===0) {

        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    };

    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit){
      pageIncrementBtn = <li onClick={handleNextBtn}> &hellip; </li>
    }

    let pageDecrementBtn = null;
    if (pages.length > maxPageNumberLimit){
      pageDecrementBtn = <li onClick={handlePrevBtn}> &hellip; </li>
    }

  return (
    <>
      <h1>Pet List</h1>
      <Row xs={1} md={3} lg={5} className="g-4">
        {makeCards(currentItems)}
      </Row>
      <div className="pagination-container">
      <ul className="pageNumbers">
        <li>

          <button
          onClick={handlePrevBtn}
          disabled={currentPage === pages[0] ? true:false}
          >Prev</button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <li>
          <button
          onClick={handleNextBtn}
          disabled={currentPage === pages[pages.length - 1] ? true:false}
          >Next</button>
        </li>

      </ul>
      </div>
    </>
  );
}

export default PetList;
