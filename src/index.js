
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

//global store
import configureStore from './store';

//styles
import 'semantic-ui-css/semantic.min.css';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less

import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import App from './App';

ReactDOM.render(

    <Provider store={configureStore()}>
        <BrowserRouter>
            <LocaleProvider locale={enUS}>
                <Route path='/' component={App} />
            </LocaleProvider>                
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

