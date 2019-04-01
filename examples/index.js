import React from 'react';
import { render } from 'react-dom';
import List  from '../src';
import { defaultConfig } from './defaultConfig';
import SpatialNavigation from 'react-js-spatial-navigation'

const renderComponent = (type, title, playlist, style) => {
    switch(type) {
      case 'horizontal-rails':
      return <List title={title} items={playlist} styles={style} />
      case 'vertical_rails':
      return <List title={title} type='vertical-list' items={playlist} styles={style}/>
      case 'grid_rails':
      return <List title={title} type='grid-list' items={playlist} styles={style}/>
      default:
      return <List title={type} items={playlist} styles={style} />


    }
}
const App = () => (
    <SpatialNavigation>
    { defaultConfig.page.homePage.components.map(item => renderComponent(item.type, item.title, item.playlist.items, item.style)) }
    </SpatialNavigation>
);
render(<App />, document.getElementById("root"));