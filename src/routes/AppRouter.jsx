import { Routes, Route } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'

import { HomePage } from '../pages/HomePage'
import { AboutPage } from '../pages/AboutPage'
import { BranchesPage } from '../pages/BranchesPage'
import { PromotionsPage } from '../pages/PromotionsPage'
import { NewsPage } from '../pages/NewsPage'
import { VacanciesPage } from '../pages/VacanciesPage'
import { ContactsPage } from '../pages/ContactsPage'

export function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/branches" element={<BranchesPage />} />
        <Route path="/promotions" element={<PromotionsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/vacancies" element={<VacanciesPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  )
}
