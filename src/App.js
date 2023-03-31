import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [get, setGet] = useState("");
  const [cost, setCost] = useState(1);

  const onChange = (event) => {
    setCost(event.target.value);
    setGet(1);
  };

  const handleInput = (event) => {
    setGet(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>💰 The coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>loading...</strong>
      ) : (
        <select onChange={onChange}>
          <option>👉 Select coins!</option>
          {coins.map((coin, index) => (
            <option key={index} value={coin.quotes.USD.price}>
              💵 {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <br />
      <br />
      <br />
      <hr />
      <br />
      <h2>Please enter the amount ⬇️</h2>

      <input
        onChange={handleInput}
        value={get}
        type="number"
        placeholder="dollor"
        autoFocus
        required
      />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <h1>
        You can buy <br />
        <br />
        💵 ({get / cost}) coins
      </h1>
    </div>
  );
}

export default App;
