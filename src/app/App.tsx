import { Link,  } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { NavBar } from "widgets/Navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar/>
      <AppRouter/>
    </div>
  );
};

export default App;
