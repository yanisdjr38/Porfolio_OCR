import { useState } from "react";
import "../styles/_formContact.scss";

function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    loading: false,
    error: null,
    success: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatus({ ...status, error: "Le nom est requis" });
      return false;
    }
    if (!formData.email.trim()) {
      setStatus({ ...status, error: "L'email est requis" });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ ...status, error: "Email invalide" });
      return false;
    }
    if (!formData.message.trim()) {
      setStatus({ ...status, error: "Le message est requis" });
      return false;
    }
    if (formData.message.trim().length < 10) {
      setStatus({
        ...status,
        error: "Le message doit contenir au moins 10 caractères",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus({ ...status, loading: true, error: null });

    try {
      // Simulation d'un envoi - À remplacer par votre backend
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // if (!response.ok) throw new Error('Erreur lors de l\'envoi');

      // Simulation
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus({
        submitted: true,
        loading: false,
        error: null,
        success: true,
      });

      setFormData({ name: "", email: "", message: "" });

      // Réinitialiser le message après 5 secondes
      setTimeout(() => {
        setStatus({
          submitted: false,
          loading: false,
          error: null,
          success: false,
          error,
        });
      }, 5000);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setStatus({
        submitted: true,
        loading: false,
        error: "Une erreur est survenue. Veuillez réessayer.",
        success: false,
      });
    }
  };

  return (
    <div className="glitch-form-wrapper">
      <form className="glitch-card" onSubmit={handleSubmit}>
        <div className="card-header">
          <div className="card-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              <path d="M12 11.5a3 3 0 0 0 -3 2.824v1.176a3 3 0 0 0 6 0v-1.176a3 3 0 0 0 -3 -2.824z" />
            </svg>
            <span>FORMULAIRE_DE_CONTACT</span>
          </div>
          <div className="card-dots">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="card-body">
          {status.submitted && (
            <div
              className={`form-message ${status.success ? "success" : "error"}`}
            >
              {status.success
                ? "✓ Message envoyé avec succès!"
                : `✗ ${status.error}`}
            </div>
          )}

          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Entrer votre nom"
              value={formData.name}
              onChange={handleChange}
              disabled={status.loading}
            />
            <label htmlFor="name" className="form-label" data-text="NOM">
              NOM
            </label>
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Entrer votre email"
              value={formData.email}
              onChange={handleChange}
              disabled={status.loading}
            />
            <label htmlFor="email" className="form-label" data-text="EMAIL">
              EMAIL
            </label>
          </div>

          <div className="form-group">
            <textarea
              id="message"
              name="message"
              required
              placeholder="Ecrire votre message"
              value={formData.message}
              onChange={handleChange}
              disabled={status.loading}
              rows="4"
            />
            <label htmlFor="message" className="form-label" data-text="MESSAGE">
              MESSAGE
            </label>
          </div>

          <button
            data-text={status.loading ? "ENVOI..." : "ENVOYER"}
            type="submit"
            className={`submit-btn ${status.loading ? "loading" : ""}`}
            disabled={status.loading}
          >
            <span className="btn-text">
              {status.loading ? "ENVOI..." : "ENVOYER"}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormContact;
