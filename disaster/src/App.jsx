import './App.css'
import { CommonNav } from './Components/Common/CommonNav'
import { Cards } from './Components/Home/Cards'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Incidents } from './Components/Home/Incidents'

function App() {
  return (
    <div className='font-onest'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
            <CommonNav/>
            <Cards/>
            </>
          }>
          </Route>
          <Route path='/incidents' element={<Incidents/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
