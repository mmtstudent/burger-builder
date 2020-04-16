import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render () {
        let ingriedient = null;

        switch( this.props.type) {
            case('bread-bottom'):
                ingriedient = <div className={classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingriedient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds1}></div>
                    </div>
                )
                break;
            case ('meat'):
                ingriedient = <div className={classes.Meat}></div>
                break;
            case ('cheese'):
                ingriedient = <div className={classes.Cheese}></div>
                break;
            case ('salad'):
                ingriedient = <div className={classes.Salad}></div>
                break;
            case ('bacon'):
                ingriedient = <div className={classes.Bacon}></div>
                break;
            default:
                ingriedient = null;
        }
        return ingriedient;
    }
};

BurgerIngredient.propsTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;