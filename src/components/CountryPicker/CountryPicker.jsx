import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <div style={{alignItems:"center",justifyContent:"space-evenly", display:"flex"}}>
    <FormControl style={{fontFamily:"Krona One, sans-serif"}} className={styles.formControl}>
      <NativeSelect defaultValue="" style={{fontFamily:"Krona One, sans-serif"}} onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="" style={{}}>Select Country...</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
    </div>
  );
};

export default Countries;
