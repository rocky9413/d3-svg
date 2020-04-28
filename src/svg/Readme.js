import React, { useState, useEffect } from 'react';

const Readme = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/readme')
      .then(res => res.json())
      .then(({ data }) => {
        setData(data);
      })
      .catch(e => console.error(e));
  }, []);

  return data ? <div>{data}</div> : null;
};

export default Readme;
