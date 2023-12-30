// import logo from './logo.svg';
import './App.css';
import { Adduser } from './Dashboard/Api/api';
// import { Adduser } from './Dashboard/Api/api';
// import AllUser from './Dashboard/Api/AllUser';
import Dashboard from './Dashboard/Dashboard';
// import getUser from './Dashboard/Api/AllUser'
// import Adduser from './Dashboard/Api/Adduser';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
  
  
  <BrowserRouter>
  <Dashboard/>
  
      <Routes>
        {/* <Route path="/" element={<Code />} /> */}
        {/* <Route path="/all" element={<AllUser />} /> */}
        <Route path="/add" element={<Adduser />} />
        {/* <Route path="/edit/:id" element={<Edit/>}/> */}
      </Routes>
    </BrowserRouter>
  {/* <AllUser/> */}
    </div>
  );
}

export default App;
