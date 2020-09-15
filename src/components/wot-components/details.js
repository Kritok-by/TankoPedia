import React from "react";
import ItemDetails from "../item-details";
import { Record } from "../Record/Record";
import TankopediaService from "../../services/tankopedia-service";

const {
  getHeavy,
  getHeavyImage,
  getMedium,
  getMediumImage,
  getLight,
  getLightImage,
  getPtSau,
  getPtSauImage,
  getSau,
  getSauImage
} = new TankopediaService();

const HeavyDetails = ({ selectedItem }) => {
  return (
    <ItemDetails
      selectedItem={selectedItem}
      getData={getHeavy}
      getImage={getHeavyImage}
    >
      <Record label="Name" field="name" />
      <Record label="Damage" field="damage" />
      <Record label="Breaking Through" field="breakingThrough" />
      <Record label="Weight" field="weight" />
      <Record label="Strength" field="strength" />
      <Record label="Body Armor" field="bodyArmor" />
      <Record label="Tower Armor" field="towerArmor" />
    </ItemDetails>
  );
};

const MediumDetails = ({ selectedItem }) => (
  <ItemDetails
    selectedItem={selectedItem}
    getData={getMedium}
    getImage={getMediumImage}
  >
    <Record label="Name" field="name" />
    <Record label="Damage" field="damage" />
    <Record label="Breaking Through" field="breakingThrough" />
    <Record label="Specific Power" field="specificPower" />
    <Record label="Maximum Speed" field="maximumSpeed" />
    <Record label="Tower Turning Speed" field="towerTurningSpeed" />

  </ItemDetails>
);

const LightDetails = ({ selectedItem }) => (
  <ItemDetails
    selectedItem={selectedItem}
    getData={getLight}
    getImage={getLightImage}
  >
    <Record label="Name" field="name" />
    <Record label="Weight" field="weight" />
    <Record label="Maximum Speed" field="maximumSpeed" />
    <Record label="Engine Power" field="enginePower" />
    <Record label="Overview" field="overview" />

  </ItemDetails>
);

const PtSauDetails = ({ selectedItem }) => (
  <ItemDetails
    selectedItem={selectedItem}
    getData={getPtSau}
    getImage={getPtSauImage}
  >
    <Record label="Name" field="name" />
    <Record label="Demage" field="damage" />
    <Record label="Breaking Through" field="breakingThrough" />
    <Record label="Ammunition" field="ammunition" />
    <Record label="Attachment Time" field="attachmentTime" />

  </ItemDetails>
);

const SauDetails = ({ selectedItem }) => (
  <ItemDetails
    selectedItem={selectedItem}
    getData={getSau}
    getImage={getSauImage}
  >
    <Record label="Name" field="name" />
    <Record label="Demage" field="damage" />
    <Record label="Breaking Through" field="breakingThrough" />
    <Record label="Ammunition" field="ammunition" />
    <Record label="Communication Range" field="communicationRange" />

  </ItemDetails>
);

export { HeavyDetails, MediumDetails, LightDetails, PtSauDetails, SauDetails};
