
import { activeLinkContext } from '@/app/context/activeLinkContext';
// import { useInView } from "framer-motion";
import { useContext, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

export default function useSectionInView(section,threshold=0.75) {

    const {ref,inView} = useInView({threshold})

     const { setActiveLink,timeOfLastClick} = useContext(activeLinkContext);

     useEffect(()=>{
    
        if(inView && Date.now()-timeOfLastClick > 1000){
            setActiveLink(section)
        }
     },[inView,timeOfLastClick])

     return ref
  
}
