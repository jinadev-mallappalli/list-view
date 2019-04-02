import React from 'react';
import MediaTile from './listItem';
import { smoothScroll } from './utils/smoothScroll';

export class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      focused: 0,
      autoFocus: false,
      isScrolling: false,
      focusedIndex: 0
    };
  }

  componentDidMount = () => {
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.onMouseUp);
    window.addEventListener('mousedown', this.onMouseDown);
    window.addEventListener('resize', this.scrollRatio);
    this.scrollRatio();
    this.autoScrollTimer = setInterval(
      this.startScroll,
      this.props.styles.scrollDelay
    );
    if(this._scroller) {
        this.setState({ clientWidth: this._scroller.clientWidth })
    }
  };

  componentWillUnMount = () => {
    clearInterval(this.autoScrollTimer);
  };

  scrollWithIndex = () => {
    if (this.props.styles.scrollEnableIndex) {
      if (this.props.styles.scrollEnableIndex === this.state.focused) {
        this._scroller.scrollLeft +=
          this._scroller.clientWidth * this.state.scrollRatio + 10;
        this.setState({ focused: this.state.focused + 1 });
      }
    }
  };

  startScroll = () => {
    if (this._scroller && this.props.type === 'horizontal-list') {
      if (this.state.focused === this.props.items.length - 1) {
        if (this.props.styles.wrapContent) {
          this._scroller.scrollLeft = 0;
        }
        if (this.props.styles.wrapFocus) {
          this.setState({ focused: 0 });
        }
      }
      else {
          if (this.props.styles.scrollEnableIndex) {
                this.setState({ focused: this.state.focused + 1 }, () => {
                  if (this.props.styles.scrollEnableIndex <= this.state.focused) {
                  this._scroller.scrollLeft += this._scroller.clientWidth * this.state.scrollRatio + 10;
                  }
                });
          }
          else if(this.props.styles.enabledAutoScroll) {
            this.setState({ focused: this.state.focused + 1 }, () => this._scroller.scrollLeft += this._scroller.clientWidth * this.state.scrollRatio + 10 )
          }
      }
    }
  };

  itemClick = (focusPath, e) => {
    if (e.keyCode === 13) {
      this.setState({ selected: focusPath });
    }

    if (e.keyCode === 39) {
      this.setState({ focusedIndex: this.state.focusedIndex + 1 });
    }

    if (e.keyCode === 37) {
      this.setState({ focusedIndex: this.state.focusedIndex - 1 });
    }
  };

  onFocus = focusPath => {
    this.setState({ focused: focusPath });
  };

  setFocusIndex = index => {
    this.setState({ focusedIndex: index });
  };

  removeFocus = () => this.setState({ focused: false });

  onMouseMove = event => {
    event.preventDefault();
    const { clientX, scrollLeft, scrollTop, clientY, isScrolling } = this.state;
    if (isScrolling) {
      this._scroller.scrollLeft = scrollLeft - clientX + event.clientX;
      this._scroller.scrollTop = scrollTop - clientY + event.clientY;
    }
  };

  onMouseUp = () => {
    this.setState({
      isScrolling: false,
      scrollLeft: 0,
      scrollTop: 0,
      clientX: 0,
      clientY: 0
    });
  };

  onMouseDown = event => {
    event.preventDefault();
    const { scrollLeft, scrollTop } = this._scroller;
    this.setState({
      isScrolling: true,
      scrollLeft,
      scrollTop,
      clientX: event.clientX,
      clientY: event.clientY
    });
  };


  scrollRatio = () => {
    switch (this.props.styles.count) {
      case 1:
      this.setState({ scrollRatio: 1 });
      break;
      case 3:
        if (window.innerWidth < 768) {
          this.setState({ scrollRatio: 1 });
        } else if(window.innerWidth >=  768 && window.innerWidth <= 1024) {
          this.setState({ scrollRatio: 50 / 100 });
        }  else {
          this.setState({ scrollRatio: 33 / 100 });
        }
        break;
      case 4:
        if (window.innerWidth < 768) {
          this.setState({ scrollRatio: 1 });
        } else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
          this.setState({ scrollRatio: 50 / 100 });
        } else {
          this.setState({ scrollRatio: 25 / 100 });
        }
        break;
      case 5:
        if (window.innerWidth < 768) {
          this.setState({ scrollRatio: 1 });
        } else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
          this.setState({ scrollRatio: 50/100 });
        } else {
          this.setState({ scrollRatio: 20 / 100 });
        }
        break;
      default:
        if (window.innerWidth < 768) {
          this.setState({ scrollRatio: 1 });
        } else {
          this.setState({ scrollRatio: 33 / 100 });
        }
    }
  };

  render() {
    const { items } = this.props;
    const { enableCulling, railSize } = this.props.styles;
    let filteredItems = items;
    if (enableCulling) {
      filteredItems = items.filter((item, index) => index < railSize);
    }
    let listStyle = {
        display: 'flex',
        alignItems: 'flex-start',
        cursor: 'pointer'
    }

    if(this.props.type==='horizontal-list') {
        listStyle = {...listStyle, ...{flexWrap: 'nowrap', overflow: 'hidden'}}
    }

    if(this.props.type==='vertical-list') {
        listStyle = {...listStyle, flexDirection: 'column'}
    }

    if(this.props.type === 'grid-list') {
        listStyle = {...listStyle, ... { flexWrap: 'wrap'} }
    }

    return (
      <div style={{ width: '100%'}}>
        <h1>{this.props.title}</h1>
        <div style={listStyle}
          ref={node => (this._scroller = node)}
        >
          {filteredItems.map((item, index) => (
              <MediaTile
                itemIndex={index}
                isFocused={this.state.focused === index}
                selected={this.state.selected === index}
                focusPath={index}
                src={item.images[0].uri}
                itemClick={this.itemClick}
                itemFocus={this.onFocus}
                removeFocus={this.removeFocus}
                tileStyles={this.props.styles}
                title={item.title}
                setFocusIndex={this.setFocusIndex}
                width={this.state.scrollRatio}
                startScroll={this.scrollWithIndex}
                autoScroll={this.props.styles.enabledAutoScroll}
                clientWidth={this.state.clientWidth}
                count={this.props.styles.count}
                aspectRatio={this.props.styles.aspectRatio}
              />
          ))}
        </div>
      </div>
    );
  }
}

List.defaultProps = {
  type: 'horizontal-list'
};
export default List;
