import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { 
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";
import Counties from "./routes/counties";
import County from "./routes/county";



ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} >
        <Route path="counties" element={<Counties />}>
          <Route path=":countyId" element={<County />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>S
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
