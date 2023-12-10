import { useParams } from "react-router-dom";
// import HTMLReactParser from "html-react-parser";
// import millify from "millify";

const Cryptodetails = () => {
  const { coinId } = useParams();
  return <div>CryptoDetails {coinId}</div>;
};

export default Cryptodetails;
