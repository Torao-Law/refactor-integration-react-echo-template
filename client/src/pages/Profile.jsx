import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import convertRupiah from 'rupiah-format';
import imgDumbMerch from '../assets/DumbMerch.png';
import dateFormat from 'dateformat';
import Navbar from '../components/Navbar';
import imgBlank from '../assets/blank-profile.png';
import profile from '../fakeData/profile'
import transactions from '../fakeData/transaction'
// delete all fake from import if you have entered the fetching material from the web service
// import useQuery, UserContext, API and others here 

export default function Profile() {
  // set title in tab header browser
  const title = 'Profile';
  document.title = 'DumbMerch | ' + title;

  // adding data from context after loggedin here

  // if you have entered the fetching material from the web service then create a function here to replace the fake data profile

  // if you have entered the fetching material from the web service then create a function here to replace the fake data transaction

  return (
    <>
      <Navbar title={title} />

      <Container className="my-5">
        <Row>
          <Col md="6">
            <div className="text-header-product mb-4">My Profile</div>
           
            <Row>
              <Col md="6">
                {/* modify all value */}
                <img src={profile?.image ? profile.image : imgBlank} className="img-fluid rounded" alt="avatar" />
              </Col>

              <Col md="6">
                <div className="profile-header">Name</div>
                <div className="profile-content">{profile.name}</div>

                <div className="profile-header">Email</div>
                <div className="profile-content">{profile.email}</div>

                <div className="profile-header">Phone</div>
                <div className="profile-content">{profile?.phone ? profile?.phone : '-'}</div>

                <div className="profile-header">Gender</div>
                <div className="profile-content">{profile?.gender ? profile?.gender : '-'}</div>

                <div className="profile-header">Address</div>
                <div className="profile-content">{profile?.address ? profile?.address : '-'}</div>
              </Col>
            </Row>
          </Col>

          <Col md="6">
            <div className="text-header-product mb-4">My Transaction</div>
            {transactions?.length !== 0 ? (
              <>
                {transactions?.map((item, index) => (
                  <div key={index} style={{ background: '#303030' }} className="p-2 mb-1">
                    <Container fluid className="px-1">
                      <Row>
                        <Col xs="3">
                          <img src={`http://localhost:5000/uploads/${item.product.image}`} alt="img" className="img-fluid" style={{ height: '120px', width: '170px', objectFit: 'cover' }} />
                        </Col>

                        <Col xs="6">
                          <div style={{ fontSize: '18px', color: '#F74D4D', fontWeight: '500', lineHeight: '19px' }}>
                            {item.product.name}
                          </div>

                          <div className="mt-2" style={{ fontSize: '14px', color: '#F74D4D', fontWeight: '300', lineHeight: '19px' }}>
                            {dateFormat(item.createdAt, 'dddd, d mmmm yyyy')}
                          </div>

                          <div className="mt-3" style={{ fontSize: '14px', fontWeight: '300' }}>
                            Price : {convertRupiah.convert(item.price)}
                          </div>

                          <div className="mt-3" style={{ fontSize: '14px', fontWeight: '700' }}>
                            Sub Total : {convertRupiah.convert(item.price)}
                          </div>
                        </Col>

                        <Col xs="3">
                          <img src={imgDumbMerch} alt="img" className="img-fluid" style={{ maxHeight: '120px' }}/>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                ))}
              </>
            ) : (
              <div className="no-data-transaction">No transaction</div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
