// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { createTheme, MantineProvider } from '@mantine/core';
import { HeaderSimple } from './components/HeaderSimple';
import { FooterCentered } from './components/FooterCentered';
import ParticlesComponent from './components/tsparticles';
import AboutSection from './components/AboutSection';

const theme = createTheme({
  headings: { fontFamily: "Fira Code, monospace", fontWeight: "500" }
});

export default function App() {
  return <MantineProvider theme={theme}>
    {
      <>
        <HeaderSimple/>
        <ParticlesComponent/>
        <AboutSection/>
        <FooterCentered/>
      </>
    }
  </MantineProvider>;
}