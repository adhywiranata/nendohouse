// @flow

// Convert Product payload image_url to imageUrl (camelcase)
export const convertProductImageUrl = (products: string) => (
  JSON.parse(JSON.stringify(products).replace(/image_url/g, 'imageUrl'))
);

export const capitalize = (strToCapitalize: string) => strToCapitalize.toUpperCase();
