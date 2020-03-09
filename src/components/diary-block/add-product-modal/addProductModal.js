import React from 'react';

const addProductModal = ({ children, showModal }) => {
	console.log();
	return (
  <>
		<button type="button" onClick={showModal}>close</button>
    {children}
  </>
)};

export default addProductModal;
