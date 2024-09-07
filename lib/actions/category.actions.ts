import { Categories } from '@/constants';

export const getCategories = () => {
  return Categories;
};

export const getSpecialty = (name: string) => {
  return Categories.find(
    (category) => category.name.toLowerCase() === name.toLowerCase()
  );
};
