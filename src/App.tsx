import { Suspense, lazy } from "react";

// Dynamically import Redoc to enable code splitting
const RedocStandalone = lazy(() =>
  import("redoc").then((module) => ({ default: module.RedocStandalone }))
);

function App() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            fontSize: "18px",
            color: "#666",
          }}
        >
          Loading API Documentation...
        </div>
      }
    >
      <RedocStandalone
        specUrl="/api-docs/joined-openapi.yaml"
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
    </Suspense>
  );
}

export default App;
