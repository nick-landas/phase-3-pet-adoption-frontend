import { ApplicationForm, ApplicationList } from "../../modules";
import { useState } from "react";

function ApplicationPage({ lists, updaters }) {
  const [applicationFormData, updateData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    home_address: "",
    pet_name: "",
    pet_id: null,
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
        lists={lists}
        updaters={updaters}
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
