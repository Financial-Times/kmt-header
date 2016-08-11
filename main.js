import KmtHeader from './src';

const initKmtHeader = () => {
  KmtHeader.init("#root");
  document.removeEventListener('kmt.DOMContentLoaded', initKmtHeader);
};

document.addEventListener('kmt.DOMContentLoaded', initKmtHeader);

export default KmtHeader;
