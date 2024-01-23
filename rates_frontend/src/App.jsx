import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
import ExchangeRates from './pages/ExchangeRates'
import FuelPrices from './pages/FuelPrices'
import Businesses from './pages/Businesses'
import Converter from './pages/Converter'
import Banks from './pages/Banks'
import ForexBureaus from './pages/ForexBureaus'
import Remittance from './pages/Remittance'
import OnlinePayments from './pages/OnlinePayments'
import Crypto from './pages/Crypto'
import Fintechs from './pages/Fintechs'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/exchangerates' element={<ExchangeRates />}/>
      <Route path='/fuelprices' element={<FuelPrices />}/>
      <Route path='/businesses' element={<Businesses />}/>
      <Route path='/converter' element={<Converter />}/>
      <Route path='/banks' element={<Banks />}/>
      <Route path='/forex-bureaus' element={<ForexBureaus />}/>
      <Route path='/remittance' element={<Remittance />}/>
      <Route path='/online-payments' element={<OnlinePayments />}/>
      <Route path='/crypto' element={<Crypto />}/>
      <Route path='/fintechs' element={<Fintechs />}/>
      <Route path='*' element={<NotFound />}/>
    </Route>
  )
)


function App() {
  return <RouterProvider router={router}/>
}


export default App




