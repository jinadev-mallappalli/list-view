import React from 'react';
import { Focusable } from 'react-js-spatial-navigation';

class MediaItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = { showZoom: false, showStroke: false}
    }

    showZoom = () => {
        const showZoom = this.props.tileStyles.focusStyles.includes('scale')
        if(showZoom) {
            this.setState({ showZoom: true })
        }
    }

    removeZoom = () => {
        this.setState({ showZoom: false })

    }

    showStroke= () => {
        const showStroke = this.props.tileStyles.focusStyles.includes('stroke')
        if(showStroke) {
            this.setState({ showStroke: true })
        }
    }

    removeStroke = () => {
        this.setState({ showStroke: false })
    }

    getItemHeight = (itemOrientation) => {
        if(itemOrientation === 'landscape') {
            if(this.props.clientWidth) {
                return ((this.props.clientWidth) / this.props.count) * this.props.aspectRatio
            }
            return 220
        }
        else {
            if(this.props.clientWidth) {
                return ((this.props.clientWidth - (10 * (this.props.count - 1) )) / this.props.count) * this.props.aspectRatio
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
    const showZoom = this.state.showZoom
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

    let containerScaleStyle = {
        transform: 'scale(1)',
        transition: 'transform 0.5s',
        zIndex: 1
    }

    if(showZoom) {
        containerScaleStyle = { transform: 'scale(1.2)',
        transition: 'transform 0.5s, z-index 0s .2s', zIndex: 10 }
        
    }

    let borderStyles = {
        borderRadius: '5px',
    }

    if(this.state.showStroke) {
        borderStyles = {...borderStyles,  border: `2px solid ${strokeColor} ` }
    }

    if(isFocused) {
        overlayStyles = {...overlayStyles, opacity: 0.75 }
    }

    if(showOverlay) {
        overlayStyles = {...overlayStyles, backgroundColor: overlayColor }
    }


    const calculatedWidth = this.props.type === 'grid-list'  ? `calc(${itemWidth} - 10px)` : itemWidth;

    console.log(this.state)
    return (
      <div style={{ marginBottom: '40px', marginTop: '40px', width: calculatedWidth, minWidth: calculatedWidth, height: `${height}px`, minHeight: `${height}px`, position: 'relative', marginRight: '10px', ...containerScaleStyle }}
        onMouseOver={() => {
          itemFocus(focusPath)
        //   startScroll()
          setFocusIndex(itemIndex)
          this.showZoom()
          this.showStroke()
        }}
        onMouseLeave={() => {
            this.removeZoom()
            this.removeStroke()
            removeFocus()
        }
        }
        onKeyDown={e => itemClick(focusPath, e)}
      >
         <div style={borderStyles}>
         <Focusable style={{ height: '100%', maxHeight: '100%', display: 'none'}} onFocus={() => {
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
      </div>
    );
  }
}

export default MediaItem;
