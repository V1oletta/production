import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Counter from './components/Counter'
import AboutePage from './components/pages/AboutPage/AboutePage'
import MainPage from './components/pages/MainPage/MainPage'
import './index.scss'

const App = () => {
  return (
    <div className="App">
        <Link to={'/'}>главная</Link>
        <Link to={'/about'}> о сайте</Link>
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/about' element={<AboutePage/>}/>
        </Routes>
    </div>
  )
}

export default App