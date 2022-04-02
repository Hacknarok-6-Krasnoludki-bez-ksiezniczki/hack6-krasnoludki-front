import React from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import scroll from '../../utils/scroll';

import './styles.css';

function SeeMoreButton({ target, label }) {
  const scrollToTarget = () => scroll(target, 1000, 'easeOutBack', 1);
  return (
    <IconButton className="icon-button see-more-button" aria-label="scroll down" onClick={scrollToTarget} disableRipple>
      {label && <p>{label}</p>}
      <KeyboardArrowDownIcon className="see-more-icon" />
    </IconButton>
  );
}

export default SeeMoreButton;
