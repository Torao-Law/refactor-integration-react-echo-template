import { Col, Container, Row } from 'react-bootstrap';
import Masonry from 'react-masonry-css';
import ProductCard from '../components/card/ProductCard';
import Navbar from '../components/Navbar';
import imgEmpty from '../assets/empty.svg';
import products from "../fakeData/product"
// delete fake data products from import if you have entered the fetching material from the web service
// import useMutation, useQuery, API here 

export default function Product() {
  // set title in tab header browser
  const title = 'Shop';
  document.title = 'DumbMerch | ' + title;

  // initial value for Masonry
  const breakpointColumnsObj = {
    default: 6,
    1100: 4,
    700: 3,
    500: 2,
  };

  // if you have entered the fetching material from the web service then create a function here to replace the fake data product
  

  return (
    <>
      <Navbar title={title} />

      <Container className="mt-5">
        <Row>
          <Col>
            <div className="text-header-product">Product</div>
          </Col>
        </Row>

        <Row className="my-4">
          {products?.length !== 0 ? (
            <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
              {products?.map((item, index) => <ProductCard item={item} key={index} />)}
            </Masonry>
          ) : (
            <Col>
              <div className="text-center pt-5">
                <img src={imgEmpty} className="img-fluid" style={{ width: '40%' }} alt="empty" />
                <div className="mt-3">No data product</div>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
}
