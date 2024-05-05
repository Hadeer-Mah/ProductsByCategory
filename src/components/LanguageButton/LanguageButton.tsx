import { changeLanguage } from "i18next";
import i18n from "../../locales/i18n";

function LanguageButton() {
  const lang = i18n.language;
  return (
    <div
      className={`w-[50px] h-[50px] rounded-full bg-black text-white flex justify-center items-center fixed bottom-5 end-5 font-semibold text-2xl cursor-pointer z-40`}
      onClick={() => {
        changeLanguage(lang === "en" ? "ar" : "en");
        window.location.reload();
      }}
    >
      {lang === "en" ? "ع" : "E"}
    </div>
  );
}

export default LanguageButton;
