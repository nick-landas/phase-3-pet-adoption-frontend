import {
  ApplicationEditButton,
  ApplicationApprovalButton,
} from "../../modules";
import { useState } from "react";

function ApplicationCard({ applicationInfo }) {
  // const api = `http://localhost:9292/adoption-applications/${applicationInfo.id}/approve`;

  // const [isButtonDisabled, setButtonDisabled] = useState(false);

  // const handleClick = (e) => {
  //   setButtonDisabled(true);

  //   fetch(api, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data)
  //     });
  // };

  return (
    <>
      <div>ApplicationCard</div>
      {/* <ApplicationApprovalButton
        disabled={isButtonDisabled}
        action={handleClick}
      ></ApplicationApprovalButton> */}
    </>
  );
}

export default ApplicationCard;
