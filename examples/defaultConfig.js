const menuStyle = {
    type: 'side_menu', //top_tabs, bottom_tabs,
    isWrapped: true,
    showIcons: true
  };
  
  const Color = {
    primary: 'black',
    secondary: 'white',
    tertiary: 'yellow-darkest'
  };
  
  const ButtonColor1 = {
    background: 'orange-darkest',
    text: 'white',
    stroke: 'blue'
  };
  
  const ButtonColor2 = {
    background: 'red-darkest',
    text: 'white',
    stroke: 'blue'
  };
  
  const ButtonColor3 = {
    background: 'yellow-darkest',
    text: 'green',
    stroke: 'blue'
  };
  
  const ButtonStyle = {
    normal: ButtonColor1,
    focussed: ButtonColor3,
    pressed: ButtonColor1
  };
  const theme = {
    logo: 'https://diagnal.com/wp-content/uploads/2017/02/slice_logo.png',
    colorScheme: {
      background: Color,
      text: Color,
      buttonStyle1: ButtonStyle
    },
    menuStyle: menuStyle
  };
  
  const Image = {
      type: 'Poster',
      height: 500,
      width: 500,
      uri: 'https://upload.wikimedia.org/wikipedia/en/1/15/Dunkirk_Film_poster.jpg'
  }
  
  const Image1 = {
      uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Lucifer_film_poster.jpg/220px-Lucifer_film_poster.jpg'
  }
  
  const playListItems = [
    {
      id: '1',
      title: 'Lucifer',
      images: [Image1]
    },
    {
      id: '2',
      images: [Image],
      title: 'Dunkirk'
    },
    {
      id: '3',
      images: [Image1],
      title: 'Dunkirk'
    },
    {
      id: '4',
      images: [Image],
      title: 'Dunkirk'
    },
    {
      id: '5',
      images: [Image],
      title: 'Dunkirk'
    },
    {
      id: '6',
      images: [Image],
      title: 'Dunkirk'
    },
    {
      id: '7',
      images: [Image],
      title: 'Dunkirk'
    },
    {
      id: '8',
      images: [Image],
      title: 'Dunkirk'
    },
    {
      id: '9',
      images: [Image],
      title: 'Dunkirk'
    }
  ];
  
  export const defaultConfig = {
    page: {
      homePage: {
        theme: theme,
        components: [
          {
            id: '1',
            type: 'horizontal-rails',
            title: 'Upcoming Movies',
            playlist: {
              id: 'playlist_1',
              type: 'recently_watched',
              items: playListItems
            },
            style: {
              itemOrientation: 'portrait',
              focusStyles: ['stroke', 'overlay'],
              overlayColor: 'yellow',
              strokeColor: 'blue',
              enableCulling: true, 
              railSize: 20,
              enabledAutoScroll: false,
              wrapContent: false,
              wrapFocus: false,
              scrollEnableIndex: null,
              scrollDisableIndex: 6,
              scrollDelay: 7000,
              scrollDuration: 5000,
              count: 5
            }
          },
          {
            id: '2',
            type: 'vertical_rails',
            title: 'Featured Movies',
            playlist: {
              id: 'playlist_1',
              type: 'recently_watched',
              items: playListItems
            },
            style: {
              itemOrientation: 'landscape',
              focusStyles: ['stroke', 'overlay'],
              overlayColor: 'grey',
              strokeColor: 'blue',
              enableCulling: true,
              railSize: 20,
              enabledAutoScroll: false,
              wrapContent: true,
              wrapFocus: true,
            }
          },
          {
            id: '3',
            type: 'grid_rails',
            title: 'New Movies',
            playlist: {
              id: 'playlist_1',
              type: 'recently_watched',
              items: playListItems
            },
            style: {
              itemOrientation: 'portrait',
              focusStyles: ['stroke', 'overlay'],
              overlayColor: 'grey',
              strokeColor: 'blue',
              enableCulling: true,
              railSize: 20,
              enabledAutoScroll: true,
              wrapContent: true,
              wrapFocus: true
            }
          }
        ]
      }
    }
  };
  