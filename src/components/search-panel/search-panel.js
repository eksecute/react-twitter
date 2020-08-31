import React from 'react';

import './search-panel.css'

export default class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  onUpdateSearch = (e) => {
    const text = e.target.value;
    this.setState({ text: text });
    this.props.onUpdateSearch(text)
  };

  render() {
    return (
        <input
            type="text"
            className="form-control search-input"
            placeholder="Search by posts"
            onChange={ this.onUpdateSearch }
        />
    )
  }
};


