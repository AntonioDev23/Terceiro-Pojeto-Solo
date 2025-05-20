
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from '@/layouts/MainLayout';

// Pages
import HomePage from '@/pages/HomePage';
import AlgorithmsPage from '@/pages/AlgorithmsPage';
import DataStructuresPage from '@/pages/DataStructuresPage';
import ProgrammingPage from '@/pages/ProgrammingPage';
import NotFoundPage from '@/pages/NotFoundPage';

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="algoritmos" element={<AlgorithmsPage />} />
          <Route path="estruturas-de-dados" element={<DataStructuresPage />} />
          <Route path="programacao" element={<ProgrammingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
