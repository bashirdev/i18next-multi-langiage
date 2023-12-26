import React, { useEffect, useState } from 'react';
import './voice.css'

const productData=[
    {
        id:1,
        title:'apple'
    },
    {
        id:2,
        title:'orange'
    },
    {
        id:3,
        title:'mango'
    },
    {
        id:4,
        title:'apple'
    },
    {
        id:5,
        title:'apple'
    },
]
const VoiceSearch = () => {
    
    const [voiceValue, setVoiceValue] = useState('')
    const [product, setProduct] = useState([])


    const handleInput=()=>{
        // eslint-disable-next-line no-undef
        let recognition= new webkitSpeechRecognition();
        recognition.lang='en-GB'
        recognition.onresult=function(event){
           
            setVoiceValue(event.results[0][0].transcript)

        }
        recognition.start()
    }

 
    useEffect(()=>{
        if(voiceValue.length > 0){
            // eslint-disable-next-line no-undef
            const result = productData.filter(item=> item.title.toLowerCase().includes(voiceValue.toLowerCase()))
            console.log(result)
            setProduct(result)
         }
    },[voiceValue,voiceValue.length])


    return (
        <div  className='voiceSearch voiceMOdal'>
           <input className='input' type="text" placeholder='search'  value={voiceValue} />
           <button onClick={()=> handleInput()} className='btn'>Voice Search</button>

           {product.length > 0 ? (
            product?.map(item=>(
            <div className='product' key={item.id}>
                <h3>{item.title}</h3>
            </div>
           ))
           ):''}
        </div>
    );
};

export default VoiceSearch;