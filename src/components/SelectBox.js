import React, {useState} from 'react';

const SelectBox = ({options, defaultOption, label}) => {
  const displayedOptions = options.map(option => {
    return <option key={option.key} value={option.key}>{option.value}</option>
  });

  return (
    <>
      <label>{label}</label>
      <select>
        <option value={undefined}>{defaultOption}</option>
        {displayedOptions}
      </select>
    </>
  )
}

export default SelectBox;