import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import Item from '../Item';
import List from '../List';

export default function NavBar() {

    return(
        <>
            <ul>
                <li><NavLink exact to="/">Lists</NavLink></li>
                <li><NavLink exact to="/items">Items</NavLink></li>
            </ul>

            <Switch>
                <Route exact path="/">
                    <List></List>
                </Route>

                <Route exact path="/items">
                    <Item></Item>
                </Route>
            </Switch>
        </>
    )
}