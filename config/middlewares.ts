export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::body',
    config: {
      jsonLimit: '30mb',
      formLimit: '30mb',
      textLimit: '30mb',
      formidable: {
        maxFileSize: 100 * 1024 * 1024  // 100mb
      }
    }
  }
];
