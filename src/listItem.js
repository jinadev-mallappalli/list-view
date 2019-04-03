import React from 'react';
import { Focusable } from 'react-js-spatial-navigation';

class MediaItem extends React.Component {
    getItemHeight = (itemOrientation) => {
        if(itemOrientation === 'landscape') {
            if(this.props.clientWidth) {
                return ((this.props.clientWidth) / this.props.count) * this.props.aspectRatio
            }
            return 220
        }
        else {
            if(this.props.clientWidth) {
                return ((this.props.clientWidth - 20) / this.props.count) * this.props.aspectRatio
            }
            return 350

        }

    }

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
    //   startScroll,
      type
    } = this.props;
    const {
      itemOrientation,
      overlayColor,
      focusStyles,
      strokeColor
    } = tileStyles;
    const showOverlay = focusStyles.includes('overlay');
    const showStrokes = focusStyles.includes('stroke');
    const height = this.getItemHeight(itemOrientation)
    const itemWidth = `${width*100}%`
    const imageHeight = Math.round(height)
    const imageWidth = Math.round(this.props.clientWidth / this.props.count)

    let overlayStyles = { 
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


    const calculatedWidth = this.props.type === 'grid-list'  ? `calc(${itemWidth} - 10px)` : itemWidth
    return (
      <div style={{ marginBottom: '10px',width: calculatedWidth, minWidth: calculatedWidth, height: `${height}px`, minHeight: `${height}px`, position: 'relative', marginRight: '10px' }}
        onMouseOver={() => {
          itemFocus(focusPath)
        //   startScroll()
          setFocusIndex(itemIndex)
        }}
        onMouseLeave={() => removeFocus()}
        onKeyDown={e => itemClick(focusPath, e)}
      >
         <Focusable style={{ height: '100%', maxHeight: '100%'}} onFocus={() => {
          setFocusIndex(itemIndex)
          itemFocus(focusPath)
        //   startScroll()
        }}>
          <div style={overlayStyles}>
          </div>
          <React.Fragment>
            <img style={{ width: '100%', height: '100%'}} src={`https://placeimg.com/${imageWidth}/${imageHeight}/movie`} alt="" />
          </React.Fragment>
          </Focusable>
      </div>
    );
  }
}

export default MediaItem;
