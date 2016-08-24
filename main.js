import KmtHeader from './src';
import KmtHeaderContainer from './src/containers/kmt-header';
import { KmtHeaderNs } from './src/reducers';

const initKmtHeader = () => {
  const theOptions = {
    rootEl: "#root",
    data: {
      KmtHeaderNs: {
        headerTitle: {// custom header title
          label: "KMT",
          summary: "maximising your FT experience"
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
