import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { confirmerReservation, resetServices } from '../redux/servicesSlice';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCheck, 
  FaPlane, 
  FaReceipt, 
  FaClock, 
  FaMapMarkerAlt, 
  FaCalendarAlt,
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCreditCard,
  FaPrint,
  FaShare
} from 'react-icons/fa';
import './Invoice.css';

const Invoice = () => {
  const dispatch = useDispatch();
  const { selectedFlight } = useSelector((state) => state.flights);
  const { selectedServices, reservationConfirmee } = useSelector((state) => state.services);
  const [animateTotal, setAnimateTotal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setAnimateTotal(true);
    const timer = setTimeout(() => setAnimateTotal(false), 500);
    return () => clearTimeout(timer);
  }, [selectedServices, selectedFlight]);

  useEffect(() => {
    if (reservationConfirmee) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [reservationConfirmee]);

  const handleConfirmReservation = () => {
    dispatch(confirmerReservation());
  };

  const handleNewReservation = () => {
    dispatch(resetServices());
  };

  const handlePrint = () => {
    window.print();
  };

  if (!selectedFlight) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="invoice-card empty-state">
          <div className="empty-state-icon">
            <FaPlane />
          </div>
          <h3>Aucun vol sélectionné</h3>
          <p>Veuillez sélectionner un vol pour voir les détails de facturation</p>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/'}
          >
            <FaPlaneDeparture /> Rechercher des vols
          </motion.button>
        </div>
      </motion.div>
    );
  }

  const prixBase = selectedFlight.prix || 0;
  const totalServices = selectedServices.reduce((sum, service) => sum + service.prix, 0);
  const totalAPayer = prixBase + totalServices;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <>
      {showConfetti && <div className="confetti"></div>}
      
      <motion.div
        className="invoice-wrapper"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="invoice-card">
          {/* En-tête avec design professionnel */}
          <motion.div 
            className="invoice-header"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <div className="header-left">
              <div className="logo-container">
                <FaPlane className="logo-icon" />
                <h1>JETEX</h1>
              </div>
              <p className="invoice-number">Facture #INV-{selectedFlight.id}-{Date.now()}</p>
            </div>
            <div className="header-right">
              <motion.button
                className="btn-icon"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePrint}
              >
                <FaPrint />
              </motion.button>
              <motion.button
                className="btn-icon"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaShare />
              </motion.button>
            </div>
          </motion.div>

          {/* Bannière de confirmation */}
          <AnimatePresence>
            {reservationConfirmee && (
              <motion.div
                className="confirmation-banner"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="banner-content">
                  <FaCheck className="banner-icon" />
                  <div>
                    <h4>Réservation confirmée !</h4>
                    <p>Votre vol a été réservé avec succès. Un email de confirmation a été envoyé.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Informations du vol */}
          <motion.div 
            className="flight-info-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 variants={itemVariants}>
              <FaReceipt className="section-icon" />
              Détails du vol
            </motion.h2>

            <div className="flight-details-grid">
              <motion.div className="detail-card" variants={itemVariants}>
                <div className="detail-icon">
                  <FaPlaneDeparture />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Vol</span>
                  <span className="detail-value">{selectedFlight.id}</span>
                </div>
              </motion.div>

              <motion.div className="detail-card" variants={itemVariants}>
                <div className="detail-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Départ</span>
                  <span className="detail-value">{selectedFlight.villeDepart}</span>
                </div>
              </motion.div>

              <motion.div className="detail-card" variants={itemVariants}>
                <div className="detail-icon">
                  <FaPlaneArrival />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Arrivée</span>
                  <span className="detail-value">{selectedFlight.villeArrivee}</span>
                </div>
              </motion.div>

              <motion.div className="detail-card" variants={itemVariants}>
                <div className="detail-icon">
                  <FaCalendarAlt />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Date</span>
                  <span className="detail-value">{selectedFlight.date}</span>
                </div>
              </motion.div>

              <motion.div className="detail-card" variants={itemVariants}>
                <div className="detail-icon">
                  <FaClock />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Heure</span>
                  <span className="detail-value">{selectedFlight.heure || '10:30'}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Services sélectionnés */}
          <motion.div 
            className="services-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 variants={itemVariants}>
              <FaCreditCard className="section-icon" />
              Services sélectionnés
            </motion.h2>

            <div className="services-list">
              <AnimatePresence>
                {selectedServices.length === 0 ? (
                  <motion.div 
                    className="no-services"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <p>Aucun service sélectionné</p>
                  </motion.div>
                ) : (
                  selectedServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      className="service-item"
                      variants={itemVariants}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, backgroundColor: '#f8f9fa' }}
                    >
                      <div className="service-info">
                        <span className="service-name">{service.nom}</span>
                        <span className="service-price">{service.prix} MAD</span>
                      </div>
                      <motion.div 
                        className="service-indicator"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      />
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Récapitulatif des prix */}
          <motion.div 
            className="price-summary"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="summary-item" variants={itemVariants}>
              <span>Prix du billet</span>
              <motion.span 
                className="amount"
                animate={animateTotal ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                {prixBase} MAD
              </motion.span>
            </motion.div>

            <motion.div className="summary-item" variants={itemVariants}>
              <span>Total services</span>
              <motion.span 
                className="amount"
                animate={animateTotal ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                + {totalServices} MAD
              </motion.span>
            </motion.div>

            <motion.div 
              className="summary-total"
              variants={itemVariants}
              animate={animateTotal ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 0.5 }}
            >
              <span>Total à payer</span>
              <motion.span 
                className="total-amount"
                animate={animateTotal ? { 
                  color: ['#007bff', '#28a745', '#007bff'],
                  scale: [1, 1.2, 1]
                } : {}}
                transition={{ duration: 0.5 }}
              >
                {totalAPayer} MAD
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Actions */}
          <motion.div 
            className="invoice-actions"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {!reservationConfirmee ? (
              <motion.button
                className="btn-confirm"
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: '0 10px 25px rgba(40, 167, 69, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                onClick={handleConfirmReservation}
              >
                <FaCheck className="btn-icon" />
                <span>Confirmer la réservation</span>
                <motion.div 
                  className="btn-ripple"
                  animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              </motion.button>
            ) : (
              <motion.button
                className="btn-new"
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: '0 10px 25px rgba(0, 123, 255, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                onClick={handleNewReservation}
              >
                <FaPlane className="btn-icon" />
                <span>Nouvelle réservation</span>
              </motion.button>
            )}
          </motion.div>

          {/* Pied de page */}
          <motion.div 
            className="invoice-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p>Merci de votre confiance !</p>
            <p className="footer-note">Cette facture est générée automatiquement</p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Invoice;