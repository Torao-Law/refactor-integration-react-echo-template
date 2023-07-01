import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import CheckBox from '../components/form/CheckBox';
import NavbarAdmin from '../components/NavbarAdmin';
// import here

export default function UpdateProductAdmin() {
  // set title in tab header browser
  const title = 'Product admin';
  document.title = 'DumbMerch | ' + title;

  // code here

  
  return (
    <>
      <NavbarAdmin title={title} />

      <Container className="py-5">
        <Row>
          <Col xs="12">
            <div className="text-header-category mb-4">Update Product</div>
          </Col>

          <Col xs="12">
            {/* modify this form */}
            <form> 
              {preview && (
                <div>
                  <img src={preview} style={{ maxWidth: '150px', maxHeight: '150px', objectFit: 'cover' }} alt="preview" />
                </div>
              )}

              <input type="file" id="upload" name="image" onChange={""} hidden/>
              <label htmlFor="upload" className="label-file-add-product">
                Upload file
              </label>

              <input type="text" placeholder="Product Name" name="name" onChange={""} value={""} className="input-edit-category mt-4" />
              
              <textarea placeholder="Product Desc" name="desc" onChange={""} value={""} className="input-edit-category mt-4"style={{ height: '130px' }}></textarea>
              
              <input type="number" placeholder="Price (Rp.)" name="price" onChange={""} value={""} className="input-edit-category mt-4" />
              
              <input type="number" placeholder="Stock" name="qty" onChange={""} value={""} className="input-edit-category mt-4" />

              <div className="card-form-input mt-4 px-2 py-1 pb-2">
                <div className="text-secondary mb-1" style={{ fontSize: '15px' }}>
                  Category
                </div>

                {/* active this code after fetch api */}
                {/* {!isLoading && categories?.map((item, index) => (
                  <label key={index} className="checkbox-inline me-4">
                    <CheckBox categoryId={form?.category_id} value={item?.id} handleChangeCategoryId={""} />
                    <span className="ms-2">{item?.name}</span>
                  </label>
                ))} */}
              </div>

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
