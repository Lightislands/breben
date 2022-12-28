import React from 'react';
import Chip from '@mui/material/Chip';

let counter = 0;

const TechnologiesChips = ({ items }) => {

  return (
    <div>
      {items.map((technology) => (
          <Chip
            key={counter++}
            sx={{
              marginRight: '5px',
              fontSize: '10px'
            }}
            className='technologies-chip'
            label={technology}
          />
        )
      )}
    </div>
  );
}

export default TechnologiesChips;