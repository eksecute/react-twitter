import React from "react";

import './post-status-filter.css'
import { Button } from 'reactstrap';

export default class PostStatusFilter extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = [
      {name: 'all', label: 'Everything'},
      {name: 'liked', label: 'Liked'},
    ]
  }


  render() {
    const buttons = this.buttons.map( ({ name, label }) => { // вы// таскиваем чтобы не писать итем.лейбл...
      const { filter, onFilterSelect } = this.props;
      const active = this.props.filter === name; //если совпадает возвращает труъ
      const currentClass = active ? "btn-info" : "btn-outline-secondary";

      return (
          <button
              key={ name }
              className={`btn ${ currentClass }`}
              onClick={() => this.props.onFilterSelect( name ) }
          > { label } </button>
      )
    });

    return (
        <div className="btn-group">
          { buttons }
          {/*<button className="btn btn-info">Everything</button>*/}
          {/*<Button outline color="info">Liked</Button>*/}
          {/*<button className="btn btn-outline-secondary">Liked</button>*/}
        </div>
    )
  }
};

