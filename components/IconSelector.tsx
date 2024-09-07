import React from 'react';
import Heart from './icons/HeartIcon';
import EarIcon from './icons/EarIcon';
import EyeIcon from './icons/EyeIcon';
import DoctorIcon from './icons/DoctorIcon';
import JointIcon from './icons/JointIcon';
import ToothIcon from './icons/ToothIcon';
import NeurologyIcon from './icons/NeurologyIcon';
import MentalIcon from './icons/MentalIcon';
import OutpatientIcon from './icons/OutpatientIcon';

const IconSelector = ({ icon }: { icon: string }) => {
  switch (icon) {
    case 'heart':
      return <Heart />;
    case 'ear':
      return <EarIcon />;
    case 'eye':
      return <EyeIcon />;
    case 'doctor':
      return <DoctorIcon />;
    case 'joint':
      return <JointIcon />;
    case 'tooth':
      return <ToothIcon />;
    case 'neurology':
      return <NeurologyIcon />;
    case 'mental':
      return <MentalIcon />;
    case 'pediatrics':
      return <OutpatientIcon />;
    case 'body':
      return <OutpatientIcon />;
    case 'oncology':
      return <OutpatientIcon />;
    default:
      break;
  }
};

export default IconSelector;
