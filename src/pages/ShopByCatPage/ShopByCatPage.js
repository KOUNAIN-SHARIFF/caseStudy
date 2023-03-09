import { Row, Container } from "react-bootstrap";
import "./ShopByCatPage.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

function ShopByPage() {
  const navigate = useNavigate();

  const optionHandler = () => {
    navigate("/products");
  };

  return (
    <>
      <Navbar />
      <Container>
        <Row className="mb-3">
          <select
            onClick={optionHandler}
            name="Maintainance services"
            id="Categories"
          >
            <option value="Maintainance services" selected>
              Maintainance services
            </option>
            <option value="Level 3"> Level 3</option>
            <option value="Level 3"> Level 3</option>
            <option value="Level 3"> Level 3</option>
          </select>
          <select
            onClick={optionHandler}
            name="Work wear & Uniforms"
            id="Categories1"
          >
            <option value="Work wear & Uniforms" selected>
              Work wear & Uniforms
            </option>
            <option value="Level 3"> Level 3</option>
            <option value="Level 3"> Level 3</option>
            <option value="Level 3"> Level 3</option>
          </select>
          <select
            onClick={optionHandler}
            name="Custodial services"
            id="Categories2"
          >
            <option value="Custodial services" selected>
              Custodial services
            </option>
            <option value="Level 3"> Level 3</option>
            <option value="Level 3"> Level 3</option>
            <option value="Level 3"> Level 3</option>
          </select>
          <select
            onClick={optionHandler}
            name="Facility management"
            id="Categories3"
          >
            <option value="Facility management" selected>
              Facility management
            </option>
            <option value="Level 3"> Level 3</option>
            <option value="Level 3"> Level 3</option>
            <option value="Level 3"> Level 3</option>
          </select>
          <select
            onClick={optionHandler}
            name="Facility management"
            id="Categories4"
          >
            <option value="Facility management" selected>
              Facility management
            </option>
            <option value="Level 3"> Level 3</option>
            <option value="Level 3"> Level 3</option>
            <option value="Level 3"> Level 3</option>
          </select>
          <select
            onClick={optionHandler}
            name="Facility management"
            id="Categories5"
          >
            <option value="Facility management" selected>
              Facility management
            </option>
            <option value="Level 3"> Level 3</option>
            <option value="Level 3"> Level 3</option>
            <option value="Level 3"> Level 3</option>
          </select>
          <select
            onClick={optionHandler}
            name="Facility management"
            id="Categories6"
          >
            <option value="Facility management" selected>
              Facility management
            </option>
            <option value="Level 3"> Level 3</option>
            <option value="Level 3"> Level 3</option>
            <option value="Level 3"> Level 3</option>
          </select>
          <select
            onClick={optionHandler}
            name="Facility management"
            id="Categories7"
          >
            <option value="Facility management" selected>
              Facility management
            </option>
            <option value="Level 3"> Level 3</option>
            <option value="Level 3"> Level 3</option>
            <option value="Level 3"> Level 3</option>
          </select>
          <select
            onClick={optionHandler}
            name="Facility management"
            id="Categories8"
          >
            <option value="Facility management" selected>
              Facility management
            </option>
            <option value="Level 3"> Level 3</option>
            <option value="Level 3"> Level 3</option>
            <option value="Level 3"> Level 3</option>
          </select>
          <select
            onClick={optionHandler}
            name="Facility management"
            id="Categories9"
          >
            <option value="Facility management" selected>
              Facility management
            </option>
            <option value="Level 3"> Level 3</option>
            <option value="Level 3"> Level 3</option>
            <option value="Level 3"> Level 3</option>
          </select>
          <select
            onClick={optionHandler}
            name="Facility management"
            id="Categories10"
          >
            <option value="Facility management" selected>
              Facility management
            </option>
            <option value="Level 3"> Level 3</option>
            <option value="Level 3"> Level 3</option>
            <option value="Level 3"> Level 3</option>
          </select>
        </Row>
      </Container>
    </>
  );
}

export default ShopByPage;
