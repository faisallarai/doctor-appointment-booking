import { Physicians } from '@/constants';

export const getPhysicians = () => {
  return Physicians;
};

export const getPhysiciansBySpecialty = (name: string) => {
  return Physicians.filter((physician) =>
    physician.category.toLowerCase().includes(name?.toLowerCase())
  );
};

export const getPhysicianById = (id: string) => {
  return Physicians?.find((physician) => physician.id === id);
};
