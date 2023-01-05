import { ApplicationForm, ApplicationList } from "../../modules";
import { useState, useEffect } from "react";

function ApplicationPage({ lists, updaters }) {
  const [applicationFormData, updateData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    homeAddress: "",
    petName: "",
  });

  useEffect(() => {
    console.log(applicationFormData);
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

      <ApplicationForm
        formData={applicationFormData}
        updateFunction={updateData}
      ></ApplicationForm>
      <ApplicationList
        formData={applicationFormData}
        lists={lists}
        updaters={updaters}
      ></ApplicationList>
    </>
  );
}

export default ApplicationPage;
