import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to Our Platform</h1>
          <p className={styles.heroSubtitle}>
            Discover amazing features and transform your experience with our
            innovative solutions
          </p>
          <button className={styles.ctaButton}>Get Started</button>
        </div>
      </section>

      {/* Two Column Section */}
      <section className={styles.twoColumn}>
        <div className={styles.twoColumnContent}>
          <h2>Why Choose Us</h2>
          <p>
            We provide cutting-edge solutions that help businesses grow and
            succeed in the digital age. Our team of experts is dedicated to
            delivering the best possible experience.
          </p>
          <button className={styles.ctaButton}>Learn More</button>
        </div>
        <div
          className={styles.twoColumnImage}
          style={{ backgroundImage: "url('/feature-image.jpg')" }}
        />
      </section>

      {/* Image Grid Section */}
      <section className={styles.imageGrid}>
        <h2>Our Work</h2>
        <div className={styles.gridContainer}>
          <div
            className={styles.gridItem}
            style={{ backgroundImage: "url('/grid-1.jpg')" }}
          />
          <div
            className={styles.gridItem}
            style={{ backgroundImage: "url('/grid-2.jpg')" }}
          />
          <div
            className={styles.gridItem}
            style={{ backgroundImage: "url('/grid-3.jpg')" }}
          />
          <div
            className={styles.gridItem}
            style={{ backgroundImage: "url('/grid-4.jpg')" }}
          />
        </div>
      </section>
    </main>
  );
}
