import { useState } from "react";
import { Pack, Route } from "../../types";
import ResponseDialog from "./ResponseDialog";
import InspectDialog from "./InspectDialog";

type RouteCardProps = {
  pack: Pack;
  route: Route;
};

const routeBox = {
  display: "flex",
  justifyContent: "left",
  width: "100%",
  margin: 0,
};

export default function RouteCard({ pack, route }: RouteCardProps) {
  const [isResponseOpen, setIsResponseOpen] = useState<boolean>(false);
  const [isRequestOpen, setIsRequestOpen] = useState<boolean>(false);
  const [response, setResponse] = useState<string>("");
  const [error, setError] = useState<string>("");

  const sendRequest = async () => {
    const request = {
      url: `${pack.url}${route.route}`,
      init: {
        method: route.method,
        headers: route.headers,
        body: route.body,
      },
    };
    try {
      const res = await fetch(request.url, request.init);
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
      setIsResponseOpen(true);
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        setError("Error: " + err.message);
      } else {
        setError("An unknown error occurred." + err);
      }
      setIsResponseOpen(true);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "0 3rem 3rem 3rem",
      }}
    >
      <hr style={{ borderTop: "1px solid #ffffff", width: "100%" }} />
      <p style={routeBox}>
        <b>Route:&nbsp;</b>
        {route.route}
      </p>
      <p style={routeBox}>
        <b>Method:&nbsp;</b>
        {route.method}
      </p>
      <p style={routeBox}>
        <b>Description:&nbsp;</b>
        {route.description}
      </p>
      <button
        style={{ marginTop: "1rem" }}
        onClick={() => setIsRequestOpen(true)}
      >
        Inspect Request
      </button>
      <button style={{ marginTop: "1rem" }} onClick={sendRequest}>
        Send Request
      </button>
      <ResponseDialog
        title={`${route.method} ${route.route} Response`}
        isOpen={isResponseOpen}
        onClose={() => setIsResponseOpen(false)}
        response={response}
        error={error}
      />
      <InspectDialog
        title={`${route.method} ${route.route} Request`}
        isOpen={isRequestOpen}
        onClose={() => setIsRequestOpen(false)}
        route={route}
      />
    </div>
  );
}
