import { useState } from "react";

/**
 * Composant FormContact - Formulaire de contact interactif
 * Gère la soumission du formulaire avec validation et gestion d'état
 * @component
 * @returns {JSX.Element} Formulaire de contact avec design "glitch"
 */
function FormContact() {
  // État du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  /**
   * Gère les changements d'input
   * Met à jour l'état avec la valeur saisie
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  /**
   * Gère la soumission du formulaire
   * TODO: Implémenter l'envoi vers le serveur (fetch/axios)
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données du formulaire:", formData);
    // À connecter avec votre API backend
    setFormData({ name: "", email: "", message: "" });
  };

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
          {/* Champ Nom */}
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Entrer votre nom"
              aria-label="Nom complet"
            />
            <label htmlFor="name" className="form-label" data-text="NOM">
              NOM
            </label>
          </div>

          {/* Champ Email */}
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Entrer votre email"
              aria-label="Adresse email"
            />
            <label htmlFor="email" className="form-label" data-text="EMAIL">
              EMAIL
            </label>
          </div>

          {/* Champ Message */}
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Ecrire votre message"
              rows="4"
              aria-label="Message"
            />
            <label htmlFor="message" className="form-label" data-text="MESSAGE">
              MESSAGE
            </label>
          </div>

          {/* Bouton d'envoi */}
          <button type="submit" className="submit-btn" data-text="ENVOYER">
            <span className="btn-text">ENVOYER</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormContact;
