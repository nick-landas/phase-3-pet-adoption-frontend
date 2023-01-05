import { PetForm, PetList } from "../../modules";
import { useState, useEffect } from "react";

function PetPage() {
  const [petFormData, updateData] = useState({
    species: "",
    color: "",
    weight: "",
    isHousebroken: false,
    name: "",
    personality: "",
  });

  useEffect(() => {
    console.log(petFormData)
  })

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
      <PetForm formData={petFormData} updateFunction={updateData}></PetForm>
      <PetList formData={petFormData}></PetList>
    </>
  );
}

export default PetPage;
