/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';

export default function Grouped() {
  const options = addressDB.map((option) => {
    const section = option.section;
    return {
      section,
      ...option,
    };
  });

  return (
    <Autocomplete
      id='grouped-demo'
      options={options.sort((a, b) => -b.name[0].localeCompare(a.name[0]))}
      groupBy={(option) => option.section}
      getOptionLabel={(option) => option.name}
      style={{ width: 350, margin: 'auto' }}
      renderInput={(params) => (
        <TextField
          {...params}
          label='בחר אזור \ שכונה \ רחוב'
          variant='outlined'
        />
      )}
    />
  );
}

const addressDB = [
  { section: 'עיר', name: 'חיפה' },
  { section: 'שכונה', name: 'נווה אפק' },
  { section: 'רחוב', name: 'פולג' },
  { section: 'עיר', name: 'פתח תקווה' },
  { section: 'עיר', name: 'תל אביב' },
  { section: 'שכונה', name: 'נווה אפק' },
  { section: 'עיר', name: 'טבריה' },
  { section: 'שכונה', name: 'גבעת טל' },
  { section: 'רחוב', name: 'פולג' },
  { section: 'רחוב', name: 'תל אביב' },
  { section: 'רחוב', name: 'אבן גבירול' },
  { section: 'רחוב', name: 'שאול המלך' },
  { section: 'שכונה', name: 'התקוה' },
  { section: 'רחוב', name: 'רביבים' },
  { section: 'רחוב', name: 'נווה אפק' },
];
