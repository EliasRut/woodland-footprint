import ForestType from "./ForestType";
import GeoTupel from "./GeoTupel";

export default interface MapArea {
  geoPoints: GeoTupel[];
  forestType: ForestType;
  labelCenter: GeoTupel;
  label: string;
  key: string;
  area: number;
  owner: string;
  until: string;
  carbonCaptured: number;
}
