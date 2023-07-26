import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Index'
import { DefaultLayout } from './layout/Index'
import { Checkout } from './pages/Checkout/Index'
import { Success } from './pages/Success/Index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
