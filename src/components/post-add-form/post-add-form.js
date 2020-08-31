import React from "react";

import './post-add-form.css'

export default class PostAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',

    }
  }

  onValueChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({
      text: ''
    })
  };

  render() {
    return (
        <form action=""
              className="bottom-panel d-flex"
              onSubmit={ this.onSubmit }>
          <input
              type="text"
              // placeholder="Uncovered a new conspiracy?"
              placeholder="What are your neighbours talking about?"
              // placeholder="Tell us where have you been last weekends?"
              className="form-control new-post-label"
              onChange={ this.onValueChange }
              value={this.state.text}
          />
          <button
              type="submit"
              className="btn btn-outline-secondary"
              // onClick={ () => onAdd('Hello!!') }
              >
            Share intrigue</button>
        </form>
    )
  }
};

