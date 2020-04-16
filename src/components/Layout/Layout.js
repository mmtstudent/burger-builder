import React from 'react';

import Auxi from '../../hoc/Auxi.js';
import classes from './Layout.css';

const layout = (props) => (
    <Auxi>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>    
    </Auxi>
);

export default layout;