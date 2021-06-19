import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import DeliverymenList from './pages/DeliverymenList';
import Register from './pages/Register';
import AssignOrder from './pages/AssignOrder';
import Pictures from './pages/Pictures';

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/deliverymenList" component={DeliverymenList} />
                <Route path="/register" component={Register} />
                <Route path="/assignOrder" component={AssignOrder} />
                <Route path="/pictures" component={Pictures} />
            </Switch>
        </HashRouter>
    );
}

export default App;


/* /deliverymenList



switch(num){
    case 1: console.log('1');
    break;
    case 2: console.log('2');
    break;
    case 3: console.log('3');
    break;
    case 4: console.log('4');
    break;
    default: console.log('invalido');
    break;
} */