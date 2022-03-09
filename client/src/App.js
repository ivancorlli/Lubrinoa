import { GlobalStyle } from "./components/GlobalStyle";
import Theme from "./components/Theme";
import { NotificationProvider } from "./contexts/NotificationProvider";
import { TokenProvider } from "./contexts/TokenProvider";
import { UserProvider } from "./contexts/UserProvider";
import AppRouter from "./router/AppRouter";




function App() {
  return (
    <>
    <NotificationProvider>
      <TokenProvider>
        <UserProvider>
          <Theme>
              <GlobalStyle/>
                  <AppRouter/>
          </Theme>
        </UserProvider>
      </TokenProvider>
    </NotificationProvider>
    </>
  );
}

export default App;
