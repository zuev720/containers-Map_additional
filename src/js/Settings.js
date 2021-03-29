import objSettings from './objSettings';

export default class Settings {
  constructor() {
    this._settings = new Map();
    objSettings.forEach((element) => {
      for (const [key, value] of Object.entries(element)) {
        this._settings.set(key, value[0]);
      }
    });
  }

  setSettings(setting, value) {
    if (this._settings.has(setting)) {
      const findObject = objSettings.find((element) => element[setting]);
      for (const arrValues of Object.values(findObject)) {
        if (arrValues.includes(value)) {
          this._settings.delete(setting);
          this._settings.set(setting, value);
        } else {
          throw new Error('Таких настроек не существует!');
        }
      }
    } else {
      throw new Error('Таких настроек не существует!');
    }
  }

  get settings() {
    return this._settings;
  }
}
