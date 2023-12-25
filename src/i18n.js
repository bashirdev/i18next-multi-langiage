// import i18n from "i18next";
// import LanguageDetector from 'i18next-browser-languagedetector'
// import { initReactI18next } from "react-i18next";

// i18n.use(LanguageDetector).use(initReactI18next).init({
//     debug:true,
//     fallbackLng:"en",
//     returnObjects:true,
//     resources:{
//         en:{
//          translation:{
//             greeting:"Hello, Welcome!",
//             description:{
//                 line1:"this is <1>{{channel}}</1> line 1",
//                line2:"this is  line 2" 
//             },
//          }
//         },
//         ba:{
//             translation:{
//                 greeting:"হ্যালো, স্বাগতম",
//                 description:{
//                    line1:"এইটা <1>{{channel}}</1> লাইন ১",
//                    line2:"এইটা লাইন ২"
//                 },
//             }, 
//         },
//         hi:{
//             translation:{

//                 greeting:"नमस्ते, स्वागत है",
//                 description:{
//                     line1:'यह पंक्ति 1 <1>{{channel}}</1> है',
//                     line2:'यह पंक्ति 2 है',
//                 }
//             }, 
//         },
//         ar:{
//             translation:{

//                 greeting:"صباح الخير",
//                 description:{
//                     line1:' </1> {{channel}} </1> خط   1',
//                     line2:'خط 2 ',
//                 }
//             }, 
//         },
//     }
// })



import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend'
i18n.use(LanguageDetector).use(initReactI18next)
.use(Backend)
.init({
    debug:true,
    fallbackLng:"en",
    returnObjects:true,
   
})