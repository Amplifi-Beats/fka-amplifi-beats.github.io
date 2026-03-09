import { createClient } from '@sanity/client';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET;
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION || '2026-03-08';

const hasConfig = Boolean(projectId && dataset);

if (!hasConfig && typeof console !== 'undefined') {
  console.warn(
    '[sanity] Missing PUBLIC_SANITY_PROJECT_ID or PUBLIC_SANITY_DATASET. Content queries will return empty results.'
  );
}

export const sanityClient = hasConfig
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true
    })
  : null;
