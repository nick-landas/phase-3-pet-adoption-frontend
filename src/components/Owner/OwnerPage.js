import { OwnerList } from "../../modules";
import { useState } from "react";
function OwnerPage({lists, updaters }) {
  const [ownerFormData, updateData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    homeAddress: "",
  });

  const ownerPageText = () => {
    if (lists.ownerList.length === 0 || lists.ownerList.every((owner) => owner.pets.length === 0)) {
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
      <OwnerList lists={lists} updaters={updaters} formData={ownerFormData}></OwnerList>
    </>
  );
}

export default OwnerPage;
