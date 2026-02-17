import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlights, selectFlight } from '../redux/flightSlice';
import { Table, Button, Spinner, Alert, Card, Badge } from 'react-bootstrap';
import { FaPlane, FaClock, FaCalendar, FaMapMarker } from 'react-icons/fa';

const FlightTable = ({ onSelectForServices }) => {
  const dispatch = useDispatch();
  const { filteredFlights, status, error } = useSelector((state) => state.flights);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFlights());
    }
  }, [status, dispatch]);

  const handleSelectFlight = (flight) => {
    dispatch(selectFlight(flight));
    if (onSelectForServices) {
      onSelectForServices(flight);
    }
  };

  if (status === 'loading') {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center py-5">
        <Spinner animation="border" variant="primary" style={{ width: 50, height: 50 }} />
        <p className="mt-3 fw-semibold text-muted">Chargement des vols...</p>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <Alert variant="danger" className="my-4 shadow-sm rounded-4">
        <Alert.Heading>Erreur de chargement</Alert.Heading>
        <p>{error || "Impossible de charger les vols. Veuillez réessayer plus tard."}</p>
      </Alert>
    );
  }

  return (
    <Card className="border-0 shadow-lg rounded-4 overflow-hidden mb-4">
      
      {/* Header */}
      <div className="bg-primary text-white p-3 d-flex align-items-center justify-content-between">
        <h5 className="mb-0 d-flex align-items-center gap-2">
          <FaPlane />
          Vols disponibles
        </h5>
        <Badge bg="light" text="dark" className="fs-6 px-3 py-2">
          {filteredFlights.length}
        </Badge>
      </div>

      <Card.Body className="p-0">

        {filteredFlights.length === 0 ? (
          <Alert variant="info" className="m-3 rounded-3">
            Aucun vol trouvé pour les critères sélectionnés.
          </Alert>
        ) : (
          <div className="table-responsive">
            <Table hover className="align-middle mb-0">
              
              <thead className="table-light">
                <tr className="text-secondary small">
                  <th className="ps-4">N° Vol</th>
                  <th>Départ</th>
                  <th>Arrivée</th>
                  <th>Date & Heure</th>
                  <th className="text-center">Image</th>
                  <th>Prix</th>
                  <th>Services</th>
                  <th className="text-end pe-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredFlights.map((flight) => (
                  <tr key={flight.id} style={{ transition: '0.2s' }}>
                    
                    <td className="ps-4 fw-bold text-primary">
                      #{flight.id}
                    </td>

                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <FaMapMarker className="text-success" />
                        <span className="fw-semibold">{flight.villeDepart}</span>
                      </div>
                    </td>

                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <FaMapMarker className="text-danger" />
                        <span className="fw-semibold">{flight.villeArrivee}</span>
                      </div>
                    </td>

                    <td>
                      <div className="small fw-semibold">
                        <FaCalendar className="me-1 text-primary" />
                        {flight.date}
                      </div>
                      <div className="small text-muted">
                        <FaClock className="me-1" />
                        {flight.heure || '10:30'}
                      </div>
                    </td>

                    <td className="text-center">
  <div
    className="d-flex align-items-center justify-content-center bg-light rounded-3 shadow-sm"
    style={{ width: '70px', height: '45px' }}
  >
    <FaPlane size={22} className="text-primary" />
  </div>
</td>


                    <td>
                      <Badge bg="warning" text="dark" className="fs-6 px-3 py-2">
                        {flight.prix} MAD
                      </Badge>
                    </td>

                    <td>
                      {flight.services && flight.services.length > 0 ? (
                        <Badge bg="success" className="px-3 py-2">
                          {flight.services.length} services
                        </Badge>
                      ) : (
                        <Badge bg="secondary" className="px-3 py-2">
                          Aucun service
                        </Badge>
                      )}
                    </td>

                    <td className="text-end pe-4">
                      <Button
                        variant="primary"
                        size="sm"
                        className="rounded-pill px-3 fw-semibold shadow-sm"
                        onClick={() => handleSelectFlight(flight)}
                      >
                        Sélectionner
                      </Button>
                    </td>

                  </tr>
                ))}
              </tbody>

            </Table>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default FlightTable;
