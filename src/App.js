import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import FlightSearch from './components/FlightSearch';
import FlightTable from './components/FlightTable';
import ServiceForm from './components/ServiceForm';
import Invoice from './components/Invoice';
import { FaPlane, FaCog, FaFileInvoice } from 'react-icons/fa';

function App() {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [activeTab, setActiveTab] = useState('vols');

  const handleSelectFlight = (flight) => {
    setSelectedFlight(flight);
    setActiveTab('services');
  };

  return (
    <>
      {/* Navbar Dark Blue */}
      <Navbar
        expand="lg"
        className="shadow-sm"
        style={{
          background: "#0a1f44", // dark blue professional
          transition: "all 0.3s ease"
        }}
        variant="dark"
      >
        <Container>

          <Navbar.Brand className="fw-bold fs-5 d-flex align-items-center">
            <FaPlane className="me-2" />
            JETEX
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse>
            <Nav className="ms-auto fw-semibold">

              <Nav.Link
                active={activeTab === 'vols'}
                onClick={() => setActiveTab('vols')}
                className="d-flex align-items-center gap-2 px-3 nav-anim"
              >
                <FaPlane />
                Vols
              </Nav.Link>

              <Nav.Link
                active={activeTab === 'services'}
                onClick={() => setActiveTab('services')}
                disabled={!selectedFlight}
                className="d-flex align-items-center gap-2 px-3 nav-anim"
              >
                <FaCog />
                Services
              </Nav.Link>

              <Nav.Link
                active={activeTab === 'facture'}
                onClick={() => setActiveTab('facture')}
                disabled={!selectedFlight}
                className="d-flex align-items-center gap-2 px-3 nav-anim"
              >
                <FaFileInvoice />
                Facture
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="mb-5 mt-4 fade-in">
        <Row>
          <Col>

            {activeTab === 'vols' && (
              <>
                <FlightSearch />
                <FlightTable onSelectForServices={handleSelectFlight} />
              </>
            )}

            {activeTab === 'services' && (
              <ServiceForm selectedFlight={selectedFlight} />
            )}

            {activeTab === 'facture' && (
              <Invoice />
            )}

          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="text-center py-3 mt-5 bg-light">
        <Container>
          <small className="text-muted">
            JETEX — Flight Management System
          </small>
        </Container>
      </footer>

      {/* Simple Animation CSS */}
      <style>
        {`
          .nav-anim {
            transition: all 0.25s ease;
          }

          .nav-anim:hover {
            transform: translateY(-2px);
            opacity: 0.9;
          }

          .fade-in {
            animation: fadeIn 0.4s ease-in-out;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
}

export default App;
