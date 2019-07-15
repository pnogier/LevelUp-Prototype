/*
 * Package Import
 */
import React, { FunctionComponent } from 'react';


/*
 * Local Import
 */
import Header from './Header';
import Footer from './Footer';


const Layout: FunctionComponent= ({children}) => {

  return (    
    <div>
      <Header />
        {children}
      <Footer />
    </div>
  )
}

export default Layout