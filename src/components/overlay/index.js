import React, { Component, PropTypes } from 'react';
// import Delegate from 'ftdomdelegate';
// import viewport from 'o-viewport';

class Overlay extends Component {
  constructor (props) {
    super(props);

    this.positionOverlay = this.positionOverlay.bind(this);
    this.realignOverlay = this.realignOverlay.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
    this.close = this.close.bind(this);

    this.dimensions = {width: undefined, height: undefined};

    // viewport.listenTo('resize');
    // this.theDoc = new Delegate();
    // this.theDoc.root(document.body);
    // this.theDoc.on('oViewport.resize', 'body', this.onWindowResize);
  }

  shouldComponentUpdate (nextProps) {
    // children will be a React object that can't be stringified
    const replacer = (k, v) => k === 'children' ? v.props || null : v;

    // only render if the props (state) have changed
    return JSON.stringify(nextProps, replacer) !== JSON.stringify(this.props, replacer);
  }

  componentDidMount () {
    window.addEventListener('resize', this.onWindowResize);
    this.onWindowResize();
  }

  onWindowResize () {
    this.positionOverlay();
  }

  getHeight (ignoreScrollbars) {
  	return ignoreScrollbars ? document.documentElement.clientHeight : Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }

  getWidth (ignoreScrollbars) {
  	return ignoreScrollbars ? document.documentElement.clientWidth : Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }

  positionOverlay () {
    console.log(this.getWidth());
    console.log(this.getHeight());
    this.realignOverlay('width', this.getWidth());
    this.realignOverlay('height', this.getHeight());
  }

  realignOverlay (dimension, size) {
    const theOverlay = this.refs.theOverlay;
    const theOverlayContent = this.refs.theOverlayContent;
    const theOverlayHeader = this.refs.theOverlayHeader;
    if (theOverlay && theOverlayContent && theOverlayHeader) {
      const dimensionKey = dimension.charAt(0).toUpperCase() + dimension.substring(1);
      const edge = dimension === 'width' ? 'left' : 'top';
      const edgeKey = edge.charAt(0).toUpperCase() + edge.substring(1);

      if (this.dimensions[dimension] === undefined) {
        const borderDimension = theOverlay[`offset${dimensionKey}`] - theOverlay[`client${dimensionKey}`];
        if (dimension === 'width') {
          this.dimensions[dimension] = theOverlayContent.scrollWidth + borderDimension;
        } else {
          this.dimensions[dimension] = theOverlayContent.scrollHeight + theOverlayHeader.offsetHeight + borderDimension;
        }
      }

      if (size <= this.dimensions[dimension]) {
        const newClass = `o-overlay--full-${dimension}`;
        if (theOverlay.className.indexOf(newClass) === -1) {
          theOverlay.className += ` ${newClass}`;
        }
        theOverlay.style[edge] = '0';
        theOverlay.style[`margin${edgeKey}`] = 0;
        if (dimension === 'height') {
          const borderHeight = theOverlay.offsetHeight - theOverlay.clientHeight;
          theOverlayContent.style.height = theOverlay.offsetHeight - theOverlayHeader.offsetHeight - borderHeight + 'px';
        }
      } else {
        if (dimension === 'height') {
          theOverlayContent.style.height = null;
        }
        theOverlay.className = theOverlay.className.replace(new RegExp(`(?:^|\\s)${`o-overlay--full-${dimension}`}(?!\\S)`), '');
        theOverlay.style[`margin${edgeKey}`] = -(theOverlay[`offset${dimensionKey}`]/2) + 'px';
        theOverlay.style[edge] = '50%';
      }
    }
  }

  close (e) {
    e.preventDefault();
    // this.theDoc.destroy();
    // viewport.stopListeningTo('resize');
    this.props.closeFn();
  }

  render () {
    return (
      <div className='kat-overlay'>
        <div className='o-overlay-shadow'></div>
        <div className='o-overlay o-overlay--modal' role='dialog' tabIndex='0' ref='theOverlay' style={{left: 0, top: 0}}>
          <header className='o-overlay__heading' ref='theOverlayHeader'>
            <a className='o-overlay__close' role='button' tabIndex='0' href='#void' aria-label='Close' title='Close' onClick={this.close}></a>
            <span role='heading' className='o-overlay__title'>{this.props.title || ''}</span>
          </header>
          <section className='o-overlay__content' ref='theOverlayContent'>
            {this.props.children}
          </section>
        </div>
      </div>
    );
  }
};

Overlay.propTypes = {
  title: PropTypes.string,
  closeFn: PropTypes.func.isRequired
};

export default Overlay;
