"use client"
import React, { KeyboardEventHandler, useState } from 'react';
import CreatableSelect from 'react-select/creatable';

const components = {
  DropdownIndicator: null,
};


const createOption = (label) => ({
  label,
  value: label,
});

function CustomCreatableSelect({ parentCallBack, ...props }) {
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState([]);
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleKeyDown = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        var valueArr = value.map((item) => { return item.label});
        if(valueArr.includes(inputValue)) {
          setIsDuplicate(true)
          event.preventDefault();
        } else {
          setValue((prev) => [...prev, createOption(inputValue)]);
          setInputValue('');
          setIsDuplicate(false)
          parentCallBack(value);
          event.preventDefault();
        }
    }

  };

  return (
    <>
    <CreatableSelect
      components={components}
      inputValue={inputValue}
      isClearable
      isMulti
      menuIsOpen={false}
      onChange={(newValue) => setValue(newValue)}
      onInputChange={(newValue) => setInputValue(newValue)}
      onKeyDown={handleKeyDown}
      placeholder="Type something and press enter..."
      value={value}
      className="select select__creatable"
      {...props}
      classNamePrefix="select"
    />
    {isDuplicate && <span className="error">Bu plaka daha önce kullanılmış.</span>}
    </>
  );
};

export default CustomCreatableSelect