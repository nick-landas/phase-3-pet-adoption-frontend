import { PetCard } from "../../modules";
import { useState, useEffect } from 'react'

function PetList({ formData }) {
  const [ petData, updatePetData ] = useState([])

  // useeffect to make api call
  const api = 'http://localhost:9292/pets'

  useEffect(() => {
    fetch(api)
    .then((res) => res.json())
    .then((data) => {
      updatePetData(data)
    })
  }, [])

  useEffect(() => {
    console.log(petData)
  })

  const makeCards = (petInfo) => {
    return (petInfo.map((pet) => {
      return <PetCard petInfo={pet}></PetCard>
    }))
  }

  return (
    <>
      <div>Pet List</div>
      {makeCards(petData)}
    </>
  );
}

export default PetList;
