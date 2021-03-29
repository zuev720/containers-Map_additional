import Settings from '../js/Settings';

it('При создании экземпляра класса дефолтные настройки должны совпадать', () => {
  const classSettings = new Settings();
  const result = [
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ];
  expect([...classSettings.settings]).toEqual(result);
});

it('Заданные пользователем настройки должны совпадать', () => {
  const classSettings = new Settings();
  classSettings.setSettings('theme', 'dark');
  classSettings.setSettings('music', 'chillout');
  classSettings.setSettings('difficulty', 'hard');
  const result = [
    ['theme', 'dark'],
    ['music', 'chillout'],
    ['difficulty', 'hard'],
  ];
  expect([...classSettings.settings]).toEqual(result);
});

it('Попытка задать пользователем несуществующих настроек должна выбрасывать ошибку', () => {
  const error = 'Таких настроек не существует!';
  expect(() => new Settings().setSettings('music', 'hip-hop')).toThrowError(error);
  expect(() => new Settings().setSettings('haha', 'hihi')).toThrowError(error);
});
