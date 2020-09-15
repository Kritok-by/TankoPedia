export default class TankopediaService {
  _apiBase = "https://cors-anywhere.herokuapp.com/http://gallerytvr.site/api";
  // _apiBase = "http://localhost:3000";

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url} , received ${res.status}`);
    }
    return await res.json();
  };

  getAllPremium = async () => {
    const res = await this.getResource(`/premium/`);
    return res.map(this._transformPremium).slice(0, 5);
  };
  getAllHeavy = async () => {
    const res = await this.getResource(`/heavy/`);
    return res.map(this._transformHeavy).slice(0, 5);
  };
  getAllMedium = async () => {
    const res = await this.getResource(`/medium/`);
    return res.map(this._transformMedium).slice(0, 5);
  };
  getAllLight = async () => {
    const res = await this.getResource(`/light/`);
    return res.map(this._transformLight).slice(0, 5);
  };
  getAllPtSau = async () => {
    const res = await this.getResource(`/pt-sau/`);
    console.log(res)
    return res.map(this._transformPtSau).slice(0, 5);
  };
  getAllSau = async () => {
    const res = await this.getResource(`/sau/`);
    return res.map(this._transformSau).slice(0, 5);
  };

  getPremium = async (id) => {
    const premium = await this.getResource(`/premium/${id}/`);
    return this._transformPremium(premium);
  };
  getHeavy = async (id) => {
    const heavy = await this.getResource(`/heavy/${id}/`);
    return this._transformHeavy(heavy);
  };
  getMedium = async (id) => {
    const medium = await this.getResource(`/medium/${id}/`);
    return this._transformMedium(medium);
  };
  getLight = async (id) => {
    const light = await this.getResource(`/light/${id}/`);
    return this._transformLight(light);
  };
  getPtSau = async (id) => {
    const ptSau = await this.getResource(`/pt-sau/${id}/`);
    console.log(ptSau);
    return this._transformPtSau(ptSau);
  };
  getSau = async (id) => {
    const sau = await this.getResource(`/sau/${id}/`);
    return this._transformSau(sau);
  };

  getHeavyImage = ({ id }) => {
    return `https://raw.githubusercontent.com/JSDenis/gallery-tanks/master/heavy_tanks/${id}.jpg`;
  };
  getMediumImage = ({ id }) => {
    return `https://raw.githubusercontent.com/JSDenis/gallery-tanks/master/medium_tanks/${id}.jpg`;
  };
  getLightImage = ({ id }) => {
    return `https://raw.githubusercontent.com/JSDenis/gallery-tanks/master/light_tanks/${id}.jpg`;
  };
  getPtSauImage = ({ id }) => {
    return `https://raw.githubusercontent.com/JSDenis/gallery-tanks/master/pt-sau/${id}.jpg`;
  };
  getSauImage = ({ id }) => {
    return `https://raw.githubusercontent.com/JSDenis/gallery-tanks/master/sau/${id}.jpg`;
  };

  _transformPremium = (premium) => {
    return {
      id: premium.id,
      name: premium.name,
      overview: premium.overview,
      rapidity: premium.rapidity,
      strength: premium.strength,
    };
  };

  _transformHeavy = (heavy) => {
    return {
      id: heavy.id,
      name: heavy.name,
      damage: heavy.damage,
      breakingThrough: heavy.breaking_through,
      weight: heavy.weight,
      strength: heavy.strength,
      bodyArmor: heavy.body_armor,
      towerArmor: heavy.tower_armor,
    };
  };
  _transformMedium = (medium) => {
    return {
      id: medium.id,
      name: medium.name,
      damage: medium.damage,
      breakingThrough: medium.breaking_through,
      specificPower: medium.specific_power,
      maximumSpeed: medium.maximum_speed,
      towerTurningSpeed: medium.tower_turning_speed,
    };
  };
  _transformLight = (light) => {
    return {
      id: light.id,
      name: light.name,
      weight: light.weight,
      maximumSpeed: light.maximum_speed,
      enginePower: light.engine_power,
      overview: light.overview,
    };
  };
  _transformPtSau = (ps) => {
    return {
      id: ps.id,
      name: ps.name,
      damage: ps.damage,
      breakingThrough: ps.breaking_through,
      ammunition: ps.ammunition,
      attachmentTime: ps['attachment time']
    };
  };
  _transformSau = (sau) => {
    return {
      id: sau.id,
      name: sau.name,
      damage: sau.damage,
      breakingThrough: sau.breaking_through,
      ammunition: sau.ammunition,
      communicationRange: sau.communication_range
    };
  };
}
