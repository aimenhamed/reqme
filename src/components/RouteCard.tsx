import { Route } from "../../types";

type RouteCardProps = {
  route: Route;
};

export default function RouteCard({ route }: RouteCardProps) {
  return <div>{route.route}</div>;
}
