import { RedocStandalone } from "redoc";

function App() {
  return (
    <RedocStandalone
      specUrl="/joined-openapi.yaml"
      options={{
        nativeScrollbars: true,
        hideDownloadButton: false,
        hideHostname: false,
        expandResponses: "200,201",
        requiredPropsFirst: true,
        sortPropsAlphabetically: false,
        showExtensions: true,
      }}
    />
  );
}

export default App;
