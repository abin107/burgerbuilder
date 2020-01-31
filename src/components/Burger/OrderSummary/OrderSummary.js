import React from 'react';
import Aux from '../../../hoc/Auxillary';

const orderSummary = (props) => {

    const ingredientSummmary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey} : {props.ingredients[igKey]}</span>:
                </li>
            )
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious Burger with the following ingredients : </p>
            <ul>
                {ingredientSummmary}
            </ul>
            <p>Continue to Checkout ?</p>
        </Aux>
    );
};

export default orderSummary;