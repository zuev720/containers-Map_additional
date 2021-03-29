import Settings from './src/js/Settings';

const classSettings = new Settings();
classSettings.setSettings('music', 'chillout');
classSettings.setSettings('difficulty', 'hard');
console.log(classSettings.settings);
