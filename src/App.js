import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css'

import MainPage from './comp/main'
import Results from './comp/results'

function App() {
  const [date, setDate] = useState('');
  const [pincode, setPincode] = useState('');

  const setData = (dateO, pincodeO) => {
    setDate(dateO);
    setPincode(pincodeO);
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <MainPage setFn={setData} />
          </Route>
          <Route path='/result'>
            <Results date={date} pincode={pincode} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
