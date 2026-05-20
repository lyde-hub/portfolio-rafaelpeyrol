import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="contact-divider" />
      <p className="contact-subtitle">Disponible pour une alternance — n'hésitez pas à me contacter.</p>
      <div className="contact-cards">
        <a href="mailto:peyrolrafael@hotmail.com" className="contact-card">
          <span className="contact-icon">✉</span>
          <span className="contact-label">Email</span>
          <span className="contact-value">peyrolrafael@hotmail.com</span>
        </a>
        <a href="tel:+33768384938" className="contact-card">
          <span className="contact-icon">☎</span>
          <span className="contact-label">Téléphone</span>
          <span className="contact-value">+33 7 68 38 49 38</span>
        </a>
      </div>
      <a href="/cv-rafael-peyrol.pdf" download className="cv-button">
        ↓ Télécharger mon CV
      </a>
    </div>
  );
}

export default Contact;