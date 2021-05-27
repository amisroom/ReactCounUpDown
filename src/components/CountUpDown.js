import React, {useState} from 'react';

const CountUpDown = () => {

const [count, setCount] = useState(0);

const countUp = () => {
  setCount(count + 1);
}

const countDown = () => {
  setCount(count - 1);
}

const countReset =() => {
  setCount(0);
}

return(
  <div>
  <h2>カウント</h2>
  <p>{count}</p>
  <button onClick={countUp}>カウントアップ</button>
  <button onClick={countDown}>カウントダウン</button>
  <button onClick={countReset}>カウントリセット</button>
  </div>
);
};
export default CountUpDown;