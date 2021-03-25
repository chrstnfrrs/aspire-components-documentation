const convertPascalToKebab = (str: string): string => {
  const lowercaseStr = str.toLowerCase();

  return `${lowercaseStr.slice(0, 1)}-${lowercaseStr.slice(1)}`;
};

const convertKebabToPascal = (str: string): string => {
  const lowercaseStr = str.toLowerCase();

  return `${lowercaseStr.slice(0, 1).toUpperCase()}${lowercaseStr.slice(2, 3).toUpperCase()}${lowercaseStr.slice(3)}`;
};

const capitalizeString = (str: string): string => {
  const lowercaseStr = str.toLowerCase();

  return `${lowercaseStr.slice(0, 1).toUpperCase()}${lowercaseStr.slice(1)}`;
};

export { convertPascalToKebab, convertKebabToPascal, capitalizeString };
