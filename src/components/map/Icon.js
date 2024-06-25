import L, { tooltip } from "leaflet";
import wy from "./wy.png";

const LeafIcon = L.Icon.extend({
  options: {
    iconSize: [100, 100],
    iconAnchor: [50, 50],
    tooltipAnchor: [0, 0],
  },
});

export const wyIcon = new LeafIcon({ iconUrl: wy });
