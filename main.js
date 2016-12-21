import KmtHeader from './src';
import KmtHeaderContainer from './src/containers/kmt-header';
import { KmtHeaderNs } from './src/reducers';

const initKmtHeader = () => {
  const theOptions = {
    rootEl: "#root",
    data: {
      KmtHeaderNs: {
        headerTitle: {// custom header title
          label: "Knowledge & Administration Tools",
          summary: ""
        },
        mainMenu: {
          items: [
            {
              label: "myFT",
              href: "#",
              active: true
            }, {
              label: "USERS",
              href: "#"
            }
            // {
            //   label: "Feedback",
            //   href: "#",
            //   cls: "kat-feedback__btn",
            //   last: true
            // }
          ],
          enableMobile: true
        },
        helpers: {
          doRequest: (theUrl, options) => { return new Promise((res) => { return res(theUrl); }); }
        }
      }
    }
  };

  KmtHeader.init(theOptions);
  document.removeEventListener('kmt.DOMContentLoaded', initKmtHeader);
};

document.addEventListener('kmt.DOMContentLoaded', initKmtHeader);

export { KmtHeaderContainer, KmtHeaderNs };
export default KmtHeader;
