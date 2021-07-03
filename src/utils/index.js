import slugify from 'slugify';

// retourne le slug d'un titre
export const slugifyTitle = (title) => {
  const slug = slugify(
    title,
    {
      // on veut tout en minuscules
      lower: false
      ,
    },
  );

  return slug;
};

/**
 * Get the cam having a given slug
 * @param {String} slug The slug to look for
 * @param {Array} camList The camList into which searching
 * @return {Object} The camwhich has been found (or undefined)
 */
export const getCamBySlug = (slug, camList) => {
  console.log(camList);
  const cam = camList.find((cam) => {
    // on calcule le slug de la recette courante
    const currentCamSlug = slugifyTitle(cam.title);

    // on compare le slug de la recette avec celui obtenu dans l'URL
    return currentCamSlug === slug;
  });

  return cam;
};
