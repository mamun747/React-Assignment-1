import './App.css'
// import { MobileNav } from './Components/Common/MobileNav'
import { CommonNav } from './Components/Common/CommonNav'
import { Cards } from './Components/Home/Cards'

function App() {

  return (
    <>
    <div className='font-onest'>
      {/* <MobileNav/> */}
    <CommonNav/>
    <Cards/>
    </div>
    </>
  )
}

export default App