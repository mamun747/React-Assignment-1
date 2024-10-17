import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Incidents } from './Components/Home/Incidents'
import { Layout } from './Components/layout/layout'
import { SecondNav } from './Components/Common/SecondNav'
import { Locations } from './Components/Home/Locations'

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
          <Route path='/Locations' element={<Locations/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;