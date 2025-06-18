import client from "./contentful";

export interface HeroSection {
  title: string;
  subtitle: string;
  ctaText: any;
  backgroundImage?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
}

export interface FeatureSection {
  title: string;
  description: string;
  ctaText: any;
  image?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
}

export interface WorkItem {
  title: string;
  image?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
}

// Type for Contentful asset
interface ContentfulAsset {
  fields: {
    file: {
      url: string;
    };
  };
}

// Fetch hero section data
export async function getHeroSection(): Promise<HeroSection | null> {
  try {
    const response = await client.getEntries({
      content_type: "heroComponent",
      limit: 1,
    });

    if (response.items.length > 0) {
      const item = response.items[0];

      return {
        title: item.fields.heading as string,
        subtitle: item.fields.subtitle as string,
        ctaText: item.fields.cta as string,
        backgroundImage: item.fields.image as ContentfulAsset,
      };
    }
    return null;
  } catch (error) {
    console.error("Error fetching hero section:", error);
    return null;
  }
}

// Fetch feature section data
export async function getFeatureSection(): Promise<FeatureSection | null> {
  try {
    const response = await client.getEntries({
      content_type: "twoColumnRow",
      limit: 1,
    });

    if (response.items.length > 0) {
      const item = response.items[0];
      return {
        title: item.fields.heading as string,
        description: item.fields.subtitle as string,
        ctaText: item.fields.cta as string,
        image: item.fields.image as ContentfulAsset,
      };
    }
    return null;
  } catch (error) {
    console.error("Error fetching feature section:", error);
    return null;
  }
}

// Fetch work items
export async function getWorkItems(): Promise<WorkItem[]> {
  try {
    const response = await client.getEntries({
      content_type: "layoutGrid",
      limit: 4,
    });

    return response.items.map((item) => ({
      title: item.fields.entryTitle as string,
      image: item.fields.images as ContentfulAsset,
    }));
  } catch (error) {
    console.error("Error fetching work items:", error);
    return [];
  }
}
