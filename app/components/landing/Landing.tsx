import { landingCopy } from "./copy";
import ParticleOverlay from "./ParticleOverlay";
import "./landing.css";

const HERO_IMAGE = "/landing/strv-system-lattice-long-purple-green.png";

export default function Landing() {
  const copy = landingCopy;

  return (
    <main className="landing-page" aria-labelledby="landing-title">
      <img className="landing-visual" src={HERO_IMAGE} alt={copy.visualAlt} />
      <ParticleOverlay />
      <div className="landing-wash" aria-hidden="true" />

      <header className="landing-header">
        <a className="landing-brand" href="/">
          <img src="/strv-white.svg" alt="" aria-hidden="true" />
          {copy.brand}
        </a>
      </header>

      <section className="landing-content">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1
          id="landing-title"
          aria-label={`${copy.headlineStart} ${copy.headlineMiddle} ${copy.headlineAccent}`}
        >
          {copy.headlineStart}
          <br />
          {copy.headlineMiddle}
          <br />
          <span>{copy.headlineAccent}</span>
        </h1>
        <p className="lede">{copy.lede}</p>
      </section>

      <footer className="landing-footer">
        <span>{copy.invitation}</span>
        <span>{copy.copyright}</span>
      </footer>
    </main>
  );
}
