import React from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import ShowMoreText from 'react-show-more-text';
import rupiahFormat from 'rupiah-format';
import DeleteData from '../components/modal/DeleteData';
import NavbarAdmin from '../components/NavbarAdmin';
import imgEmpty from '../assets/empty.svg';
import products from '../fakeData/product'
import { useNavigate } from 'react-router-dom'
// delete all fake from import if you have entered the fetching material from the web service
// import useMutation, useQuery, API here 

export default function ProductAdmin() {
  // set title in tab header browser
  const title = 'Product admin';
  document.title = 'DumbMerch | ' + title;

  let navigate = useNavigate()

  // activate this function after creating the function to handle delete data
  // const [idDelete, setIdDelete] = useState(null);
  // const [confirmDelete, setConfirmDelete] = useState(null);
  // const [show, setShow] = useState(false);

  // create function handleClose, handleShow Here

  // function handle button delete before show modal
  const handleDelete = (id) => {
    setIdDelete(id);
    handleShow();
  };

  // activate this function after creating the function to handle delete data
  // execute delete data updating by checked from conditional and close modal 
  // useEffect(() => {
  //   if (confirmDelete) {
  //     handleClose(); // Close modal confirm delete data
  //     deleteById.mutate(idDelete); // execute delete data by id function
  //     setConfirmDelete(null);
  //   }
  // }, [confirmDelete]);

  // if you have entered the fetching material from the web service then create a function here to replace the fake data categories

  // function navigate after click button add product
  const addProduct = () => {
    navigate('/add-product');
  };

  // function navigate after click button update product
  const handleUpdate = (id) => {
    navigate('/update-product/' + id);
  };

  // if you have entered the delete data material from the web service then create a function here to handle it.

  // activate this function after creating the function to handle refetch data from web server
  // // Do a refetch after a data change from server 
  // useEffect(() => {
  //   refetch()
  // }, [refetch])

  return (
    <>
      <NavbarAdmin title={title} />

      <Container className="py-5">
        <Row>
          <Col xs="6">
            <div className="text-header-category mb-4">List Product</div>
          </Col>
          <Col xs="6" className="text-end">
            <Button onClick={addProduct} className="btn-dark" style={{ width: '100px' }}>
              Add
            </Button>
          </Col>
          
          <Col xs="12">
            {products?.length !== 0 ? (
              <Table striped hover size="lg" variant="dark">
                <thead>
                  <tr>
                    <th width="1%" className="text-center">No</th>
                    <th className="text-center">Photo</th>
                    <th>Product Name</th>
                    <th>Product Desc</th>
                    <th>Price</th>
                    <th className="text-center">Qty</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                
                <tbody>
                  {products?.map((item, index) => (
                    <tr key={index}>
                      <td className="align-middle text-center">
                        {index + 1}
                      </td>

                      <td className="align-middle">
                        <img src={item.image} style={{ width: '80px', height: '80px', objectFit: 'cover' }} alt={item.name} />
                      </td>

                      <td className="align-middle">
                        {item.name}
                      </td>
                      
                      <td className="align-middle">
                        <ShowMoreText lines={1} more="show" less="hide" className="content-css" anchorClass="my-anchor-css-class" expanded={false} width={280}>
                          {item.desc}
                        </ShowMoreText>
                      </td>

                      <td className="align-middle">
                        {rupiahFormat.convert(item.price)}
                      </td>

                      <td className="align-middle">{item.qty}</td>

                      <td className="align-middle">
                        {/* modify this button */}
                        <Button onClick={""} className="btn-sm btn-success me-2" style={{ width: '135px' }}>
                          Edit
                        </Button>

                        <Button onClick={""} className="btn-sm btn-danger" style={{ width: '135px' }}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <div className="text-center pt-5">
                <img src={imgEmpty} className="img-fluid" style={{ width: '40%' }} alt="empty" />
                <div className="mt-3">No data product</div>
              </div>
            )}
          </Col>
        </Row>

      </Container>
      <DeleteData 
        // activate this attribute when you have created the function
        // setConfirmDelete={setConfirmDelete}
        // show={show}
        // handleClose={handleClose}  
        />
    </>
  );
}
