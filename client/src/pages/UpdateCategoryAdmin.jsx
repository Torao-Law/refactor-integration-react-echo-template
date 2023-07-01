import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import NavbarAdmin from '../components/NavbarAdmin';
// import useMutation, useQuery, API and others here 

export default function UpdateCategoryAdmin() {
  // set title in tab header browser
  const title = 'Category admin';
  document.title = 'DumbMerch | ' + title;
  
  // code here

  // to capture the latest category value from the input form
  const handleChange = (e) => {
    setCategory({
      ...category,
      name: e.target.value,
    });
  };

  // if you have entered the updating material from the web service then create a function here to update category from web server
  
  return (
    <>
      <NavbarAdmin title={title} />

      <Container className="py-5">
        <Row>
          <Col xs="12">
            <div className="text-header-category mb-4">Edit Category</div>
          </Col>
          
          <Col xs="12">
            <form> {/* modify this tag form and tag input*/}
              <input onChange={handleChange} value={""} placeholder="category" className="input-edit-category mt-4" />

              <div className="d-grid gap-2 mt-4">
                <Button type="submit" variant="success" size="md">
                  Save
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
