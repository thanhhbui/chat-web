import { Routes, Route, Navigate } from 'react-router-dom'
import Main from '~/pages/Main/_id'
import Auth from '~/pages/Auth/Auth'

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <Navigate to='/mains/:mainId' replace={true} />
      } />

      {/* Main page */}
      <Route path='/mains/:mainId' element={ <Main /> } />

      {/* Authentication */}
      <Route path='/login' element={ <Auth /> } />
      <Route path='/register' element={ <Auth /> } />

      <Route path='*' element={ <div>404</div> }/>
    </Routes>
  )
}

export default App
