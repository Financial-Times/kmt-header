import KmtHeader from './src';
import KmtHeaderContainer from './src/containers/kmt-header';
import { KmtHeaderNs } from './src/reducers';

const initKmtHeader = () => {
  const theOptions = {
    rootEl: "#root",
    data: {
      KmtHeaderNs: {
        headerTitle: {// custom header title
          label: "KAT",
          summary: "Knowledge & Administraion Tools"
        }
      },
			mainMenu: {
				items: [
					{
						label: "myFT",
						href: "#",
						active: true
					}, {
						label: "Users",
						href: "#"
					}
				],
				enableMobile: true
			},
    }
  };

  KmtHeader.init(theOptions);
  document.removeEventListener('kmt.DOMContentLoaded', initKmtHeader);
};

document.addEventListener('kmt.DOMContentLoaded', initKmtHeader);

export { KmtHeaderContainer, KmtHeaderNs };
export default KmtHeader;
