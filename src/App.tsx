import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CountryList from "./components/CountryList";
import Form from "./components/Form";
import { Header } from "./components/Header";
import SingleCountry from "./components/SingleCountry";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CountryList />} />
          <Route path="/form" element={<Form />} />
          <Route path="/country/:name" element={<SingleCountry />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
