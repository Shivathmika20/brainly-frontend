import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import SharedContent from './pages/SharedContent'
function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='api/share/:sharedLink' element={<SharedContent />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
