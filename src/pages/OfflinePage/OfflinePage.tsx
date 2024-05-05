import { useTranslation } from "react-i18next";

function OfflinePage() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="text-center">
        <p className="text-2xl text-[red] font-bold mb-5">{t("You're Offline!")}</p>
        <p className="text-black-700 font-semibold">
          {t("Please Check Your Internet Connection and Try Again")}
        </p>
      </div>
    </div>
  );
}

export default OfflinePage;
