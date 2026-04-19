import emailjs from "@emailjs/browser";
import { useState } from "react";
emailjs.init("-AapzA3unXxaBBTHA");

/**
 * Icône de contact SVG
 */
const ContactIcon = () => (
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
    aria-hidden="true"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
    <path d="M12 11.5a3 3 0 0 0 -3 2.824v1.176a3 3 0 0 0 6 0v-1.176a3 3 0 0 0 -3 -2.824z" />
  </svg>
);

/**
 * Composant FormContact - Formulaire de contact interactif
 * Gère la soumission avec validation client et feedback utilisateur
 * @component
 */
function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // "loading", "success", "error", null

  /**
   * Valide les données du formulaire
   * @returns {Object} Objet d'erreurs
   */
  const validateForm = () => {
    const newErrors = {};

    // Validation du nom
    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Le nom doit contenir au moins 2 caractères";
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide";
    }

    // Validation du message
    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
    }

    return newErrors;
  };

  /**
   * Gère les changements d'input
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Effacer l'erreur pour ce champ quand l'utilisateur commence à taper
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  /**
   * Gère la soumission du formulaire
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Valider le formulaire
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("loading");

    try {
      await emailjs.send("service_sc45q1s", "template_xa6mua2", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Masquer le message de succès après 5 secondes
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");

      // Masquer le message d'erreur après 5 secondes
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    }
  };

  return (
    <div className="glitch-form-wrapper">
      <form className="glitch-card" onSubmit={handleSubmit}>
        {/* En-tête du formulaire */}
        <div className="card-header">
          <div className="card-title">
            <ContactIcon />
            <span>FORMULAIRE_DE_CONTACT</span>
          </div>
        </div>

        {/* Corps du formulaire */}
        <div className="card-body">
          {/* Message de succès */}
          {status === "success" && (
            <div className="feedback-message success-message">
              ✓ Message envoyé avec succès ! Je te répondrai bientôt.
            </div>
          )}

          {/* Message d'erreur d'envoi */}
          {status === "error" && (
            <div className="feedback-message error-message">
              ✗ Erreur lors de l'envoi. Réessaie s'il te plaît.
            </div>
          )}

          {/* Champ Nom */}
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Entrer votre nom"
              aria-label="Nom complet"
              className={errors.name ? "input-error" : ""}
            />
            <label htmlFor="name" className="form-label" data-text="NOM">
              NOM
            </label>
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          {/* Champ Email */}
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Entrer votre email"
              aria-label="Adresse email"
              className={errors.email ? "input-error" : ""}
            />
            <label htmlFor="email" className="form-label" data-text="EMAIL">
              EMAIL
            </label>
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          {/* Champ Message */}
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Écrivez votre message"
              rows="4"
              aria-label="Message"
              className={errors.message ? "input-error" : ""}
            />
            <label htmlFor="message" className="form-label" data-text="MESSAGE">
              MESSAGE
            </label>
            {errors.message && (
              <span className="error-text">{errors.message}</span>
            )}
          </div>

          {/* Bouton d'envoi */}
          <button
            type="submit"
            className="submit-btn"
            data-text={status === "loading" ? "ENVOI..." : "ENVOYER"}
            disabled={status === "loading"}
          >
            <span className="btn-text">
              {status === "loading" ? "ENVOI..." : "ENVOYER"}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormContact;
