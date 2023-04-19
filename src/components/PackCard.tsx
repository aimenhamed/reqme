import { Pack } from "../../types";
import RouteCard from "./RouteCard";

type PackCardProps = {
  pack: Pack;
};

export default function PackCard({ pack }: PackCardProps) {
  return (
    <div style={{ outline: "1px solid white", marginBottom: "2rem" }}>
      <div style={{ padding: "1rem" }}>
        <b>{pack.name}</b>
        <p>{pack.url}</p>
      </div>
      {pack.routes.map((route) => (
        <RouteCard key={route.route + pack.name} pack={pack} route={route} />
      ))}
    </div>
  );
}
