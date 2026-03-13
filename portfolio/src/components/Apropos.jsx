import "../styles/_apropos.scss";

function Apropos() {
  return (
    <section class="apropos">
      <h2>À propos</h2>
      <section class="design-section">
        <div class="timeline">
          <div class="timeline-empty"></div>

          <div class="timeline-middle">
            <div class="timeline-circle"></div>
          </div>
          <div class="timeline-component timeline-content">
            <h3>Communication</h3>
            <p>BTS Communication </p>
            <p>Lycée Ella Fitzgerald - Vienne </p>
          </div>
          <div class="timeline-component timeline-content">
            <h3>Développement Commerciale</h3>
            <p>Bachelor </p>
            <p>ECEMA - Lyon</p>
          </div>
          <div class="timeline-middle">
            <div class="timeline-circle"></div>
          </div>
          <div class="timeline-empty"></div>

          <div class="timeline-empty"></div>

          <div class="timeline-middle">
            <div class="timeline-circle"></div>
          </div>
          <div class=" timeline-component timeline-content">
            <h3>Développement Web</h3>
            <p>Titre professionnel</p>
            <p>OpenClassrooms</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Apropos;
