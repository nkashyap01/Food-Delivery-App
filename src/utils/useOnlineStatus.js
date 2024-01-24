import {useEffect} from 'react';
const useOnlineStatus =() => {
    useEffect(()=>{
        window.addEventListener("online",()=>{

        })
    },[]);
    return useOnlineStatus;
}
export default useOnlineStatus;