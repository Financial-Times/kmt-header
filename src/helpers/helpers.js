/**
 * Gets the licenseId from the URL
 * @returns {String|Boolean}
 */
export function getUrlLicense() {
  return "b0f170de-26de-454d-810d-3be7e2b3e380"; // TODO: remove this
  const pathArr = window.location.pathname.split("/");
  const licenseId = pathArr[1];

  if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(licenseId)) {
    return licenseId;
  }

  return false;
}

/**
 * Sort the licenses by the creation date
 * @param {Array} licenses
 * @returns {Array}
 * @private
 */
function _sortAndNameLicenses(licenses) {
  // sort the array by the creationDate
  // TODO: creationDate key might need to be changed
  licenses.sort((item1, item2) => {
    if (item1.creationDate < item2.creationDate) {
      return -1;
    }

    if (item1.creationDate > item2.creationDate) {
      return 1;
    }
    return 0;
  });

  return licenses.map((license, index) => {
    return Object.assign({}, license, {label: `License #${index + 1}`});
  });
}

/**
 * Gets the user details from the cookie
 * @returns {{items: Array, username: String, selected: {value: String, label: String}}}
 */
export function getCookieUserDetails() {
  const licenseList = {
    items: [
      {
        value: "2",
        label: "#2",
        creationDate: "1471520317781"
      },
      {
        value: "b0f170de-26de-454d-810d-3be7e2b3e380",
        label: "#3",
        creationDate: "1471520417781"
      },
      {
        value: "1",
        label: "#1",
        creationDate: "1471520117781"
      },
      {
        value: "4",
        label: "#4",
        creationDate: "1471520517781"
      }
    ]
  };
  //let now = new Date();
  //const time = now.getTime();
  //const expireTime = time + 1000*36000;
  //now.setTime(expireTime);
  //document.cookie = `licenseList=${encodeURIComponent(JSON.stringify(licenseList))};expires=${now.toGMTString()}`;
  document.cookie = `licenseList=${encodeURIComponent(JSON.stringify(licenseList))}`;
  document.cookie = `FT_User2=USERID=6000172648:EMAIL=ciprian.lujeru@ft.com:FNAME=Ciprian:LNAME=Lujeru:TIME=%5BWed%2C+17-Aug-2016+13%3A50%3A48+GMT%5D:USERNAME=ciprian.lujeru@ft.com:REMEMBER=_REMEMBER_:ERIGHTSID=2000172648:PRODUCTS=_Tools_P0_P2_:RESOURCES=:GROUPS=:X=`;
  // TODO: the above should be removed

  const userDetails = {items: [], username: "", selected: {value: "", label: ""}};
  const cookieList = getObjectFromCookieLikeStr();

  // if the details are found
  if (cookieList["licenseList"]) {// TODO: this key might need to be changed
    try {
      // parse the cookie value
      const licenseListObj = JSON.parse(decodeURIString(cookieList["licenseList"])); // TODO: the decodeURIString might need to be removed

      // if the items are found
      if (licenseListObj.items) {
        userDetails.items = _sortAndNameLicenses(licenseListObj.items);

        // get the licenseId from the URL
        const currentLicense = getUrlLicense();

        // if it's found
        if (currentLicense === false) {
          // TODO: uncomment this ??
          //window.location.href = window.location.origin;

        // if it's found
        } else {
          // try to get the details from the list
          userDetails.items.every(function (item) {
            if (item.value === currentLicense) {
              // TODO: this might need to be changed (the keys)
              userDetails.selected.value = item.value;
              userDetails.selected.label = item.label;
              return false;
            }
            return true;
          });
        }
      }
    } catch (e) {}
  }

  // if the user cookie is found
  if (cookieList["FT_User"] || cookieList["FT_User2"]) { // TODO: the user details might have a different key and structure
    // parse the value
    const ftUserDetails = getObjectFromCookieLikeStr(cookieList["FT_User"] || cookieList["FT_User2"], ":");

    // if the first name or the last name is found
    if (ftUserDetails["FNAME"] || ftUserDetails["LNAME"]) {
      userDetails.username = decodeURIString(ftUserDetails["FNAME"] ? `${ftUserDetails["FNAME"]}${ftUserDetails["LNAME"] ? ` ${ftUserDetails["LNAME"]}` : ""}` : ftUserDetails["LNAME"]);
    }
  }

  return userDetails;
}

/**
 * Gets an object from a cookie-like string
 * @returns {Object}
 */
export function getObjectFromCookieLikeStr(theString = document.cookie, initialSplitter = ";") {
  return theString.split(initialSplitter)
    .map((item) => item.trim().split(/(=)/))
    .reduce((items, itemStrArr) => {
      items[itemStrArr[0]] = items[itemStrArr[0]]
        ? items[itemStrArr[0]] + ', ' + itemStrArr.slice(2).join('') // if the key already exists => add the key to the value
        : itemStrArr.slice(2).join(''); // just add the value

      return items;
    }, {});
}

/**
 * Decode an encoded URI (including +)
 * @param {String} theString
 * @returns {String}
 */
export function decodeURIString(theString) {
  return decodeURIComponent(theString.replace(/\+/g, '%20'));
}
