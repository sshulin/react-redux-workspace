import React from 'react';
import { connect } from 'react-redux';

import { itemDeleted } from '../../../actions';

const ItemList = ({items, itemDeleted}) => {


  return (
    <div>
      {
        items.data.map((item) => {
          const itemDeleteWrapper = () => {
            itemDeleted(item.id)
          }
          return (
            <li
              key={item.id}
              >
              { item.title }
              <button onClick={itemDeleteWrapper}>
                Delete
              </button>
            </li>
          )
        })
      }
    </div>
  )
}

const mapStateToProps = ({ items }) => {
  return {
    items
  }
}

const mapDispatchToProps = {
  itemDeleted
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);