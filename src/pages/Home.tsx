import { useEffect, useState } from "react";
import PackCard from "../components/PackCard";
import { Pack } from "../../types";

export default function Home() {
  const [packs, setPacks] = useState<Pack[]>([]);
  useEffect(() => {
    const getPacks = async () => {
      try {
        const res = await fetch("/packs");
        const json = await res.json();
        setPacks(json);
      } catch {
        console.log("error");
      }
    };

    getPacks();
  }, []);
  return (
    <>
      <h1>reqme</h1>
      {packs.map((pack) => (
        <PackCard key={pack.name} pack={pack} />
      ))}
    </>
  );
}
