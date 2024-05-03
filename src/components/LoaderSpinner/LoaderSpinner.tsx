import "./LoaderSpinner.css"
export default function LoaderSpinner() {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>
    </div>
  );
}
