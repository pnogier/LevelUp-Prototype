import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import {connectedRoutes} from 'configs/route'
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import { useStore } from 'store'

const LoginListItems = () => {
  const lang  = useStore(state => state.app.lang)
  const routes = connectedRoutes()

  return (
    <div>
      {
        routes.map((route) => {
          return (
            //@ts-ignore
            <ListItem button key={route.id} component={Link} to={route.path}>
              <ListItemIcon>
                <Icon className={route.icon}/>
              </ListItemIcon>
              <ListItemText primary={route.title} />
            </ListItem>
          )
        })
      }
    </div>
  )
};

/*
 * Export
 */
export default LoginListItems;
