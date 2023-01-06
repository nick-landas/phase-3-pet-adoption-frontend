import { OwnerList } from "../../modules";
import { useState } from "react";
function OwnerPage({ ownerList, updateList }) {
  const [ownerFormData, updateData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    homeAddress: "",
  });

  const ownerPageText = () => {
    if (ownerList.length === 0 || ownerList.every((owner) => owner.pets.length === 0)) {
      return "We currently have no registered adoptions. Would you like to be the first?"
    }
    else {
      return "Owners"
    }
  }

  return (
    <>
      <div>
        <section id="owners">
          <div className="third-img"></div>
          <div className="title">
            <h2>{ownerPageText()}</h2>
          </div>
        </section>
      </div>
      <OwnerList ownerList={ownerList} updateList={updateList} formData={ownerFormData}></OwnerList>
    </>
  );
}

export default OwnerPage;
