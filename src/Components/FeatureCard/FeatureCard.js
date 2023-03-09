import { Card, Button } from "react-bootstrap";
import ProfileDot from "../../Assets/Ellipse 3.svg";
import OneImg from "../../Assets/oneononeImg.svg";
import Calendar from "../../Assets/Calendar.svg";
import "./featureCard.css";

function FeatureCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <div className="mb-2">
          <Button variant="primary">New</Button>{" "}
          <Button variant="primary">Scheduled</Button>{" "}
        </div>
        <div className=" d-flex justify-content-between featureTitle">
          <div className="me-3">Requirement of 2000 Diodes at Nasik plant</div>
          <img src={Calendar} alt="Calendar" />
        </div>
        <Card.Subtitle className="mb-2 featureSubTitle">
          Sat, 02:PM onwards
        </Card.Subtitle>
        <div className="d-flex featureSubTitle">
          <img className="me-2" src={ProfileDot} alt="Profile" />
          <div>
            Andrew Smith <br /> Global foundries
          </div>
        </div>
        <div className="d-flex">
          <img className="me-2" src={OneImg} alt="OneProfile" />
          <div className="GreenText">one on one</div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default FeatureCard;
