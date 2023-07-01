import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import NavbarAdmin from '../components/NavbarAdmin';
import categories from "../fakeData/category"; 
// delete fake data categories from import if you have entered the fetching material from the web service
// import useMutation, useQuery, API here 

export default function AddProductAdmin() {
  // set title in tab header browser
  const title = 'Product admin';
  document.title = 'DumbMerch | ' + title;

  // init useNavigate() here

  //For image preview
  const [preview, setPreview] = useState(null)
  
  //Store product data
  const [form, setForm] = useState({
    image: '',
    name: '',
    desc: '',
    price: '',
    qty: '',
    category_id: []
  }); 

  // if you have entered the fetching material from the web service then create a function here to replace the fake data categories

  // For handle if category selected
  const handleChangeCategoryId = (e) => {
    const id = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      // Save category id if checked
      setForm({ ...form, category_id: [...form.category_id, id] });
    } else {
      // Delete category id from variable if unchecked
      let newCategoryId = form.category_id.filter((categoryId) => {
        return categoryId != id;
      });
      setForm({ ...form, category_id: newCategoryId });
    }
  };

  // Handle change data product on form
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === 'file' ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === 'file') {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  // code here to add a function handle submit

  return (
    <>
      <NavbarAdmin title={title} />
      <Container className="py-5">
        <Row>
          <Col xs="12">
            <div className="text-header-category mb-4">Add Product</div>
          </Col>
          <Col xs="12">
            {/* modify tag form */}
            <form> 
              {preview && (
                <div>
                  <img src={preview} style={{ maxWidth: '150px', maxHeight: '150px', objectFit: 'cover'}} alt={preview}/>
                </div>
              )}

              <input type="file" id="upload" name="image" onChange={handleChange} hidden />
              <label htmlFor="upload" className="label-file-add-product">
                Upload file
              </label>

              <input type="text" placeholder="Product Name" name="name" onChange={handleChange} className="input-edit-category mt-4"/>
              
              <textarea placeholder="Product Desc" name="desc" onChange={handleChange} className="input-edit-category mt-4" style={{ height: '130px' }}></textarea>

              <input type="number" placeholder="Price (Rp.)" name="price" onChange={handleChange} className="input-edit-category mt-4"/>
              
              <input type="number" placeholder="Stock" name="qty" onChange={handleChange} className="input-edit-category mt-4"/>

              <div className="card-form-input mt-4 px-2 py-1 pb-2">
                <div className="text-secondary mb-1" style={{ fontSize: '15px' }} >
                  Category
                </div>

                {categories?.map((item, index) => (
                  <label className="checkbox-inline me-4" key={index}>
                    <input type="checkbox" value={item.id} onClick={handleChangeCategoryId} />
                    {`  ${item.name}`}
                  </label>
                ))}                
              </div>

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
