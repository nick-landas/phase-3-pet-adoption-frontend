import { PetForm, PetList } from "../../modules";
import { useState, useEffect } from "react";

function PetPage({ petList, updateList }) {
  const [petFormData, updateData] = useState({
    species: "",
    color: "",
    weight: "",
    house_broken: false,
    name: "",
    personality: "",
  });
  return (
    <>
      <div>
        <section id="pets">
          <div className="second-img"></div>
          <div className="title">
            <h2>Pets</h2>
          </div>
        </section>
      </div>
      <PetForm
        listData={petList}
        updateList={updateList}
        formData={petFormData}
        updateFunction={updateData}
      ></PetForm>
      <PetList
        listData={petList}
        updateList={updateList}
        formData={petFormData}
      ></PetList>
    </>
  );
}

export default PetPage;
