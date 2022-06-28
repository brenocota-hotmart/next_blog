import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from 'components/Header';
import { ThemeProvider } from "next-themes";
import { darkTheme } from 'stitches.config';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { LocaleProvider } from 'context/locale';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        value={{
          light: "light",
          dark: darkTheme.className
      }}>
        <LocaleProvider>
          <Header />
          <Component {...pageProps} />
        </LocaleProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp
