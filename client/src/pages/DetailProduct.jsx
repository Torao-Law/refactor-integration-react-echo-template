import { Col, Container, Row } from 'react-bootstrap';
import convertRupiah from 'rupiah-format';
import Navbar from '../components/Navbar';
import product from "../fakeData/product"
// import here

export default function DetailProduct() {
  // set title in tab header browser
  const title = 'Shop';
  document.title = 'DumbMerch | ' + title;

  // code here

  return (
    <div>
      <Navbar />
      <Container className="py-5">
        <Row>
          <Col md="2"></Col>
          <Col md="3">
            <img src={product?.image} className="img-fluid" />
          </Col>
          <Col md="5">
            <div className="text-header-product-detail">{product?.name}</div>
            <div className="text-content-product-detail">
              Stock : {product?.qty}
            </div>
            <p className="text-content-product-detail mt-4">{product?.desc}</p>
            <div className="text-price-product-detail text-end mt-4">
              {convertRupiah.convert(product?.price)}
            </div>
            <div className="d-grid gap-2 mt-5">
              <button
                onClick={(e) => handleBuy.mutate(e)}
                className="btn btn-buy"
              >
                Buy
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
