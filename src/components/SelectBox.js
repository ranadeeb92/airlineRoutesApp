import React from 'react';

const SelectBox = ({options, defaultOption, label, onSelect, value}) => {
  
  const displayedOptions = options.map(({key, value, active}) => {
    return <option key={key} value={key} disabled={!active}>{value}</option>
  });

  return (
    <>
      <label>{label}</label>
      <select onChange={(e)=>onSelect(e.target.value)} value={value}>
        <option value="all">{defaultOption}</option>
        {displayedOptions}
      </select>
    </>
  )
}

export default SelectBox;