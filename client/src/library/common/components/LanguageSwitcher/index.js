/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// react icon
import { FaGlobeAfrica } from 'react-icons/fa';

// eslint-disable-next-line react/function-component-definition
export default function SelectAutoWidth() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // react i18
  const { i18n } = useTranslation();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <FormControl
        sx={{ m: 1, minWidth: 80 }}
        style={{
          width: '10rem',
          position: 'relative',
          marginLeft: '98%',
          transform: 'translateX(-98%)',
        }}
      >
        <InputLabel
          id="demo-simple-select-outwith-label"
          style={{
            fontSize: '1.7rem',
            // eslint-disable-next-line comma-dangle
            color: 'black',
          }}
        >
          <FaGlobeAfrica /> Lan
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
          style={{ fontSize: '1.7rem', textAlign: 'center' }}
        >
          <MenuItem
            style={{ fontSize: '1.7rem', width: '100%', padding: '1rem' }}
            value={1}
            onClick={() => handleClick('en')}
          >
            English
          </MenuItem>

          <MenuItem
            style={{ fontSize: '1.7rem', width: '100%', padding: '1rem' }}
            value={2}
            onClick={() => handleClick('nep')}
          >
            Nepali
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
