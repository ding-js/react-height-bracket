## Usage
```js
import ReactHeightBracket from 'react-height-bracket';

ReactDOM.render(
  <ReactHeightBracket>
      <p>Fit window's height...</p>
  </ReactHeightBracket>
), document.getElementById('#root'));
```

## API
<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th>default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
      <tr>
          <td>scroll</td>
          <td>Boolean</td>
          <td>false</td>
          <td>whether fix component's height</td>
      </tr>
      <tr>
          <td>container</td>
          <td>String|Window</td>
          <td>Window</td>
          <td></td>
      </tr>
      <tr>
          <td>siblingsHeight</td>
          <td>number</td>
          <td>0</td>
          <td></td>
      </tr>
    </tbody>
</table>

## Example
online example: [https://ding-js.github.io/react-height-bracket/example/build/](https://ding-js.github.io/react-height-bracket/example/build/)
