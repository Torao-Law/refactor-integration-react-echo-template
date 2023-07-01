import React from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import DeleteData from '../components/modal/DeleteData';
import NavbarAdmin from '../components/NavbarAdmin';
import imgEmpty from '../assets/empty.svg';
import categories from "../fakeData/category";
// delete fake data categories from import if you have entered the fetching material from the web service
// import useMutation, useQuery, API here 

export default function CategoryAdmin() {
  // set title in tab header browser
  const title = 'Category admin';
  document.title = 'DumbMerch | ' + title;
  
  // activate this function after creating the function to handle delete data
  // const [idDelete, setIdDelete] = useState(null);
  // const [confirmDelete, setConfirmDelete] = useState(null);
  // const [show, setShow] = useState(false);

  // create function handleClose, handleShow Here


  // if you have entered the fetching material from the web service then create a function here to replace the fake data categories

  // create function handleDelete, HandleEdit here

  const  addCategory = () => {
    navigate('/add-category');
  };

  // if you have entered the delete data material from the web service then create a function here to handle it.
  

  // activate this function after creating the function to handle delete data
  // useEffect(() => {
  //   if (confirmDelete) {
  //     handleClose(); // Close modal confirm delete data
  //     deleteById.mutate(idDelete); // execute delete data by id function
  //     setConfirmDelete(null);
  //   }
  // }, [confirmDelete]);

  return (
    <>
      <NavbarAdmin title={title} />

      <Container className="py-5">
        <Row>
          <Col>
            <div className="text-header-category mb-4">List Category</div>
          </Col>

          <Col className="text-end">
            <Button onClick={addCategory} className="btn-dark" style={{ width: '100px' }}>
              Add
            </Button>
          </Col>

          <Col xs="12">
            {categories?.length !== 0 ? (
              <Table striped hover size="lg" variant="dark">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Category Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {categories?.map((item, index) => (
                    <tr key={index}>
                      <td width="10%" className="align-middle">
                        {index + 1}
                      </td>
                      <td width="60%" className="align-middle">
                        {item.name}
                      </td>
                      <td width="30%">
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
                <img src={imgEmpty} className="img-fluid" style={{ width: '40%' }} alt="empty"/>
                <div className="mt-3">No data category</div>
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
