import styles from "./page.module.css";
import {
  getHeroSection,
  getFeatureSection,
  getWorkItems,
  WorkItem,
} from "../lib/api";
import Link from "next/link";
import { Metadata } from "next";

// Metadata for SEO
export const metadata: Metadata = {
  title: "Welcome to Our Platform",
  description:
    "Discover amazing features and transform your experience with our innovative solutions",
  openGraph: {
    title: "Welcome to Our Platform",
    description:
      "Discover amazing features and transform your experience with our innovative solutions",
    type: "website",
  },
};

// Force dynamic rendering to ensure fresh data on each request
export const dynamic = "force-dynamic";

export default async function Home() {
  // Fetch data from Contentful with error handling
  let heroData = null;
  let featureData = null;
  let workItems: WorkItem[] = [];

  try {
    [heroData, featureData, workItems] = await Promise.all([
      getHeroSection(),
      getFeatureSection(),
      getWorkItems(),
    ]);
  } catch (error) {
    console.error("Error fetching data from Contentful:", error);
    // Continue with fallback data
  }

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
          <h1 className={styles.heroTitle}>
            {heroData?.title || "Welcome to Our Platform"}
          </h1>
          <p className={styles.heroSubtitle}>
            {heroData?.subtitle ||
              "Discover amazing features and transform your experience with our innovative solutions"}
          </p>
          <button className={styles.ctaButton}>
            {heroData?.ctaText?.fields?.url ? (
              <Link href={heroData.ctaText.fields.url}>
                {heroData.ctaText.fields.text || "Get Started"}
              </Link>
            ) : (
              "Get Started"
            )}
          </button>
        </div>
      </section>

      {/* Two Column Section */}
      <section className={styles.twoColumn}>
        <div className={styles.twoColumnContent}>
          <h2>{featureData?.title || "Why Choose Us"}</h2>
          <p>
            {featureData?.description ||
              "We provide cutting-edge solutions that help businesses grow and succeed in the digital age. Our team of experts is dedicated to delivering the best possible experience."}
          </p>
          <button className={styles.ctaButton}>
            {featureData?.ctaText?.fields?.url ? (
              <Link href={featureData.ctaText.fields.url}>
                {featureData.ctaText.fields.text || "Learn More"}
              </Link>
            ) : (
              "Learn More"
            )}
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
            // Fallback grid items if no Contentful data
            <>
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
            </>
          )}
        </div>
      </section>
    </main>
  );
}
