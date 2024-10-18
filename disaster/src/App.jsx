import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Incidents } from './Components/Home/Incidents'
import { Layout } from './Components/layout/layout'
import { SecondNav } from './Components/Common/SecondNav'
import { Locations } from './Components/Home/Locations'
import { Activities } from './Components/Home/Activities'

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
          <Route path='/Activities' element={<Activities/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;