import React, { useState, useEffect } from 'react';
// import Markdown from 'markdown-to-jsx';

const Readme = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/readme')
      .then(res => res.json())
      .then(({ data }) => setData(data))
      .catch(e => console.error(e));
  }, []);

  // use markdown-to-jsx if needed to display

  return (
    <div>
      {data}
      {/* <Markdown>{data}</Markdown> */}
    </div>
  );
};

export default Readme;
