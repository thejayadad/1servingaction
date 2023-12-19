

export const slugify = (str) => {
    return str
      .toLowerCase() // Convert to lowercase
      .replace(/\s+/g, '-') // Replace spaces with dashes
      .replace(/[^\w-]+/g, '') // Remove special characters
      .replace(/--+/g, '-') // Replace consecutive dashes with a single dash
      .replace(/^-+|-+$/g, ''); // Remove leading and trailing dashes
  };  