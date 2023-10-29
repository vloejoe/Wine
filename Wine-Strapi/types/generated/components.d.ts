import type { Schema, Attribute } from '@strapi/strapi';

export interface AdresseType extends Schema.Component {
  collectionName: 'components_adresse_types';
  info: {
    displayName: 'type';
    icon: 'apps';
    description: '';
  };
  attributes: {
    icon: Attribute.Media;
    text: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'adresse.type': AdresseType;
    }
  }
}
