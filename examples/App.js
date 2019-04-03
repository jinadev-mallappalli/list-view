import React from 'react';
import SpatialNavigation from 'react-js-spatial-navigation';
import List from '../src';
import { defaultConfig } from './defaultConfig';



const renderComponent = (type, title, playlist, style) => {
  switch (type) {
    case 'horizontal-rails':
      return <List title={title} items={playlist} styles={style} />;
    case 'vertical_rails':
      return (
        <List
          title={title}
          type="vertical-list"
          items={playlist}
          styles={style}
        />
      );
    case 'grid_rails':
      return (
        <List title={title} type="grid-list" items={playlist} styles={style} />
      );
    default:
      return <List title={type} items={playlist} styles={style} />;
  }
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      currentValue: {
        "homePage": {
           "components": [
              {
                 "id": "1",
                 "type": "horizontal-rails",
                 "title": "Upcoming Movies",
                 "playlist": {
                    "id": "playlist_1",
                    "type": "recently_watched",
                    "items": [
                       {
                          "id": "1",
                          "title": "Lucifer",
                          "uri": "https://placeimg.com/1000/1000/movie"
                       },
                       {
                          "id": "1",
                          "title": "Lucifer",
                          "uri": "https://placeimg.com/1000/1000/movie"
                       },
                       {
                        "id": "1",
                        "title": "Lucifer",
                        "uri": "https://placeimg.com/1000/1000/movie"
                       },
                       {
                        "id": "1",
                        "title": "Lucifer",
                        "uri": "https://placeimg.com/1000/1000/movie"
                     },
                     {
                        "id": "1",
                        "title": "Lucifer",
                        "uri": "https://placeimg.com/1000/1000/movie"
                     },
                     {
                        "id": "1",
                          "title": "Lucifer",
                          "uri": "https://placeimg.com/1000/1000/movie"
                     },
                     {
                        "id": "1",
                        "title": "Lucifer",
                        "uri": "https://placeimg.com/1000/1000/movie"
                     },
                     {
                        "id": "1",
                        "title": "Lucifer",
                        "uri": "https://placeimg.com/1000/1000/movie"
                     },
                     {
                        "id": "1",
                        "title": "Lucifer",
                        "uri": "https://placeimg.com/1000/1000/movie"
                     }
                    ]
                 },
                 "style": {
                    "itemOrientation": "portrait",
                    "focusStyles": [
                       "stroke",
                       "overlay"
                    ],
                    "overlayColor": "yellow",
                    "strokeColor": "blue",
                    "enableCulling": true,
                    "railSize": 20,
                    "enabledAutoScroll": false,
                    "wrapContent": true,
                    "wrapFocus": true,
                    "scrollEnableIndex": 2,
                    "scrollDisableIndex": 6,
                    "scrollDelay": 2000,
                    "scrollDuration": 5000,
                    "count": 3,
                    "aspectRatio": "1"
                 }
              },
              {
                "id": "2",
                "type": "vertical_rails",
                "title": "Upcoming Movies",
                "playlist": {
                   "id": "playlist_1",
                   "type": "recently_watched",
                   "items": [
                      {
                        "id": "1",
                        "title": "Lucifer",
                        "uri": "https://placeimg.com/1000/1000/movie"
                      },
                      {
                        "id": "1",
                        "title": "Lucifer",
                        "uri": "https://placeimg.com/1000/1000/movie"
                      },
                      {
                        "id": "1",
                        "title": "Lucifer",
                        "uri": "https://placeimg.com/1000/1000/movie"
                      },
                      {
                        "id": "1",
                          "title": "Lucifer",
                          "uri": "https://placeimg.com/1000/1000/movie"
                    },
                    {
                        "id": "1",
                          "title": "Lucifer",
                          "uri": "https://placeimg.com/1000/1000/movie"
                    },
                    {
                        "id": "1",
                          "title": "Lucifer",
                          "uri": "https://placeimg.com/1000/1000/movie"
                    },
                    {
                        "id": "1",
                          "title": "Lucifer",
                          "uri": "https://placeimg.com/1000/1000/movie"
                    },
                    {
                        "id": "1",
                        "title": "Lucifer",
                        "uri": "https://placeimg.com/1000/1000/movie"
                    },
                    {
                        "id": "1",
                        "title": "Lucifer",
                        "uri": "https://placeimg.com/1000/1000/movie"
                    }
                   ]
                },
                "style": {
                   "itemOrientation": "landscape",
                   "focusStyles": [
                      "stroke",
                      "overlay"
                   ],
                   "overlayColor": "yellow",
                   "strokeColor": "blue",
                   "enableCulling": true,
                   "railSize": 20,
                   "enabledAutoScroll": false,
                   "wrapContent": true,
                   "wrapFocus": true,
                   "scrollEnableIndex": 2,
                   "scrollDisableIndex": 6,
                   "scrollDelay": 2000,
                   "scrollDuration": 5000,
                   "count": 1,
                   "aspectRatio": "0.5625"
                }
             },
             {
                "id": "3",
                "type": "grid_rails",
                "title": "Upcoming Movies",
                "playlist": {
                   "id": "playlist_1",
                   "type": "recently_watched",
                   "items": [
                      {
                        "id": "1",
                        "title": "Lucifer",
                        "uri": "https://placeimg.com/1000/1000/movie"
                      },
                      {
                        "id": "1",
                        "title": "Lucifer",
                        "uri": "https://placeimg.com/1000/1000/movie"
                      },
                      {
                        "id": "1",
                        "title": "Lucifer",
                        "uri": "https://placeimg.com/1000/1000/movie"
                      },
                      {
                        "id": "1",
                        "title": "Lucifer",
                        "uri": "https://placeimg.com/1000/1000/movie"
                    },
                    {
                        "id": "1",
                          "title": "Lucifer",
                          "uri": "https://placeimg.com/1000/1000/movie"
                    },
                    {
                        "id": "1",
                          "title": "Lucifer",
                          "uri": "https://placeimg.com/1000/1000/movie"
                    },
                    {
                        "id": "1",
                          "title": "Lucifer",
                          "uri": "https://placeimg.com/1000/1000/movie"
                    },
                    {
                        "id": "1",
                        "title": "Lucifer",
                        "uri": "https://placeimg.com/1000/1000/movie"
                    },
                    {
                        "id": "1",
                          "title": "Lucifer",
                          "uri": "https://placeimg.com/1000/1000/movie"
                    }
                   ]
                },
                "style": {
                   "itemOrientation": "portrait",
                   "focusStyles": [
                      "stroke",
                      "overlay"
                   ],
                   "overlayColor": "yellow",
                   "strokeColor": "blue",
                   "enableCulling": true,
                   "railSize": 20,
                   "enabledAutoScroll": false,
                   "wrapContent": true,
                   "wrapFocus": true,
                   "scrollEnableIndex": null,
                   "scrollDisableIndex": 6,
                   "scrollDelay": 2000,
                   "scrollDuration": 5000,
                   "count": 3,
                   "aspectRatio": "1"
                }
             }
           ]
        }
     }
    };
  }

  showModal = () => {
    this.setState({ showModal: true });
  };

  handleSubmit = () => {
    this.setState({ currentValue: JSON.parse(this.refs.textarea.value), showModal: false });
  };

  render() {
    const { showModal } = this.state;
    const jsonData = this.state.currentValue
    return (
      <SpatialNavigation>
        <div style={{ height: '100%', width: '100%', position: 'relative' }}>
          <button onClick={() => this.showModal()}>Show JSON</button>
          {showModal ? (
            <div
              style={{
                height: '100%',
                width: '100%',
                backgroundColor: 'grey',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <textarea
                style={{ display: 'inline-block', height: '60%', width: '80%' }}
                ref="textarea"
                defaultValue={JSON.stringify(this.state.currentValue, undefined, 2)}
              />
              <button onClick={this.handleSubmit}>Submit</button>
            </div>
          ) : (
            jsonData.homePage.components.map(item =>
              renderComponent(
                item.type,
                item.title,
                item.playlist.items,
                item.style
              )
            )
          )}
        </div>
      </SpatialNavigation>
    );
  }
}
