import HomePage from "./page/HomePage/HomePage";
import Backend from "./page/Backend/Backend";
import NotFound from "./page/NotFound/NotFound";
import { Route, Switch } from 'react-router-dom';

function App() {
    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/home" exact component={HomePage} />
            <Route path="/backend" exact component={Backend} />
            <Route path="*" exact component={NotFound} />
        </Switch>
    );
}

export default App;
