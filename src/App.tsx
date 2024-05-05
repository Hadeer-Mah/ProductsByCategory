import MainRoutes from "./routes/MainRoutes";
import "./App.css";
import { useEffect, useState } from "react";
import OfflinePage from "./pages/OfflinePage/OfflinePage";
import { checkFixLang } from "./locales/lang";
import i18n from "./locales/i18n";
import LanguageButton from "./components/LanguageButton/LanguageButton";

function App() {
  const lang = i18n.language;
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  /* monitoring changes in the online status of the browser, 
  so When the online status changes, updates the state to reflect the current online status.
 */
  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine); // Update state with current online status
    };
    // Event listeners for the 'online' and 'offline' events to detect changes in connectivity.
    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);
    // Removes event listeners when the component unmounts to prevent memory leaks.
    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);

  // Change HTML direction when changing website language
  useEffect(() => {
    checkFixLang(lang);
  }, [lang]);

  return isOnline ? (
    <>
      <LanguageButton />
       <MainRoutes />
    </>
  ) : (
    <OfflinePage />
  );
}

export default App;
