import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchCriteria, filterFlights } from '../redux/flightSlice';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { FaSearch, FaPlaneDeparture, FaPlaneArrival } from 'react-icons/fa';

const FlightSearch = () => {
  const dispatch = useDispatch();
  const [depart, setDepart] = useState('');
  const [arrivee, setArrivee] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchCriteria({ depart, arrivee }));
    dispatch(filterFlights());
  };

  return (
    <Card className="border-0 shadow-lg rounded-4 mb-4 overflow-hidden">

      {/* Header */}
      <div className="bg-primary text-white p-3 d-flex align-items-center gap-2">
        <FaSearch size={18} />
        <h5 className="mb-0">Rechercher un vol</h5>
      </div>

      <Card.Body className="p-4">
        <Form onSubmit={handleSearch}>
          <Row className="g-3">

            {/* Depart */}
            <Col md={5}>
              <Form.Group>
                <Form.Label className="fw-semibold text-muted small">
                  <FaPlaneDeparture className="me-2 text-success" />
                  Ville de départ
                </Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Ex: Rabat, Casablanca..."
                  value={depart}
                  onChange={(e) => setDepart(e.target.value)}
                  className="rounded-3 shadow-sm py-2"
                />
              </Form.Group>
            </Col>

            {/* Arrivee */}
            <Col md={5}>
              <Form.Group>
                <Form.Label className="fw-semibold text-muted small">
                  <FaPlaneArrival className="me-2 text-danger" />
                  Ville d'arrivée
                </Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Ex: Paris, Dubai..."
                  value={arrivee}
                  onChange={(e) => setArrivee(e.target.value)}
                  className="rounded-3 shadow-sm py-2"
                />
              </Form.Group>
            </Col>

            {/* Button */}
            <Col md={2} className="d-flex align-items-end">
              <Button
                variant="primary"
                type="submit"
                className="w-100 rounded-pill fw-semibold shadow-sm py-2"
              >
                <FaSearch className="me-2" />
                Rechercher
              </Button>
            </Col>

          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FlightSearch;
