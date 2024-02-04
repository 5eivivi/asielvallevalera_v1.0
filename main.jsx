// Importar createRoot de react-dom
import { createRoot } from 'react-dom/client'
import { App } from './src/App.jsx'
// Multilanguage (Format.JS library).
import { LanguageProvider } from './src/context/languageContext.jsx'

// Con createRoot obtengo donde quiero renderizar mi app.
const root = createRoot(document.getElementById('app'))

// Primer componente de React que voy a renderizar.
root.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
)
