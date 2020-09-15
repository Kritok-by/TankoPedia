import ItemList from "../item-list";
import { withData, withChildFunction } from "../../hocs";
import TankopediaService from "../../services/tankopedia-service";

const {
  getAllHeavy,
  getAllMedium,
  getAllLight,
  getAllPtSau,
  getAllSau
} = new TankopediaService();
const renderNameAndWeight = (item) => `${item.name} | ${item.weight}`;
const renderNameAndPower = (item) => `${item.name} | ${item.specificPower}`;
const renderNameAndOverview = (item) => `${item.name} | ${item.overview}`;
const renderNameAndDamage = (item) => `${item.name} | ${item.damage}`;
const HeavyList = withData(
  withChildFunction(ItemList, renderNameAndWeight),
  getAllHeavy
);
const MediumList = withData(
  withChildFunction(ItemList, renderNameAndPower),
  getAllMedium
);
const LightList = withData(
  withChildFunction(ItemList, renderNameAndOverview),
  getAllLight
);
const PtSauList = withData(
  withChildFunction(ItemList, renderNameAndDamage),
  getAllPtSau
);
const SauList = withData(
  withChildFunction(ItemList, renderNameAndDamage),
  getAllSau
);
export { HeavyList, MediumList, LightList, PtSauList, SauList };
