import { GlobalStyle } from "./GlobalStyle/Globalstyle";
import Content from "./Content";
import { ThemeProvider } from "styled-components";

const App = () => {


  const lightTheme = {
    colors: {
      black: "#000",
      white: "#fff",
      fandango: "#C13584",
      chambreyblue: "#3a559f",
      gold: "gold",
      darkgrey: "#323232",
      grey: "#999999",
      lightgrey: "#cccccc",
      varylightgrey: " #eeeeee",
      deepskyblue : "#00BFFF",
    },
    bg: {
      primary: "#94949C"
    },
    highlight: {
      primary: "#414243",
      secondary: "#C9C0B1",
      rgb: {
        primary: "65, 66, 67",
       secondary: "188, 185, 181"
      }
    },
    title: {
      primary: "0,0,0",
      secondary: "50, 50, 50",

    },
    icon: {
      primary: "#fff",
    },
    gradient: {
      bgGradient: "linear-gradient(140deg, rgba(147,159,166,1) 32%, rgba(188,185,181,1) 62%)",
      gradient1:"linear-gradient(135deg,  rgba(120, 204, 109, 0.4) 0%,  rgba(120, 204, 109, 0.012) 100%)",
      gradient2:"radial-gradient(ellipse at left,  #dddddd 0%,  rgba(255, 255, 255, 0) 70%)",

    },
    border:{
      gradient1:"radial-gradient(ellipse at center,  #dddddd 0%,  rgba(255, 255, 255, 0) 70%)",
      gradient2:"radial-gradient(ellipse at left,  #dddddd 0%,  rgba(255, 255, 255, 0) 70%)",
    }
  };


  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
        <>
          <div className={`app light overflow-hidden`}>
            <Content />
          </div>
        </>
    </ThemeProvider>
  );
}

export default App;
