import { OwnerEditForm, OwnerList } from "../../modules";
import { useState } from "react";
function OwnerPage() {
  const [ownerFormData, updateData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    homeAddress: "",
  });

  return (
    <>
      <div>
        <section id="owners">
          <div className="third-img"></div>
          <div className="title">
            <h2>Owners</h2>
          </div>
        </section>
      </div>
      
      <OwnerEditForm updateFunction={updateData}></OwnerEditForm>
      <OwnerList formData={ownerFormData}></OwnerList>
    </>
  );
}

export default OwnerPage;
