const defaultState = {
  changeFn: (e) => {
    const urlPath = window.location.pathname;
    const pathArr = urlPath.split('/');
    // the license should be the first item (not counting the 0 index which is an empty string)
    // replace it with the new id
    if (pathArr[0] === '') {
      pathArr.shift();
    }
    pathArr[1] = e.target.value;
    // navigate to the same page but with the new license id
    window.location.pathname = pathArr.join('/');
  }
};


const licenseChange = (state = defaultState) => {
  return state;
};

export default licenseChange;
