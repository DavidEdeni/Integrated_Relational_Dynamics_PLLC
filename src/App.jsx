import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SupervisionPage from './pages/SupervisionPage';
import TherapyPage from './pages/TherapyPage';
import ConsultingPage from './pages/ConsultingPage';
import ResourcesPage from './pages/ResourcesPage';
import SupervisionFitPage from './pages/SupervisionFitPage';
import PoliciesPage from './pages/PoliciesPage';
import FeesPage from './pages/FeesPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/supervision" element={<SupervisionPage />} />
          <Route path="/therapy" element={<TherapyPage />} />
          <Route path="/consulting" element={<ConsultingPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/supervision-fit" element={<SupervisionFitPage />} />
          <Route path="/policies" element={<PoliciesPage />} />
          <Route path="/fees" element={<FeesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
