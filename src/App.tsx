import MainRoutes from './routes/MainRoutes'
import './App.css'
import { useEffect, useState } from 'react';
import OfflinePage from './pages/OfflinePage/OfflinePage';

function App() {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);

    return () => {
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
    };
  }, []);

  
  return isOnline ? <MainRoutes/> : <OfflinePage/>
    
  


}

export default App
