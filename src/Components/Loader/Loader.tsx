import { logoSvg } from "../Header/logoSvg";
export default function Loader() {
  return (
    <div className="loader-container">
      <div className="main-logo">
        <div className="icon">{logoSvg}</div>
        <h1>Mystify</h1>
      </div>
      <div className="loader"></div>
    </div>
  );
}
