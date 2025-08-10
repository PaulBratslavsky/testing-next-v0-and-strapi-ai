/**
 * `global-page-populate` middleware
 */

import type { Core } from "@strapi/strapi";

const populate = {
  blocks: {
    on: {
      "section.hero": {
        populate: {
          bullets: true,
          secondaryCta: true,
          image: {
            fields: ["alternativeText", "url"],
          },
        },
      },
      "section.problem-solution": {
        populate: {
          pains: true,
          solutions: true,
        }
      },
      "section.feature": {
        populate: {
          items: true,
        }
      },
      "section.testimonial": {
        populate:{
          items: true,
        }
      },
      "section.cta": true,
      "section.footer": {
        populate: {
          links: true,
          social: true,
        }
      }
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In page-populate middleware.");
    ctx.query.populate = populate;
    await next();
  };
};