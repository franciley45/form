import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import Form from './Components/Form';
import Home from "./Pages/Home";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Form />} />
          <Route exact path='/Home' element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
