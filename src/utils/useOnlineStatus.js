import {useEffect} from 'react';
const useOnlineStatus =() => {
    const [onlineStatus, setonlineStatus]=useState(true);
    useEffect(()=>{
        window.addEventListener("online",()=>{
            setonlineStatus(false);

        })
    },[]);
    return useOnlineStatus;
}
export default useOnlineStatus;