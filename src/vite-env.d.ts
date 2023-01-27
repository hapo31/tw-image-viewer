/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TWITTER_API_KEY: string;
  readonly VITE_APP_TWITTER_API_KEY_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMeta;
}
