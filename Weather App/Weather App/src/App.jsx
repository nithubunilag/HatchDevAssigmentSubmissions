// src/App.js

import Weather from './weather';

function App() {
  return (
    <div style={styles.app}>
      <Weather />
    </div>
  );
}

const styles = {
  app: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
};

export default App;