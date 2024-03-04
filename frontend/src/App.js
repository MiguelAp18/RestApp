import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CreateCustomer } from './customer/CreateCustomer';
import { EditCostumer } from './customer/EditCostumer';
import ShowCostumer from './customer/ShowCostumer';

const App = () => {

  return (
      <div>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={ < ShowCostumer /> } />
            <Route path='/create' element={ < CreateCustomer /> } />
            <Route path='/edit/:id' element={ < EditCostumer /> } />
          </Routes>
        </BrowserRouter>

      </div>
  );

}

export default App;
