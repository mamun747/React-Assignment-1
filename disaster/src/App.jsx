import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Incidents } from './Components/Home/Incidents'
import { Layout } from './Components/layout/layout'
import { SecondNav } from './Components/Common/SecondNav'

function App() {
  return (
    <div className='font-onest'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          </Route>
          <Route path='/Dashboard' element={<Layout/>}/>
          <Route path='/incidents' element={<Incidents/>}/>
          <Route path='/secondnav' element={<SecondNav/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;