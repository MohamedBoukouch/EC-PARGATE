import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import ConcoursPage from "./views/ConcoursPage";
import ContactPage from "./views/ContactPage";
import AbouUsPage from "./views/AbouUsPage";
import FaqPage from "./views/FaqPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './style/App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-6 bg-slate-100">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/concours" element={<ConcoursPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AbouUsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
