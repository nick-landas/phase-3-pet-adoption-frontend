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
      <div>
        <section id="application">
          <div className="fourth-img"></div>
            <div className="title">
              <h2>Application</h2>
            </div>
        </section>
      </div>

      <ApplicationForm updateFunction={updateData}></ApplicationForm>
      <ApplicationList formData={applicationFormData}></ApplicationList>
    </>
  );
}

export default ApplicationPage;
