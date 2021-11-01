import './App.css';
import Overview from './pages/overview'
import Company from './pages/companies'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Switch>
          <Route path='/companies/:id' component={Company} />
          <Route path='/' component={Overview} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
