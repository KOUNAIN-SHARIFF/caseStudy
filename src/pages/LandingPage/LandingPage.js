import { Row, Container, Col, Carousel } from "react-bootstrap";
import ProductCards from "../../Components/ProductCard/ProductCard";
import FeatureCard from "../../Components/FeatureCard/FeatureCard";
import CarouselImage from "../../Assets/carouselImg.svg";
import Navbar from "../../Components/Navbar/Navbar";
import "./LandingPage.css";
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

function LandingPage() {
  const navigate = useNavigate();

  const catHandler = () => {
    navigate("/categories");
  };
  const shopHandler = () => {
    navigate("/shop");
  };
  const prodHandler = () => {
    navigate("/products");
  };
  return (
    <>
      <Navbar />
      <Container>
        <Carousel className="mt-3 mb-3">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CarouselImage}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CarouselImage}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CarouselImage}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container>
        <div className="d-flex justify-content-between mb-3">
          <div className="landHeadings">Explore Popular Categories</div>
          <a onClick={catHandler} className="viewText">
            View All
          </a>
        </div>
      </Container>
      <Row className="justify-content-center rowGaps1">
        {Recentcategory.map(({ id, img }) => (
          <Col xs={3} key={id} className="d-flex justify-content-center mb-3">
            <img onClick={shopHandler} src={img} width="95px" alt="Category" />
          </Col>
        ))}
      </Row>
      <Container>
        <Row>
          <div className="d-flex justify-content-between mb-2">
            <div className="landHeadings">Trending Auctions</div>
            <a onClick={prodHandler} className="viewText">
              View All
            </a>
          </div>
          <div className="landSubHeading pb-2 mb-3">
            See what's popular across thousands of Auctions
          </div>
          <ProductCards />
        </Row>
      </Container>
      <Container>
        <Row>
          <div className="d-flex justify-content-between landHeadingsborder mb-2 pt-2">
            <div className="landHeadings">Featured products</div>
            <a onClick={prodHandler} className="viewText">
              View All
            </a>
          </div>
          <div className="landSubHeading pb-2 mb-3">
            See what's popular across thousands of Products
          </div>
          <ProductCards />
        </Row>
      </Container>
      <Container>
        <Row>
          <div className="d-flex justify-content-between landHeadingsborder mb-2 pt-2">
            <div className="landHeadings">Featured Services</div>
            <a onClick={catHandler} className="viewText">
              View All
            </a>
          </div>
          <div className="landSubHeading pb-2 mb-3">
            See what's popular across thousands of Products
          </div>
          <ProductCards />
        </Row>
      </Container>
      <Container>
        <Row>
          <div className="d-flex justify-content-between landHeadingsborder mb-2 pt-2">
            <div className="landHeadings">Featured Events</div>
          </div>
          <div className="landSubHeadingNoBorder pb-2 mb-3">
            See what's popular across thousands of Products
          </div>
        </Row>
        <FeatureCard />
      </Container>

      <footer class="mt-5" style={{ backgroundColor: "#0C1133" }}>
        <div class="container py-5">
          <Row>
            <div class="col-md-4">
              <h5 class="text-light">About Us</h5>
              <p class="text-light">
                Infiniti Research is a global leader in next-gen custom market
                research and market intelligence services. We enable clients in
                more than a dozen industries to tackle challenges and navigate
                complexities by offering timely, incisive market insights.
              </p>
            </div>
            <div class="col-md-4">
              <h5 class="text-light">Useful Links</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="text-light">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" class="text-light">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" class="text-light">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" class="text-light">
                    Cart
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <h5 class="text-light">Contact Us</h5>
              <ul class="list-unstyled">
                <li class="text-light">
                  <i class="fa fa-map-marker"></i>You can all our call center,
                  we are open on weekdays from 9:00AM to 8:00PM and on weekends
                  from 9:00AM to 1:00PM
                </li>
                <li class="text-light">
                  <i class="fa fa-phone"></i>+1-340-618-7841
                </li>
                <li>
                  <i class="fa fa-envelope"></i>
                  <a href="mailto:info@example.com" class="text-light">
                    hello-bidpro@mail.com
                  </a>
                </li>
              </ul>
            </div>
          </Row>
          <hr />
          <div class="row">
            <div class="col-md-4">
              <h5 class="text-light">Newsletter</h5>
              <p class="text-light">
                Subscribe to our newsletter for the latest updates.
              </p>
              <form>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="newsletter-email"
                    placeholder="Enter email"
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
            <div class="col-md-4">
              <h5 class="text-light">Popular Tags</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="text-light">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" class="text-light">
                    HomePage
                  </a>
                </li>
                <li>
                  <a href="#" class="text-light">
                    Store Listing
                  </a>
                </li>
                <li>
                  <a href="#" class="text-light">
                    Single Post
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <h5 class="text-light">Links</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="text-light">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" class="text-light">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" class="text-light">
                    Site Map
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
