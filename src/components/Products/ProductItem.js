import React, {useContext} from 'react';
//import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
import './ProductItem.css';
import { useStore } from '../../hooks-store/store';
//import { ProductsContext } from '../../context/products-context';
//import { toggleFav } from '../../store/actions/products';

const ProductItem = props => {
  /* pomoci Reduxu:
  const dispatch = useDispatch();
  const toggleFavHandler = () => {
    dispatch(toggleFav(props.id));
  };
*/
/* pomoci Contextu:
const prodCtx = useContext(ProductsContext);
const toggleFavHandler = () => { // tady nesmim dat (props)!!!!!!! ale jen ()
  prodCtx.toggleFav(props.id);
}
*/

const dispatch = useStore()[1]; // ted chceme jen tu 2. polozku, co useStore vraci

const toggleFavHandler = () => {
  dispatch('TOGGLE_FAV',props.id)
}

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
