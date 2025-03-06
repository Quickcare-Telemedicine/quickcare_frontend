import { useState } from "react";

export default function QuickCareAppointment() {
  const [appointmentRequested, setAppointmentRequested] = useState(false);

  const handleRequestAppointment = () => {
    setAppointmentRequested(true);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "white", color: "#800000", padding: "1.5rem" }}>
      <div style={{ width: "100%", maxWidth: "400px", padding: "1.5rem", backgroundColor: "#f5e6e6", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "10px", textAlign: "center" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>QuickCare Appointment</h1>
        <p style={{ color: "#660000", marginBottom: "1rem" }}>
          Request an appointment with our doctors at your convenience.
        </p>
        <button
          style={{ backgroundColor: "#800000", color: "white", padding: "0.5rem 1rem", borderRadius: "5px", border: "none", cursor: "pointer", transition: "background 0.3s" }}
          onClick={handleRequestAppointment}
        >
          {appointmentRequested ? "Appointment Requested" : "Request Appointment"}
        </button>
      </div>
    </div>
  );
}
