// Convert Product payload image_url to imageUrl (camelcase)
export const convertProductImageUrl = products => (
  JSON.parse(JSON.stringify(products).replace(/image_url/g, 'imageUrl'))
);

export const capitalize = strToCapitalize => strToCapitalize.toUpperCase();
