import offlineImg from "../../assets/offline-img.png";

function OfflinePage() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <img src={offlineImg} alt="you're offline" className="h-full" />
    </div>
  );
}

export default OfflinePage;
