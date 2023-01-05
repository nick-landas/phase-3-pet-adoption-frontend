import { PetForm, PetList } from "../../modules";
import { useState } from "react";

function PetPage() {
  const [petFormData, updateData] = useState({
    species: "",
    color: "",
    weight: "",
    isHousebroken: "",
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
      <PetForm updateFunction={updateData}></PetForm>
      <PetList formData={petFormData}></PetList>
    </>
  );
}

export default PetPage;
