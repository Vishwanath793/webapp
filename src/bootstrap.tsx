// This is only used for independent development of the microfrontend.

import ApolloThemeProvider from "apollo-react/utils/ApolloThemeProvider";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import CoreApp from "./app";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";

export default function bootstrap(props: any) {
  const rootElement: any = document.getElementById("root-qecg-core");
  const root = createRoot(rootElement);
  root.render(
    <ApolloThemeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <CoreApp deliveryId="1086093" userId="u1138325" />
        </BrowserRouter>
      </Provider>
    </ApolloThemeProvider>
  );
}
