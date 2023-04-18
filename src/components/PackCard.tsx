import { Pack } from "../../types";
import RouteCard from "./RouteCard";

type PackCardProps = {
  pack: Pack;
};

export default function PackCard({ pack }: PackCardProps) {
  return (
    <div style={{ outline: "1px solid white" }}>
      <p>{pack.name}</p>
      {pack.routes.map((route) => (
        <RouteCard route={route} />
      ))}
    </div>
  );
}
