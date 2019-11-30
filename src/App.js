import React from 'react';
import LayoutProvider from './components/Layout'
import Layout from "./components/Layout/Layout";

import './App.css';

function App() {
  return (
    <div className="App">
      <LayoutProvider>
        <Layout/>
      </LayoutProvider>
    </div>
  );
}

export default App;
