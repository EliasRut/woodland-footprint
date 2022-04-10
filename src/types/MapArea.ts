import ForestType from "./ForestType";
import GeoTupel from "./GeoTupel";

export default interface MapArea {
  geoPoints: GeoTupel[];
  forestType: ForestType;
  labelCenter: GeoTupel;
  name: string;
}
