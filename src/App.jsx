import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import { SupervisionPage, TherapyPage, ConsultingPage } from './pages/ServicePages';
import ResourcesPage from './pages/ResourcesPage';
import SupervisionFitPage from './pages/SupervisionFitPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/supervision" element={<SupervisionPage />} />
          <Route path="/therapy" element={<TherapyPage />} />
          <Route path="/consulting" element={<ConsultingPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/supervision-fit" element={<SupervisionFitPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
