import { ApplicationCard } from "../../modules";
import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ApplicationList({ lists, updaters }) {
  const api = "http://localhost:9292/adoption-applications";
  const applicationList = lists.applicationList
  const updateApplicationList = updaters.updateApplicationList
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        updateApplicationList(data);
      });
  }, []);

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
          <ApplicationCard appInfo={app} lists={lists} updaters={updaters}></ApplicationCard>
        </Col>
      );
    });
  };
  return (
    <>
      <Row xs={1} md={3} lg={5} className="g-4">
        {makeCards(applicationList)}
      </Row>
    </>
  );
}

export default ApplicationList;
