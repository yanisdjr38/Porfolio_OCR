import "../styles/_footer.scss";

function Footer() {
  return (
    <div className="footer">
      <ul className="footer-links">
        <li>
          <a
            href="https://github.com/yanisdjr38"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/yanis-djouahra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="mailto:yanis.djouahra38@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mail
          </a>
        </li>
      </ul>
      <p>&copy; 2024 Yanis Djouahra. Tous droits réservés.</p>
    </div>
  );
}

export default Footer;
