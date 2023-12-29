// Cryptolist.js
import { useState, useEffect } from "react";
import "./Crypto.css";

type Crypto = {
  id: string;
  name: string;
  current_price: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
};

export default function Cryptolist() {
  const [cryptoData, setCryptoData] = useState<Crypto[]>([]);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20&page=1"
        );
        if (!response.ok) {
          setFetchError(true);
        } else {
          const data = await response.json();
          setCryptoData(data);
        }
      } catch (error) {
        setFetchError(true);
      }
    };
    fetchData();
  }, []);

  if (fetchError) {
    return null;
  }

  return (
    <div className="crypto-list-container">
      <div className="marquee-container">
        {cryptoData.map((crypto: Crypto) => (
          <div key={crypto.id} className="crypto-item">
            <div className="crypto-name">{crypto.name}</div>
            {/* <div
              className={`crypto-price ${
                crypto.price_change_percentage_24h < 0 ? "negative" : "positive"
              }`}
            >
              ${crypto.current_price.toFixed(2)}
            </div> */}
            <div
              className={`crypto-change ${
                crypto.price_change_percentage_24h < 0 ? "negative" : "positive"
              }`}
            >
              {crypto.price_change_24h.toFixed(2)} (
              {crypto.price_change_percentage_24h.toFixed(2)}%)
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}