import './index.css';
import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from "./launch/App";
import {setupStore} from "./state/store";

const store = setupStore()

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
)