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
      <div>Owner Page</div>
      <OwnerEditForm updateFunction={updateData}></OwnerEditForm>
      <OwnerList formData={OwnerFormData}></OwnerList>
    </>
  );
}

export default OwnerPage;
