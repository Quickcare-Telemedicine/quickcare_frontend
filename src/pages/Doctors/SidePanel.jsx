import { useState } from "react";

export default function QuickCareAppointment() {
  const [appointmentRequested, setAppointmentRequested] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const userDetails = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890"
  };

  const handleRequestAppointment = () => {
    setAppointmentRequested(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  if (appointmentRequested && !formSubmitted) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "white", color: "#800000", padding: "1.5rem" }}>
        <div style={{ width: "100%", maxWidth: "400px", padding: "1.5rem", backgroundColor: "#f5e6e6", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "10px", textAlign: "center" }}>
          <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Patient Details</h1>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <input type="text" defaultValue={userDetails.name} placeholder="Name" required style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid #800000" }} />
            <input type="email" defaultValue={userDetails.email} placeholder="Email" required style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid #800000" }} />
            <input type="tel" defaultValue={userDetails.phone} placeholder="Phone" required style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid #800000" }} />
            <button type="submit" style={{ backgroundColor: "#800000", color: "white", padding: "0.5rem 1rem", borderRadius: "5px", border: "none", cursor: "pointer", transition: "background 0.3s" }}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

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
          Request Appointment
        </button>
      </div>
    </div>
  );
}
