import { OwnerEditForm, OwnerList } from "../../modules";
import { useState } from "react";
function OwnerPage() {
  const [OwnerFormData, updateData] = useState({
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
      <OwnerList formData={OwnerFormData}></OwnerList>
    </>
  );
}

export default OwnerPage;
