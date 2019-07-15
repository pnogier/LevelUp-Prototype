/*
 * Package Import
 */
import React, { FunctionComponent,  } from 'react'
import { Switch, Route } from 'react-router-dom';

/*
 * Local Import
 */
import Layout from 'components/Layout';
import {defaultRoutes, authentification, connectedRoutes, page404} from 'configs/route'
import { useStore } from 'store'


/*
 * Styles
 */
import 'styles/index.sass';

const App: FunctionComponent = () => {
  const isConnected  = useStore(state => state.app.isConnected)
  const routesDefault = defaultRoutes()
  const routesAuthentification = authentification()
  const routesConnected= connectedRoutes()
  const routes404 =page404()
  return (
    <Layout>
      <Switch>
        {
          routesAuthentification.map(({ exact, path, component: Component }) => (
            <Route key={path} exact={exact} path={path} component={Component} />
        ))}
        {isConnected && routesConnected.map(({ exact, path, component: Component }) => (
          <Route key={path} exact={exact} path={path} component={Component} />
        ))}
        {routesDefault.map(({ exact, path, component: Component }) => (
          <Route key={path} exact={exact} path={path} component={Component} />
        ))}
        {
          routes404.map(({ exact, path, component: Component }) => (
            <Route key={path} exact={exact} path={path} component={Component} />
        ))}

      </Switch>
    </Layout>
  )
}

export default App