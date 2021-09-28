import React from 'react';

const HomeClock = () => {
  const date = new Date();
  const month = ['Jan', 'Feb',
    'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct',
    'Nov', 'Dec'];
  const [times, setTimes] = React.useState('');

  React.useEffect(() => {
    const newSeconds = date.getSeconds() < 10
      ? `0${date.getSeconds()}`
      : `${date.getSeconds()}`;

    const newMinutes = date.getMinutes() < 10
      ? `0${date.getMinutes()}`
      : `${date.getMinutes()}`;

    const newHours = date.getHours() < 10
      ? `0${date.getHours()}`
      : `${date.getHours()}`;

    setTimeout(() => {
      setTimes(`${newHours}:
      ${newMinutes}:
      ${newSeconds}`);
    }, 1000);
  }, [times]);

  return (
    <div className="clock p-4">
      <p className="times">{times}</p>
      <p className="date">
        {`${month[date.getMonth()]} 
          ${date.getDate()}, 
          ${date.getFullYear()}`}
      </p>
    </div>
  );
};

export default HomeClock;
