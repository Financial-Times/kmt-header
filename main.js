import KmtHeader from './src';

const initKmtHeader = () => {
  const theOptions = {
    rootEl: "#root",
    data: {
      mainMenu: {
        items: [
          {
            label: "DASHBOARD",
            href: "#"
          },
          {
            label: "MY FT",
            href: "#",
            active: true
          },
          {
            label: "USERS",
            href: "#"
          }
        ],
        enableMobile: true
      },
      headerTitle: {
        label: "KMT",
        summary: "KNOWLEDGE MANAGER TOOLS"
      }
    }
  };

  KmtHeader.init(theOptions);
  document.removeEventListener('kmt.DOMContentLoaded', initKmtHeader);
};

document.addEventListener('kmt.DOMContentLoaded', initKmtHeader);

export default KmtHeader;
