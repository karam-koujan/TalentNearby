import {ThemeProvider} from "styled-components";
import {GlobalStyle,lightTheme} from   '../styles/globals.js'

function MyApp({ Component, pageProps }) {
  return(
         <>
         <GlobalStyle/>
         <ThemeProvider theme={lightTheme}>
          <Component {...pageProps} />
         </ThemeProvider>
         </>
  )
}

export default MyApp
