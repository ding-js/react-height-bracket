import * as React from 'react';
import { render } from 'react-dom';
import ReactHeightBracket from '../src';
import './style.css';

interface ExampleProps { };

interface ExampleState { };

const createFiller = (number: number) => {
    return Array.from({ length: number }).map((v, i) => <div key={i}>{i + 1}</div>);
}


class Example extends React.Component<ExampleProps, ExampleState>{
    render() {
        return (
            <div>
                <div style={{
                    width: '50%',
                    float: 'left'
                }}>
                    {createFiller(6)}
                    <ReactHeightBracket />
                    {createFiller(2)}
                </div>
                <div style={{
                    width: '50%'
                }}>
                    <ReactHeightBracket />
                </div>
            </div>
        );
    }
}

render(<Example />, document.getElementById('app'));