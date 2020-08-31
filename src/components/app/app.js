import React from 'react';

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

import './app.css';
import style from './App.module.css';
import styled from "styled-components";

const AppBlock = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;
const StyledAppBlock = styled(AppBlock)`
//background-color: gray;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myPosts : [
        {
          label: "going to learn React",
          important: false,
          like: false,
          id: "aaw1"
        },
        {
          label: "need to learn faster",
          important: false,
          like: false,
          id: "aaw2"
        },
        {
          label: "i must finish first 2 folders to go for a meat baking",
          important: true,
          like: false,
          id: "aaw3"
        },
        {
          label: "rock isn't so bad",
          like: false,
          id: "aaw4"
        },
      ],
      term: '',
      filter: 'all'
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLike = this.onToggleLike.bind(this);
    this.filterPosts = this.filterPosts.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);

    this.maxId = 4;
  }

  deleteItem(id) {
    this.setState(({ myPosts }) => {
      const index = myPosts.findIndex( elem => elem.id === id );
      console.log("index: " + index + "; id: " + id);
      // myPosts.slice(index, 1);
      // return {
      //   myPosts: myPosts
      // };
      const before = myPosts.slice(0, index);
      const after = myPosts.slice(index + 1);

      const newArr = [...before, ...after];

      return { myPosts: newArr }
    });
  };
  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++
    };

    this.setState((state) => {
      const newArr = [...state.myPosts, newItem];
      return { myPosts: newArr }
    });
  }

  onToggleImportant(id) {
    this.setState(({ myPosts }) => {
      const index = myPosts.findIndex(el => el.id === id);

      const old = myPosts[index];
      const newItem = { ...old, important: !old.important};

      const before = myPosts.slice(0, index);
      const after = myPosts.slice(index + 1);

      const newArr = [...before, newItem, ...after];
      return { myPosts: newArr }
    });
  }
  onToggleLike(id) {
    this.setState(({ myPosts }) => {
      const index = myPosts.findIndex(el => el.id === id);

      const old = myPosts[index];
      const newItem = { ...old, like: !old.like};

      const before = myPosts.slice(0, index);
      const after = myPosts.slice(index + 1);

      const newArr = [...before, newItem, ...after];
      return { myPosts: newArr }

    });
  }

  searchPost(items, term) {
    if (items.length === 0) {
      return items;
    }

    return items.filter( (item) => {
        return item.label.indexOf(term) > -1
      } )
  }
  filterPosts(items, filter) {
    if (filter === 'liked') {
      return items.filter(item => item.like) //vezde gde item.like == true
    } else {
      return items
    }
  }
  onUpdateSearch(text) {
    this.setState({
      term: text
    })
  }
  onFilterSelect(filter) {
    this.setState({ filter })
  }

  render() {

    const { myPosts, term, filter } = this.state;

    const liked    = myPosts.filter(item => item.like).length;
    const allPosts = myPosts.length;

    const visiblePosts = this.filterPosts(this.searchPost(myPosts, term), filter);

    return (
        <StyledAppBlock >
          {/*<div className={ style.app } >*/}
          {/*<div className="app" >*/}
          <AppHeader liked={ liked } allPosts={ allPosts }/>
          <div className="search-panel d-flex">
            <SearchPanel term={ term } onUpdateSearch={ this.onUpdateSearch } />
            <PostStatusFilter filter={ filter } onFilterSelect={ this.onFilterSelect } />
          </div>
          <PostList posts = { /* this.state.myPosts */ visiblePosts }
                    onDelete = { this.deleteItem }
                    onToggleImportant = { this.onToggleImportant }
                    onToggleLike = { this.onToggleLike }
          />
          <PostAddForm onAdd={ this.addItem }/>
        </StyledAppBlock>
    )
  }
};
