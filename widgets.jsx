import ReactDOM from 'react-dom';
import React from 'react';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<Root />, document.getElementById('main'));
});

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>Root</div>);
  }
}
