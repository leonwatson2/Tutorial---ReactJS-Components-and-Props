import React, { Component } from 'react';

export class Card extends Component {
  
  renderCardList(list){
    return (
      <ul className="card-list">
        { list.map( item => <li key = { item }  ><img src={ item } alt="" /></li> ) }

      </ul>

        )
  }

  render() {
    const { card } = this.props

    return (
      <div className="card u-clearfix">
      <span className="card-heading">{ card.title }</span>
      <span className="card-more">
        <svg fill="#777777" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      </span>
      { this.renderCardList(card.list) }
    </div>
    );
  }
}