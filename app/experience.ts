// Contentsquare is loaded in app/layout.tsx. These helpers push the few things we tag on top of
// its automatic capture (session replay, heatmaps, journeys).
type Uxa = unknown[][];

function uxa(): Uxa {
  const w = globalThis as { _uxa?: Uxa };
  w._uxa = w._uxa ?? [];
  return w._uxa;
}

export function setUser(email: string) {
  uxa().push(["setCustomVariable", 1, "user", email]);
  uxa().push(["setCustomVariable", 2, "plan", "free"]);
}

export function trackEvent(name: string, value = "") {
  uxa().push(["trackDynamicVariable", { key: name, value }]);
}

export function trackPageview(path: string) {
  uxa().push(["trackPageview", path]);
}
