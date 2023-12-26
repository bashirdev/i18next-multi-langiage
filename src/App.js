
import { Trans, useTranslation } from 'react-i18next';
import './App.css';
import LanguageSelector from './components/LanguageSelector';
import VoiceSearch from './components/voiceSearch/VoiceSearch';

function App() {
  const {t}=useTranslation()
  const {line1, line2}= t('description',{
    channel:'bashir'
  })

  return (
    <div className="container">
    <VoiceSearch />
    <LanguageSelector />
       <h1>{t("greeting")}</h1>
       {/* this Trans for Bold */}
       <span>
       <Trans
         i18nKey={line1}
         values={{
          channel:"BashirAhammed",
         }}
         components={{1: <b />}}
        />
   </span>
       <p>{line2}</p>
    </div>
  );
}

export default App;
