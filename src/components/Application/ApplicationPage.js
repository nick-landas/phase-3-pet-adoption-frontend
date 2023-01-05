import { ApplicationForm, ApplicationList } from "../../modules";
import { useState, useEffect } from "react";

function ApplicationPage() {
  const [applicationFormData, updateData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    homeAddress: "",
    petName: "",
  });
  const [applicationList, updateList] = useState([]);

  useEffect(() => {
    console.log(applicationFormData)
  })

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

      <ApplicationForm formData={applicationFormData} updateFunction={updateData}></ApplicationForm>
      <ApplicationList formData={applicationFormData} appInfo={applicationList} updateAppInfo={updateList}></ApplicationList>
    </>
  );
}

export default ApplicationPage;
