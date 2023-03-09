import { Tab, Tabs } from "react-bootstrap";
import ProductList from "../../Components/ProductCard/ProductList";

function productListingPage() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="All">
        <ProductList />
      </Tab>
      <Tab eventKey="profile" title="Auction">
        <ProductList />
      </Tab>
      <Tab eventKey="longer-tab" title="Buy It Now">
        <ProductList />
      </Tab>
    </Tabs>
  );
}

export default productListingPage;
