import { ApplicationCard } from "../../modules";
import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ApplicationList({ formData, appInfo, updateAppInfo }) {
  const api = "http://localhost:9292/adoption-applications";
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        updateAppInfo(data);
      });
  }, []);
  useEffect(() => {
    console.log(appInfo);
  });

  const makeCards = (appInfo) => {
    return appInfo.map((app) => {
      return (
        <Col
          key={
            app.date +
            app.accepted +
            app.pet_name +
            app.owner_name +
            app.home_address +
            app.phone_number
          }
        >
          <ApplicationCard appInfo={app}></ApplicationCard>
        </Col>
      );
    });
  };
  return (
    <>
      <Row xs={1} md={3} lg={5} className="g-4">
        {makeCards(appInfo)}
      </Row>
    </>
  );
}

export default ApplicationList;
