import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleService } from '../redux/servicesSlice';
import { updateFlightServices } from '../redux/flightSlice';
import { Card, Form, Button, ListGroup, Badge, Alert } from 'react-bootstrap';
import { FaUtensils, FaSuitcase, FaCrown, FaWifi } from 'react-icons/fa';

const ServiceForm = ({ selectedFlight }) => {
  const dispatch = useDispatch();
  const { servicesDisponibles, selectedServices } = useSelector((state) => state.services);

  const getServiceIcon = (serviceId) => {
    switch(serviceId) {
      case 'repas': return <FaUtensils className="me-2 text-warning" />;
      case 'bagages': return <FaSuitcase className="me-2 text-primary" />;
      case 'premium': return <FaCrown className="me-2 text-danger" />;
      case 'wifi': return <FaWifi className="me-2 text-success" />;
      default: return null;
    }
  };

  const handleServiceToggle = (serviceId) => {
    dispatch(toggleService(serviceId));
  };

  const handleSaveServices = () => {
    if (selectedFlight) {
      dispatch(updateFlightServices({
        flightId: selectedFlight.id,
        services: selectedServices
      }));
      alert('Services ajoutés avec succès !');
    }
  };

  const totalServices = selectedServices.reduce((sum, service) => sum + service.prix, 0);

  if (!selectedFlight) {
    return (
      <Card className="border-0 shadow-lg rounded-4 mb-4">
        <Card.Body className="p-4">
          <Alert variant="info" className="mb-0 rounded-3">
            Veuillez sélectionner un vol pour ajouter des services.
          </Alert>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className="border-0 shadow-lg rounded-4 overflow-hidden mb-4">

      {/* Header Gradient */}
      <div
        className="text-white p-4"
        style={{
          background: "linear-gradient(135deg,#198754,#20c997)"
        }}
      >
        <h5 className="mb-1 fw-bold">
          Services pour le vol #{selectedFlight.id}
        </h5>
        <small className="opacity-75">
          {selectedFlight.villeDepart} → {selectedFlight.villeArrivee}
        </small>
      </div>

      <Card.Body className="p-4">

        <ListGroup variant="flush" className="mb-4">

          {servicesDisponibles.map((service) => (
            <ListGroup.Item
              key={service.id}
              className="d-flex align-items-center justify-content-between py-3 border-0 border-bottom"
            >

              <div className="d-flex align-items-center gap-3">

                <Form.Check
                  type="checkbox"
                  id={`service-${service.id}`}
                  checked={service.selected}
                  onChange={() => handleServiceToggle(service.id)}
                />

                <div className="fw-semibold">
                  {getServiceIcon(service.id)}
                  {service.nom}
                </div>

              </div>

              <Badge bg="light" text="dark" className="px-3 py-2 shadow-sm">
                {service.prix} MAD
              </Badge>

            </ListGroup.Item>
          ))}

        </ListGroup>

        {/* Total Section */}
        <div
          className="d-flex justify-content-between align-items-center p-3 rounded-3 mb-4"
          style={{ background: "#f8f9fa" }}
        >
          <span className="fw-semibold text-muted">
            Total des services
          </span>

          <h4 className="mb-0 text-success fw-bold">
            {totalServices} MAD
          </h4>
        </div>

        {/* Button */}
        <Button 
          onClick={handleSaveServices}
          disabled={selectedServices.length === 0}
          className="w-100 rounded-pill fw-bold shadow"
          style={{
            height: "48px",
            background: "linear-gradient(135deg,#198754,#20c997)",
            border: "none"
          }}
        >
          Confirmer les services
        </Button>

      </Card.Body>
    </Card>
  );
};

export default ServiceForm;
