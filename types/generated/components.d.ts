import type { Schema, Struct } from '@strapi/strapi';

export interface BasicFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_basic_feature_items';
  info: {
    description: 'Represents a single feature item with an icon, title, and description.';
    displayName: 'Feature Item';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
      [
        'Search',
        'Handshake',
        'FileText',
        'Gauge',
        'ShieldCheck',
        'Sparkles',
        'Users',
        'LineChart',
      ]
    >;
    title: Schema.Attribute.String;
  };
}

export interface BasicLink extends Struct.ComponentSchema {
  collectionName: 'components_basic_links';
  info: {
    description: 'A reusable component for links with a label and a URL.';
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface BasicSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_basic_social_links';
  info: {
    description: 'Represents a social media link with a platform and URL.';
    displayName: 'Social Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    platform: Schema.Attribute.Enumeration<
      ['Twitter', 'YouTube', 'LinkedIn', 'GitHub']
    >;
  };
}

export interface BasicStringItem extends Struct.ComponentSchema {
  collectionName: 'components_basic_string_items';
  info: {
    description: 'A simple string item used in lists like bullets, pains, and solutions.';
    displayName: 'String Item';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface BasicTestimonialItem extends Struct.ComponentSchema {
  collectionName: 'components_basic_testimonial_items';
  info: {
    description: 'Represents a single testimonial item with a quote, name, and optional role.';
    displayName: 'Testimonial Item';
  };
  attributes: {
    name: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    role: Schema.Attribute.String;
  };
}

export interface SectionCta extends Struct.ComponentSchema {
  collectionName: 'components_section_ctas';
  info: {
    description: 'Represents the CTA band section of the landing page, defined in components/blocks/cta-band.tsx.';
    displayName: 'Cta';
  };
  attributes: {
    showForm: Schema.Attribute.Boolean;
    subhead: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionFeature extends Struct.ComponentSchema {
  collectionName: 'components_section_features';
  info: {
    description: 'Represents the features section of the landing page, defined in components/blocks/features.tsx.';
    displayName: 'Feature';
  };
  attributes: {
    items: Schema.Attribute.Component<'basic.feature-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionFooter extends Struct.ComponentSchema {
  collectionName: 'components_section_footers';
  info: {
    description: 'Represents the footer section of the landing page, defined in components/blocks/footer.tsx.';
    displayName: 'Footer';
  };
  attributes: {
    copyright: Schema.Attribute.String;
    links: Schema.Attribute.Component<'basic.link', true>;
    social: Schema.Attribute.Component<'basic.social-link', true>;
  };
}

export interface SectionHero extends Struct.ComponentSchema {
  collectionName: 'components_section_heroes';
  info: {
    description: 'Represents the hero section of the landing page, defined in components/blocks/hero.tsx.';
    displayName: 'Hero';
  };
  attributes: {
    bullets: Schema.Attribute.Component<'basic.string-item', true>;
    headline: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    secondaryCta: Schema.Attribute.Component<'basic.link', false>;
    showForm: Schema.Attribute.Boolean;
    subhead: Schema.Attribute.String;
  };
}

export interface SectionProblemSolution extends Struct.ComponentSchema {
  collectionName: 'components_section_problem_solutions';
  info: {
    description: 'Represents the problem-solution section of the landing page, defined in components/blocks/problem-solution.tsx.';
    displayName: 'Problem Solution';
  };
  attributes: {
    pains: Schema.Attribute.Component<'basic.string-item', true>;
    solutions: Schema.Attribute.Component<'basic.string-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_section_testimonials';
  info: {
    description: 'Represents the testimonials section of the landing page, defined in components/blocks/testimonials.tsx.';
    displayName: 'Testimonial';
  };
  attributes: {
    items: Schema.Attribute.Component<'basic.testimonial-item', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'basic.feature-item': BasicFeatureItem;
      'basic.link': BasicLink;
      'basic.social-link': BasicSocialLink;
      'basic.string-item': BasicStringItem;
      'basic.testimonial-item': BasicTestimonialItem;
      'section.cta': SectionCta;
      'section.feature': SectionFeature;
      'section.footer': SectionFooter;
      'section.hero': SectionHero;
      'section.problem-solution': SectionProblemSolution;
      'section.testimonial': SectionTestimonial;
    }
  }
}
