import{useState, useEffect} from 'react';

const useOnlineStatus = ()=>{

    const [OnlineStatus, setOnlineStatus] = useState(navigator.onLine);

    useEffect(()=>{
        window.addEventListener('online',()=>{
            setOnlineStatus(true);
        });

        window.addEventListener('offline',()=>{
            setOnlineStatus(false);
        });
    },[]);
       
    return useOnlineStatus;
};

export default useOnlineStatus;