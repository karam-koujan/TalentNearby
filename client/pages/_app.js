import {ThemeProvider} from "styled-components";
import {GlobalStyle,lightTheme} from   '../styles/globals.js'
import {QueryClient,QueryClientProvider} from "react-query";
function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient()
  return(
         <QueryClientProvider client={queryClient}>
         <GlobalStyle/>
         <ThemeProvider theme={lightTheme}>
          <Component {...pageProps} />
         </ThemeProvider>
         </QueryClientProvider>
  )
}

export default MyApp
