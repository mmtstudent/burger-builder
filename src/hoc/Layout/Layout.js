import React, { Component } from 'react';

import Auxi from '../Auxi/Auxi';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false,
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevSate) => {
            return {
                showSideDrawer: !this.state.showSideDrawer
        }});
    }

    render () {
        return (
          <Auxi>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer 
                visible={this.state.showSideDrawer} 
                closed={this.sideDrawerToggleHandler}
            />
            <main className={classes.Content}>
                {this.props.children}
            </main>    
         </Auxi >
        )
    }
}
  
export default Layout;