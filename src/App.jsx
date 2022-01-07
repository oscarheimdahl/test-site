import React, { useState } from 'react';

const App = () => {
  const [state, setState] = useState(false);
  return (
    <button style={{ width: '300px' }} onClick={() => setState(!state)}>
      {state ? 'Hello' : 'Good Bye'} World!
    </button>
  );
};

export default App;
