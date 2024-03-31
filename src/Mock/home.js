import React, { useState, useEffect } from 'react';

function DataComponent() {
  const [inputText, setInputText] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${numbers[0]}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProductDetails(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching product details');
        setProductDetails(null);
      }
    };

    if (numbers.length > 0) {
      fetchData();
    }
  }, [numbers]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNumbers = inputText.split(' ').map(num => parseInt(num, 10));
    setNumbers(newNumbers.filter(num => !isNaN(num)));
    setInputText('');
  };

  return (
    <div>
      <h1>Enter Numbers</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter numbers separated by spaces"
          value={inputText}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
      {productDetails && (
        <div>
          <h2>Product Details:</h2>
          <p>Title: {productDetails.title}</p>
          <p>Price: ${productDetails.price}</p>
          <p>Description: {productDetails.description}</p>
        </div>
      )}
    </div>
  );
}

export default DataComponent;

