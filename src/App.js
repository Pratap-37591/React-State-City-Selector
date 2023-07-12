import List from "./components/List";
import Result from './components/Result'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<List/>}/>
      <Route path="/result" element={<Result/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
