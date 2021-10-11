import {ThemeProvider} from "styled-components";
import {GlobalStyle,lightTheme} from   '../styles/globals.js'
import {QueryClient,QueryClientProvider} from "react-query";
import React from "react";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient()
  const router = useRouter()
 
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
