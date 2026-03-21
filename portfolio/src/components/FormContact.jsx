import "../styles/_formContact.scss";

function FormContact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // À implémenter avec votre mentor
    console.log("Formulaire prêt à être intégré");
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
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Entrer votre nom"
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
              rows="4"
            />
            <label htmlFor="message" className="form-label" data-text="MESSAGE">
              MESSAGE
            </label>
          </div>

          <button type="submit" className="submit-btn" data-text="ENVOYER">
            <span className="btn-text">ENVOYER</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormContact;
