import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/App';
import * as serviceWorker from './serviceWorker';
import App from "./components/App";
import { HashRouter} from "react-router-dom";


const render = (Component) => {
    ReactDOM.render(
        // eslint-disable-next-line react/jsx-no-undef
        <AppContainer>
            <HashRouter>
                <Component/>
            </HashRouter>
        </AppContainer>,
        document.getElementById('root')
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
serviceWorker.unregister();
