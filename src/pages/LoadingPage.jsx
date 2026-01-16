import "./../styles/LoadingPage.css";
import loadingImage from "../assets/loading.gif";

export default function LoadingPage() {
  return (
    <div className="loading-page">
      <h1>Loading</h1>
      <img src={loadingImage} alt="Straw Hats in boat" />
    </div>
  );
}
