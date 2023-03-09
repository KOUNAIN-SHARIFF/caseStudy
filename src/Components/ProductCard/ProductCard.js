import { Card, Col, Row, Container } from "react-bootstrap";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const Products = [
  {
    id: 1,
    img: require("../../Assets/productImg.png"),
    heading: "MENS SEIKO KENETIC TITANIUM 100M WRIST WATCH! No Reserve!",
    price: "$18.50",
    Time: "6d 13h 52 sec",
    bids: "5 bids",
    shipping: "+$11.60 shipping",
  },
  {
    id: 2,
    img: require("../../Assets/productImg.png"),
    heading: "MENS SEIKO KENETIC TITANIUM 100M WRIST WATCH! No Reserve!",
    price: "$18.50",
    Time: "6d 13h 52 sec",
    bids: "5 bids",
    shipping: "+$11.60 shipping",
  },
  {
    id: 3,
    img: require("../../Assets/productImg.png"),
    heading: "MENS SEIKO KENETIC TITANIUM 100M WRIST WATCH! No Reserve!",
    price: "$18.50",
    Time: "6d 13h 52 sec",
    bids: "5 bids",
    shipping: "+$11.60 shipping",
  },
];
function ProductCard() {
  const navigate = useNavigate();
  const cardHandler = () => {
    navigate("/products");
  };
  return (
    <Container>
      <Row className="rowGaps mb-3">
        {Products.map(({ id, img, heading, price, Time, bids, shipping }) => (
          <Col xs={4} key={id}>
            <Card onClick={cardHandler} className="customCard">
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <div className="productHeading">{heading}</div>
                <div className="price">{price}</div>
                <div className="timeLeftText">Time left</div>
                <div className="timeText">{Time}</div>
                <div className="timeLeftText">{bids}</div>
                <div className="timeLeftText">{shipping}</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductCard;
