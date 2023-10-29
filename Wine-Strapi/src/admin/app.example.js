import favicon from "./src/extensions/favicon.png";

const config = {
  locales: [
    // 'ar',
    "fr",
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  translations: {
    fr: {
      "Auth.form.email.label": "test",
      Users: "Utilisateurs",
      City: "CITY (FRENCH)",
      // Customize the label of the Content Manager table.
      Id: "ID french",
    },
  },
  head: {
    favicon: favicon,
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
