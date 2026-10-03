import emailjs from "@emailjs/browser";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { CONTACT_EMAIL } from "../../utils/constants";

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const CAN_USE_EMAILJS =
  Boolean(EMAILJS_PUBLIC_KEY) &&
  Boolean(EMAILJS_SERVICE_ID) &&
  Boolean(EMAILJS_TEMPLATE_ID);

if (CAN_USE_EMAILJS) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

const buildMailtoLink = ({ name, email, message }) => {
  const subject = encodeURIComponent(`Demande de brief - ${name}`);
  const body = encodeURIComponent(
    `Nom: ${name}\nEmail: ${email}\n\nBesoin:\n${message}`,
  );

  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
};

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
  const [status, setStatus] = useState(null); // "loading", "success", "error", "fallback", null

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

    if (!CAN_USE_EMAILJS) {
      window.location.href = buildMailtoLink(formData);
      setStatus("fallback");
      return;
    }

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
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
      window.location.href = buildMailtoLink(formData);
      setStatus("fallback");

      // Masquer le message de fallback après 5 secondes
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    }
  };

  return (
    <div className="contact-form-wrapper">
      <form className="contact-card" onSubmit={handleSubmit}>
        {/* En-tête du formulaire */}
        <div className="card-header">
          <div className="card-title">
            <ContactIcon />
            <span>DEMANDE_DE_BRIEF</span>
          </div>
        </div>

        <p className="form-hint">
          Décrivez votre besoin en quelques lignes. Plus c'est clair, plus je
          peux vous aider vite. Budget estimé ? Délai souhaité ? Dites-moi.
        </p>

        {/* Corps du formulaire */}
        <div className="card-body">
          {/* Messages de feedback (annoncés aux lecteurs d'écran) */}
          <div role="status" aria-live="polite">
            {status === "success" && (
              <div className="feedback-message success-message">
                <FontAwesomeIcon icon={faCircleCheck} /> Message envoyé avec
                succès ! Je reviens vers vous rapidement.
              </div>
            )}

            {status === "error" && (
              <div className="feedback-message error-message">
                <FontAwesomeIcon icon={faCircleXmark} /> Erreur lors de
                l'envoi. Réessaie ou écris-moi directement.
              </div>
            )}

            {status === "fallback" && (
              <div className="feedback-message success-message">
                <FontAwesomeIcon icon={faCircleCheck} /> Votre messagerie
                s'est ouverte. Si rien ne se passe, écrivez-moi directement à{" "}
                {CONTACT_EMAIL}.
              </div>
            )}
          </div>

          {/* Champ Nom */}
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom ou société"
              className={errors.name ? "input-error" : ""}
            />
            <label htmlFor="name" className="form-label">
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
              placeholder="Votre adresse email"
              className={errors.email ? "input-error" : ""}
            />
            <label htmlFor="email" className="form-label">
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
              placeholder="Décrivez votre besoin, votre délai ou votre idée"
              rows="4"
              className={errors.message ? "input-error" : ""}
            />
            <label htmlFor="message" className="form-label">
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
            disabled={status === "loading"}
          >
            {status === "loading" ? "ENVOI..." : "ENVOYER LA DEMANDE"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormContact;
