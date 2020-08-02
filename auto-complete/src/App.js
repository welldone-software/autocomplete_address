import React, { useState, useEffect } from 'react';
import AutoComplete from './AutoComplete';
import AutoCompleteV2 from './AutoCompleteV2';
import './App.css';
const App = () => {
  return (
    <>
      <AutoComplete />
      <AutoCompleteV2 />
    </>
  );
};

export default App;
