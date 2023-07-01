import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import NavbarAdmin from '../components/NavbarAdmin';

// import useMutation, useNavigate, API here


export default function AddCategoryAdmin() {
  // set title in tab header browser
  const title = 'Category admin';
  document.title = 'DumbMerch | ' + title;

  // add code here to initialization useNavigate
  
  const [category, setCategory] = useState('');

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  // add code here to handle add category


  return (
    <>
      <NavbarAdmin title={title} />
      
      <Container className="py-5">
        <Row>
          <Col xs="12">
            <div className="text-header-category mb-4">Add Category</div>
          </Col>

          <Col xs="12">
            <form> {/* modify tag form */}
              <input onChange={handleChange} placeholder="category" value={category} name="category" className="input-edit-category mt-4" />

              <div className="d-grid gap-2 mt-4">
                <Button type="submit" variant="success" size="md">
                  Add
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
