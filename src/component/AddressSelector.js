import React, { useState } from 'react';

const AddressSelector = ({ addresses, onAddressSelected }) => {
 const [selectedAddress, setSelectedAddress] = useState(null);

 const handleSelect = (address) => {
    setSelectedAddress(address);
    onAddressSelected(address);
 };

 

 return (
    <div>
      {addresses.map((address, index) => (
        <div key={index} onClick={() => handleSelect(address)}>
          {address.formatted_address}
        </div>
      ))}
    </div>
 );
};

export default AddressSelector;