import MainRoutes from './routes/MainRoutes'
import './App.css'
import { useEffect, useState } from 'react';
import OfflinePage from './pages/OfflinePage/OfflinePage';

function App() {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  /* monitoring changes in the online status of the browser, 
  so When the online status changes, updates the state to reflect the current online status.
 */
  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine); // Update state with current online status
    };
    // Event listeners for the 'online' and 'offline' events to detect changes in connectivity.
    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);
    // Removes event listeners when the component unmounts to prevent memory leaks.
    return () => {
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
    };
  }, []);

  
  return isOnline ? <MainRoutes/> : <OfflinePage/>
    
  


}

export default App
