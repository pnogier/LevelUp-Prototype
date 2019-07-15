/*
 * Package Import
 */
import React, {useState} from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, Badge, MenuItem, Menu, Icon } from '@material-ui/core';
import classNames from 'classnames';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/styles'
import { styleHeader }from 'styles/Header/header'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountCircle from '@material-ui/icons/AccountCircle';
import GTranslate from '@material-ui/icons/GTranslate';


/*
 * Local Import
 */
import { authentification } from 'configs/route';
import { useStore, useActions } from 'store'
import MainListItems from 'components/Layout/ListItems/MainListItems'
import LoginListItems from '../ListItems/LoginListItems';
import { Link } from 'react-router-dom';
import i18next from 'i18next';

/*
 * Component
 */

const Header = () => {
  const routes = authentification()

  const isConnected = useStore( state => state.app.isConnected)


  const [open, setOpen] = useState(true)
  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorElLang, setAnchorElLang] = useState(null)

  const theme = useTheme()
  const style = styleHeader(theme)

  const handleDrawerOpen = () => {
    setOpen(true)
  };

  const handleDrawerClose = () => {
    setOpen(false)
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    //@ts-ignore
    setAnchorEl(event.currentTarget)
  };

  const handleClose = () => {
    setAnchorEl(null)
    setAnchorElLang(null)

  };
  const handleMenuLang = (event: React.MouseEvent<HTMLElement>) => {
    //@ts-ignore
    setAnchorElLang(event.currentTarget)
  };

  const handleCloseLang = (lang: string) => {
    // changeLange(lang)
    i18next.changeLanguage(lang)
    setAnchorElLang(null)
  };

  const openAnchor = Boolean(anchorEl);
  const openAnchorLang = Boolean(anchorElLang);

  return (
    <div className={style.root}>
      <AppBar
          position="fixed"
          className={classNames(style.appBar, {
            [style.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classNames(style.menuButton, open && style.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap className={style.grow}>
              Level Up
            </Typography>
            <div>
              <IconButton
                aria-owns={openAnchorLang ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={handleMenuLang}
                color="inherit"
              >
                <GTranslate />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElLang}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openAnchorLang}
                onClose={handleClose}
              >
                <MenuItem onClick={() => {handleCloseLang('fr')}}>Français</MenuItem>
                <MenuItem onClick={() => {handleCloseLang('en')}}>Anglais</MenuItem>
              </Menu>
            </div>
            <div>
                <IconButton
                  aria-owns={openAnchor ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={openAnchor}
                  onClose={handleClose}
                >
                {
                  !isConnected && routes.map(({path, title, id}) => {
                    return (
                      <MenuItem key={id} onClick={handleClose}>
                        <Link to={path}>{title}</Link> 
                      </MenuItem>                          
                    )
                  })
                }
                </Menu>
              </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={style.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: style.drawerPaper,
          }}
        >
          <div className={style.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {
                //@ts-ignore
                theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />
              }
            </IconButton>
          </div>
          <Divider />
          <List>
            {
              !isConnected ? <MainListItems /> : <LoginListItems/>
            } 
          </List>
          <Divider />
        </Drawer>
      </div>
  )
};

/*
 * Export
 */
export default Header;