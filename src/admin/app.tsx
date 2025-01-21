import type { StrapiApp } from '@strapi/strapi/admin';

// https://docs.strapi.io/dev-docs/admin-panel-customization/options

export default {
  config: {
    locales: [],
    head: {
      title: 'Medical Solution Technology Admin',
    },
    auth: {
      logo: '/images/logo.png',
    },
    menu: {
      logo: '/images/logo.png',
    },
    theme: {
      light: {
        colors: {
          primary100: '#fcead8',
          primary200: '#f8d1b0',
          primary300: '#f2b07f',
          primary400: '#ec854b',
          primary500: '#e86527',
          primary600: '#d94c1d',
          primary700: '#b4391a',
          buttonPrimary100: '#fcead8',
          buttonPrimary200: '#f8d1b0',
          buttonPrimary300: '#f2b07f',
          buttonPrimary400: '#ec854b',
          buttonPrimary500: '#e86527',
          buttonPrimary600: '#d94c1d',
          buttonPrimary700: '#b4391a',
        }
      }
    },
    translations: {
      en: {
        "Auth.form.welcome.subtitle": "Log in to your MSTI Admin account",
        "Auth.form.welcome.title": "Welcome to MSTI Admin",
      }
    }
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
