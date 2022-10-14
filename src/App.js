import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Provider } from "react-redux";
import store from "./Components/Redux/store";
import View from './Components/View/View';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AddCompany from './Components/AddCompany/AddCompany';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
       <Header/>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<View/>}></Route>
            <Route path='/add' element={<AddCompany/>}></Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
