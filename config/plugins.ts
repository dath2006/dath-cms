export default ({ env }) => ({
  "cloudinary-media-library": {
    enabled: true,
    config: {
      cloudName: env("CLOUDINARY_NAME"),
      apiKey: env("CLOUDINARY_KEY"),
      encryptionKey: env("CLOUDINARY_ENCRYPTION_KEY"),
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  "users-permissions": {
    config: {
      providers: {
        google: {
          enabled: true,
          clientId: env("GOOGLE_CLIENT_ID"),
          clientSecret: env("GOOGLE_CLIENT_SECRET"),
          redirectUri: `${env("PUBLIC_URL", "http://localhost:1337")}/api/connect/google/callback`,
        },
      },
    },
  },
});
