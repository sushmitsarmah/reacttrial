import React from 'react';
import { render } from 'react-dom';
import TestComponent from './test_component';

import 'semantic-ui-css/semantic.css';
import './test.styl';

class App extends React.Component {
    render(){
        return (
            <div>
              <p>Hello React!</p>
              <TestComponent num="10"/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'))
