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
      <div>Pet Page</div>
      <PetForm updateFunction={updateData}></PetForm>
      <PetList formData={petFormData}></PetList>
    </>
  );
}

export default PetPage;
