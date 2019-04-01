import React from 'react';

class MediaItem extends React.Component {

  render() {
    const {
      src,
      title,
      itemIndex,
      itemClick,
      itemFocus,
      isFocused,
      focusPath,
      removeFocus,
      tileStyles,
      setFocusIndex,
      width,
      startScroll
    } = this.props;
    const {
      itemOrientation,
      overlayColor,
      focusStyles,
      strokeColor
    } = tileStyles;
    const showOverlay = focusStyles.includes('overlay');
    const showStrokes = focusStyles.includes('stroke');
    const height = itemOrientation === 'landscape' ? '220px' : '350px';

    const overlayStyles = { 
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0
    }

    if(showStrokes) {
        overlayStyles = {...overlayStyles, border: `2px solid ${strokeColor} `}
    }

    if(isFocused) {
        overlayStyles = {...overlayStyles, opacity: 0.75 }
    }

    if(showOverlay) {
        overlayStyles = {...overlayStyles, backgroundColor: overlayColor }
    }


    return (
      <div  style={{ width: `${width*100}%`, height: height}}
        onMouseOver={() => {
          itemFocus(focusPath)
          startScroll()
        //   setFocusIndex(itemIndex)
        }}
        onMouseLeave={() => removeFocus()}
        onKeyDown={e => itemClick(focusPath, e)}
      >
    
          <div style={overlayStyles}>
          </div>
          <React.Fragment>
            <img style={{ width: '100%', height: '100%'}} src={src} alt="" />
            <span>{title}</span>
          </React.Fragment>
      </div>
    );
  }
}

export default MediaItem;
