import styles from "./page.module.css";
import { getHeroSection, getFeatureSection, getWorkItems } from "../lib/api";
import Link from "next/link";

export default async function Home() {
  // Fetch data from Contentful
  const [heroData, featureData, workItems] = await Promise.all([
    getHeroSection(),
    getFeatureSection(),
    getWorkItems(),
  ]);

  // console.log(
  //   "-------------------------------------heroData-------------------------------------"
  // );
  // console.log(heroData);
  // console.log(
  //   "-------------------------------------featureData-------------------------------------"
  // );
  // console.log(featureData);
  // console.log(
  //   "-------------------------------------workItems-------------------------------------"
  // );
  // console.log(workItems);

  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div
          className={styles.heroBackground}
          style={{
            backgroundImage: heroData?.backgroundImage
              ? `url(https:${heroData.backgroundImage.fields.file.url})`
              : "url('/hero-bg.jpg')",
          }}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{heroData?.title}</h1>
          <p className={styles.heroSubtitle}>{heroData?.subtitle}</p>
          <button className={styles.ctaButton}>
            <Link href={heroData?.ctaText.fields.url}>
              {heroData?.ctaText.fields.text}
            </Link>
          </button>
        </div>
      </section>

      {/* Two Column Section */}
      <section className={styles.twoColumn}>
        <div className={styles.twoColumnContent}>
          <h2>{featureData?.title}</h2>
          <p>{featureData?.description}</p>
          <button className={styles.ctaButton}>
            <Link href={featureData?.ctaText.fields.url}>
              {featureData?.ctaText.fields.text}
            </Link>
          </button>
        </div>
        <div
          className={styles.twoColumnImage}
          style={{
            backgroundImage: featureData?.image
              ? `url(https:${featureData.image.fields.file.url})`
              : "url('/feature-image.jpg')",
          }}
        />
      </section>

      {/* Image Grid Section */}
      <section className={styles.imageGrid}>
        <h2>Gallery</h2>
        <div className={styles.gridContainer}>
          {workItems[0]?.image && Array.isArray(workItems[0].image) ? (
            workItems[0].image.map(
              (item: { fields: { file: { url: string } } }, index: number) => (
                <div
                  key={index}
                  className={styles.gridItem}
                  style={{
                    backgroundImage: `url(https:${item.fields.file.url})`,
                  }}
                />
              )
            )
          ) : (
            // Fallback if no images or wrong structure
            <div
              className={styles.gridItem}
              style={{ backgroundImage: "url('/grid-1.jpg')" }}
            />
          )}
        </div>
      </section>
    </main>
  );
}
