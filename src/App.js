
import './App.css';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';
import Home from './page/Home/Home';
import { HomeTemplate } from './templates/HomeTemplates/HomeTemplats';
import Contact from './page/Contact/Contact';
import News from './page/News/News';
import Login from './page/Login/login';
import Register from './page/Register/Register';
import Detail from './page/Detail/Detail';
import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate';
import Checkout from './page/Checkout/Checkout';
import { Suspense, lazy } from 'react'
import { UserTemplate } from './templates/UserTemplates/UserTemplate';
export const history = createBrowserHistory();
const CheckoutTemplateLazy = lazy(() => import('./templates/CheckoutTemplate/CheckoutTemplate'))

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />
        <HomeTemplate path="/news" exact Component={News} />
        {/* <Route path="/login" exact Component={Login} /> */}
        {/* <Route path="/register" exact Component={Register} /> */}
        <CheckoutTemplate path="/checkout/:id" exact component={Checkout} />
        {/* <Suspense fallback={<h1>asd</h1>}>
        <CheckoutTemplateLazy path="/checkout/:id" exact component={Checkout} />
        </Suspense> */}
        <UserTemplate path="/login" exact Component={Login} />
        <UserTemplate path="/register" exact Component={Register} />
        <HomeTemplate path="/" exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
