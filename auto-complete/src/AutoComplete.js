import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Autocomplete from 'react-autocomplete';
import { cityStreetData, renderCities, renderStreets } from './addressData';
import useDebounce from './useDebounce';

function AutoComplete() {
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [neighborhoods, setNeighborhoods] = useState('');
  const debouncedTitle = useDebounce(street, 1000);

  useEffect(() => {
    (async () => {
      const result = await axios.get(
        'http://localhost:3000/routes/addressModel',
        {
          params: {
            city,
            street,
          },
        }
      ); 
      setNeighborhoods(result.data);
    })();
  }, [debouncedTitle]);

  return (
    <>
      <div className='autocomplete-wrapper'>
        <h3>Your Address</h3>
        <Autocomplete
          value={city}
          items={Object.entries(cityStreetData)}
          getItemValue={(item) => item[0]}
          renderMenu={(item) => <div className='dropdown'>{item}</div>}
          shouldItemRender={renderCities}
          renderItem={(item, isHighlighted) => (
            <div
              key={item}
              className={`item ${isHighlighted ? 'selected-item' : ''}`}
            >
              {item[0]}
            </div>
          )}
          onChange={(event, val) => {
            setCity(val);
            setStreet('');
          }}
          onSelect={(val) => {
            setCity(val);
            setStreet('');
          }}
        />
        <Autocomplete
          value={street}
          items={cityStreetData[city] || ['לא נמצאו רחובות']}
          getItemValue={(item) => item}
          renderMenu={(item) => <div className='dropdown'>{item}</div>}
          shouldItemRender={renderStreets}
          renderItem={(item, isHighlighted) => (
            <div
              key={item}
              className={`item ${isHighlighted ? 'selected-item' : ''}`}
            >
              {item}
            </div>
          )}
          onChange={(event, val) => {
            setStreet(val);
          }}
          onSelect={(val) => {
            setStreet(val);
          }}
        />
        <input value={neighborhoods} disabled></input>
      </div>
    </>
  );
}

export default AutoComplete;
