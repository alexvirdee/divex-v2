/**
 * Brand imagery map. The hero photos sit on a deep-water canvas, so we want
 * the warm orange life (clownfish/anemone) to anchor sites with reefs, the
 * wreck shot to ground anything wreck-related, and the sun-rays shot for
 * open-blue-water descents.
 */
export const IMG = {
  // Open blue water, sun rays into seafloor. Use for drift dives + atmospheric
  // hero backdrops.
  sunrays: "/images/AdobeStock_516851283.jpeg",
  // Wreck with diver passing through sunbeam. Use for wreck dives.
  wreck: "/images/AdobeStock_378109235.jpeg",
  // Orange clownfish in pale anemone. Use for reef dives — also reads "brand"
  // because of the vivid orange against cool tones.
  reef: "/images/AdobeStock_316446573.jpeg",
} as const;

/** Pick the best site photo by the site's primary tag/condition. */
export function siteImage(input: { conditions?: string; tag?: string; name?: string }): string {
  const key = (input.conditions || input.tag || "").toLowerCase();
  if (key.includes("wreck")) return IMG.wreck;
  if (key.includes("reef")) return IMG.reef;
  // drift, wall, cave, night, etc. → open blue water
  return IMG.sunrays;
}
