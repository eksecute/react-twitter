import React, { Component } from 'react';

import './post-list-item.scss'

export default class PostListItem extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     important: false,
  //     like: false
  //   };
  //   this.onImportant = this.onImportant.bind(this);
  // }
  // onImportant() {
  //   this.setState(({ important }) => ({
  //     important: !important
  //   }))
  // };
  // onLike = () => {
  //   this.setState(({ like }) => ({
  //     like: !like
  //   }))
  // };

  render() {
    //props comes from an post-list to which it transports from an app.js db array
    const { label, important, like, onDelete, onToggleImportant, onToggleLike } = this.props;

    // const { important, like } = this.state;

    let classNames = 'app-list-item d-flex justify-content-between'
    if (important) { classNames+= ' important' }
    if (like) { classNames+= ' like' }


    return (
        <div className={ classNames }>
          <span className="app-list-item-label" onClick={ onToggleLike }>
            { label }
          </span>
          <div className="justify-content-between d-flex align-items-center">
            <button
                type="button"
                className="btn-star btn-sm"
                onClick={ onToggleImportant } >
              <i className="fa fa-star"> </i>
            </button>
            <button
                type="button"
                className="btn-trash btn-sm"
                onClick={ onDelete }>
              <i className="fa fa-trash-o"> </i>
            </button>
            <i className="fa fa-heart"> </i>
          </div>
        </div>
    )
  }
}

