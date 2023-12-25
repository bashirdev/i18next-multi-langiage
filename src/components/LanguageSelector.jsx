import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';


const language=[
    {code:'en', lang:'English'},
    {code:'ba', lang:'Bangla'},
    {code:'hi', lang:'Hindi'},
    {code:'ar', lang:'Arabic'},
]

const LanguageSelector = () => {
     
    const {i18n} =useTranslation();

    const changeLanguage=(lng)=>{
        i18n.changeLanguage(lng)
    }

  useEffect(()=>{
   document.body.dir = i18n.dir()
  },[i18n, i18n.language])

   
    return (
        <div className='btn-container'>
      
            { language.map((lng, ind)=>{
                
                return <button 
                  className={lng.code === i18n.language?"selected" : ''}
                 key={ind} 
                 onClick={()=> changeLanguage(lng.code)}>
                 {lng.lang}

                 </button>
            })}
        </div>
    );
};

export default LanguageSelector;