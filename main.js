import KmtHeader from './src';
import KmtHeaderContainer from './src/containers/kmt-header';
import { KmtHeaderNs } from './src/reducers';

const initKmtHeader = () => {
  const theOptions = {
    rootEl: "#root",
    data: {
      KmtHeaderNs: {
        headerTitle: {// custom header title
          label: "Knowledge & administration tools",
          summary: ""
        },
        mainMenu: {
          items: [
            {
              tracking: "my-ft"
              label: "myFT",
              attrs: {
                href: "#"
              },
              active: true
            },
            {
              tracking: "users"
              label: "USERS",
              attrs: {
                href: "#",
                target: "_blank"
              }
            },
            {
              tracking: "feedback"
              label: "Feedback",
              attrs: {
                href: "#"
              },
              cls: "kat-feedback__btn",
              last: true
            },
            {
              tracking: "my-account"
              label: "My Account",
              attrs: {
                href: "https://myaccount.ft.com/"
              },
              last: true
            }
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
