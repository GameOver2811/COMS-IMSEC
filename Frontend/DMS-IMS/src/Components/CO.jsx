import React, { useContext, useState } from "react";
import COResult from "./COResult";
import { COContext } from "../contextAPI/COContext";
import { Button, Container, Row, Col, Card, Table, Modal } from "react-bootstrap";

const CO = () => {
  const { coData } = useContext(COContext);
  const [showModal, setShowModal] = useState(false);
  const [showStudentModal, setStudentModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState({});

  const handleDetails = (rollNumber, marks, branch, year, section, id) => {
    const data = {
      rollNumber,
      marks,
      branch,
      year,
      section,
      id
    }
    setSelectedStudent(data);
    setStudentModal(true);
  }

  const calculatePercentage = (a, b, c) => {
    let totalMarks = parseInt(a) + parseInt(b) + parseInt(c);
    let totalPossibleMarks = 17; // Change this value if different
    let percentage = (totalMarks * 100) / totalPossibleMarks;
    return percentage.toFixed(2) + "%"; // Display percentage with 2 decimal places
  }

  return (
    <>
      <Modal show={showStudentModal} onHide={() => setStudentModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Student Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            {/* Basic Information Section */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="h5 mb-3">Basic Information</Card.Title>
                <Row>
                  <Col md={6} className="mb-2"><strong>Roll Number:</strong> {selectedStudent.rollNumber}</Col>
                  <Col md={6} className="mb-2"><strong>Branch:</strong> {selectedStudent.branch}</Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-2"><strong>Year:</strong> {selectedStudent.year + " year"}</Col>
                  <Col md={6} className="mb-2"><strong>Section:</strong> {selectedStudent.section}</Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Marks Section */}
            <Card>
              <Card.Body>
                <Card.Title className="h5 mb-3">Marks</Card.Title>
                <Row>
                  <Col>
                    <Card className="mb-3">
                      <Card.Body>
                        <h5>Section:A</h5>
                        <ul className="list-unstyled">
                          <li><strong>1(a):</strong> {selectedStudent.marks?.A?._1a}</li>
                          <li><strong>1(b):</strong> {selectedStudent.marks?.A?._1b}</li>
                          <li><strong>1(c):</strong> {selectedStudent.marks?.A?._1c}</li>
                          <li><strong>1(d):</strong> {selectedStudent.marks?.A?._1d}</li>
                          <li><strong>1(e):</strong> {selectedStudent.marks?.A?._1e}</li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="mb-3">
                      <Card.Body>
                        <h5>Section:B</h5>
                        <ul className="list-unstyled">
                          <li><strong>2(a):</strong> {selectedStudent.marks?.B?._2a}</li>
                          <li><strong>2(b):</strong> {selectedStudent.marks?.B?._2b}</li>
                          <li><strong>2(c):</strong> {selectedStudent.marks?.B?._2c}</li>
                          <li><strong>2(d):</strong> {selectedStudent.marks?.B?._2d}</li>
                          <li><strong>2(e):</strong> {selectedStudent.marks?.B?._2e}</li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="mb-3">
                      <Card.Body>
                        <h5>Section:C</h5>
                        <ul className="list-unstyled">
                          <li><strong>3:</strong> {selectedStudent.marks?.C?._3}</li>
                          <li><strong>4:</strong> {selectedStudent.marks?.C?._4}</li>
                          <li><strong>5:</strong> {selectedStudent.marks?.C?._5}</li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </Modal.Body>
      </Modal>




      <Container className="my-4 mx-5">
        <COResult showModal={showModal} setShowModal={setShowModal} />
        <Row className="justify-content-center mx-5">
          <Col md={6}>
            <Card className="text-center shadow-sm">
              <Card.Body>
                <Card.Title className="mb-4">Course Outcome Results</Card.Title>
                <Button
                  variant="primary"
                  onClick={() => setShowModal(true)}
                  className="w-100"
                >
                  Open COResult
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Display the table if coData is available */}
        {coData.length > 0 && (
          <Row className="justify-content-center mt-4 mx-5">
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr className="text-center">
                    <th>S. No.</th>
                    <th>Roll Number</th>
                    <th>Branch</th>
                    <th>CO-01</th>
                    <th>CO-02</th>
                    <th>CO-03</th>
                    <th>CO-04</th>
                    <th>CO-05</th>
                    <th>More Details</th>
                  </tr>
                </thead>
                <tbody>
                  {coData.map((co, index) => (
                    <tr key={co._id} className="text-center">
                      <td>{index + 1}</td>
                      <td>{co.rollNumber}</td>
                      <td>{co.branch}</td>
                      <td>{
                        calculatePercentage(co.marks.A._1a, co.marks.B._2a, co.marks.C._3)
                      }
                      </td>
                      <td>{
                        calculatePercentage(co.marks.A._1b, co.marks.B._2b, co.marks.C._4)
                      }
                      </td>
                      <td>{
                        calculatePercentage(co.marks.A._1c, co.marks.B._2c, co.marks.C._5)
                        }
                      </td>
                      <td>{
                        
                          calculatePercentage(co.marks.A._1d, co.marks.B._2d, co.marks.C._5)
                          }
                      </td>
                      <td>{
                        calculatePercentage(co.marks.A._1e, co.marks.B._2e, co.marks.C._5)
                        }
                      </td>
                      <td>
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => handleDetails(co.rollNumber, co.marks, co.branch, co.year, co.section, co._id)}
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default CO;
