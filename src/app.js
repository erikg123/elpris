import { useState, useEffect } from 'react';
import { useFetchPrice } from './api';

function App() {
  const { data, isLoading } = useFetchPrice();
  const [currentPrice, setCurrentPrice] = useState('');

  useEffect(() => {
    if (data) {
      setCurrentPrice(
        data.data.viewer.homes[0].currentSubscription.priceInfo.current.total
      );
    }
  }, [data]);

  if (isLoading) {
    return <h1>Laddar...</h1>;
  }

  return <h1>{currentPrice} kr/kWh</h1>;
}

export default App;
