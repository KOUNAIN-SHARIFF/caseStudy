import { Container, Row, Col } from "react-bootstrap";
import "./ViewAllCat.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Recentcategory = [
  {
    id: 1,
    img: require("../../Assets/categoryIcons.png"),
    link: "",
  },
  {
    id: 2,
    img: require("../../Assets/categoryIcons.png"),
    link: "",
  },
  {
    id: 3,
    img: require("../../Assets/categoryIcons.png"),
    link: "",
  },
];
const AllCategory = [
  {
    id: 1,
    img: require("../../Assets/categoryIcons.png"),
    link: "/Products",
  },
  {
    id: 2,
    img: require("../../Assets/categoryIcons.png"),
    link: "",
  },
  {
    id: 3,
    img: require("../../Assets/categoryIcons.png"),
    link: "",
  },
  {
    id: 4,
    img: require("../../Assets/categoryIcons.png"),
    link: "",
  },
  {
    id: 5,
    img: require("../../Assets/categoryIcons.png"),
    link: "",
  },
  {
    id: 6,
    img: require("../../Assets/categoryIcons.png"),
    link: "",
  },
  {
    id: 7,
    img: require("../../Assets/categoryIcons.png"),
    link: "",
  },
  {
    id: 8,
    img: require("../../Assets/categoryIcons.png"),
    link: "",
  },
  {
    id: 9,
    img: require("../../Assets/categoryIcons.png"),
    link: "",
  },
  {
    id: 10,
    img: require("../../Assets/categoryIcons.png"),
    link: "",
  },
  {
    id: 11,
    img: require("../../Assets/categoryIcons.png"),
    link: "",
  },
  {
    id: 12,
    img: require("../../Assets/categoryIcons.png"),
    link: "",
  },
  {
    id: 13,
    img: require("../../Assets/categoryIcons.png"),
    link: "",
  },
  {
    id: 14,
    img: require("../../Assets/categoryIcons.png"),
    link: "",
  },
  {
    id: 15,
    img: require("../../Assets/categoryIcons.png"),
    link: "",
  },
  {
    id: 16,
    img: require("../../Assets/categoryIcons.png"),
    link: "",
  },
];

function ViewAllCat() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/shop");
  };

  return (
    <>
      <Navbar />
      <Container>
        <div className="catHead container">Recent</div>
        <Row className="justify-content-center rowGaps">
          {Recentcategory.map(({ id, img, link }) => (
            <Col xs={3} key={id} className="d-flex justify-content-center mb-2">
              <img onClick={clickHandler} src={img} alt="Category" />
            </Col>
          ))}
        </Row>
        <div className="catHead container">All Categories</div>
        <Row className="justify-content-center rowGaps">
          {AllCategory.map(({ id, img }) => (
            <Col xs={3} key={id} className="d-flex justify-content-center mb-2">
              <img onClick={clickHandler} src={img} alt="Category" />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default ViewAllCat;
