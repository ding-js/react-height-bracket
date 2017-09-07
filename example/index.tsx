import * as React from 'react';
import { render } from 'react-dom';
import ReactHeightBracket from '../src';
import './style.css';

interface ExampleProps { };

interface ExampleState { };

const createFiller = (number: number, text?: string) => {
  return Array.from({ length: number }).map((v, i) => <div key={i} className="filler">{text || i + 1}</div>);
}


class Example extends React.Component<ExampleProps, ExampleState>{
  render() {
    return (
      <div style={{ overflow: 'hidden' }}>
        <div className="container">
          {createFiller(3)}
          <ReactHeightBracket className="demo" scroll siblingsHeight={53 * 2}>
            {createFiller(100, 'overflow')}
          </ReactHeightBracket>
          {createFiller(2)}
        </div>
        <div className="container">
          {createFiller(2)}
          <div style={{ height: 500 }} className="demo" id="demo2">
            <ReactHeightBracket container="#demo2" siblingsHeight={41}>
              Set min-height
            </ReactHeightBracket>
            <footer>Demo2 Footer</footer>
          </div>
          {createFiller(4)}
        </div>
      </div>
    );
  }
}

render(<Example />, document.getElementById('app'));
