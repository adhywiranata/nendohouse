// @flow

// Convert Product payload image_url to imageUrl (camelcase)
export const convertProductImageUrl = (products: string) => (
  JSON.parse(JSON.stringify(products).replace(/image_url/g, 'imageUrl'))
);

// Convert Product name to a slug
export const StrToSlug = sentence => sentence.toLowerCase().split(' ').join('-');

export const capitalize = (strToCapitalize: string) => strToCapitalize.toUpperCase();
