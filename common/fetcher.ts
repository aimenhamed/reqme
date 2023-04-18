import { Pack, FetchTemplate } from "../types";

export function packsToFetches(
  packs: Pack[]
): Map<string, Map<string, FetchTemplate>> {
  const packList = new Map<string, Map<string, FetchTemplate>>();
  for (const pack of packs) {
    const fetchMap = new Map<string, FetchTemplate>();
    for (const route of pack.routes) {
      const request = {
        url: `${pack.url}${route.route}`,
        init: {
          method: route.method,
          headers: route.headers,
          body: route.body,
        },
      };
      fetchMap.set(route.route, request);
    }
    packList.set(pack.name, fetchMap);
  }
  return packList;
}

// async function main() {
//   const pack = process.argv[2];
//   const route = process.argv[3];

//   const packs = ();
//   const fetches = packsToFetches(packs);

//   const chosenPack = fetches.get(pack);
//   if (!chosenPack) {
//     console.error(`Pack ${pack} not found`);
//     return;
//   }
//   const chosenRoute = chosenPack.get(route);
//   if (!chosenRoute) {
//     console.error(`Route ${route} not found`);
//     return;
//   }

//   try {
//     const result = await fetch(chosenRoute.url, chosenRoute.init);
//     const json = await result.json();
//     console.log(json);
//   } catch (error) {
//     console.log("Error occurred\n", error);
//     return;
//   }
// }

// main();
