import { ApplicationForm, ApplicationList } from "../../modules";
import { useState } from "react";

function ApplicationPage() {
  const [applicationFormData, updateData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    homeAddress: "",
    petName: "",
  });

  return (
    <>
      <div>Application Page</div>
      <ApplicationForm updateFunction={updateData}></ApplicationForm>
      <ApplicationList formData={applicationFormData}></ApplicationList>
    </>
  );
}

export default ApplicationPage;
