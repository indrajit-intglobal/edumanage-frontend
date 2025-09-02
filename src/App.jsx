import { Provider, defaultTheme } from "@adobe/react-spectrum";
import Layout from "./layout/Layout";

export default function App() {
  return (
    <Provider theme={defaultTheme}>
      <Layout />
    </Provider>
  );
}
