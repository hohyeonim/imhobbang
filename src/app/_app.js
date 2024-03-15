import { ThemeProvider } from 'styled-components';
import '../app/globals.css';

const theme = {
  // Your theme object here
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;