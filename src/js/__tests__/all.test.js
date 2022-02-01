/* eslint-disable no-undef */
import Character from '../character';
import Daemon from '../daemon';
import Magician from '../magician';

test('smallNameLength', () => {
  const received = () => new Character('O', 'Daemon');
  expect(received).toThrowError('Имя героя должно состоять от 2 до 10 символов.');
});

test('bigNameLength', () => {
  const received = () => new Character('aaaaaaaaaaaaaa', 'Daemon');
  expect(received).toThrowError('Имя героя должно состоять от 2 до 10 символов.');
});

test('typeError', () => {
  const received = () => new Character('Lala', 'Dambledore');
  expect(received).toThrowError('Выбранный тип не существует.');
});

test('check attack + stoned', () => {
  const daemon = new Daemon('boooo');
  daemon.stoned = true;
  daemon.attack = 100;
  daemon.distance = 2;
  expect(daemon.attack).toBe(85);
});

test('check attack without stoned', () => {
  const magician = new Magician('Garry');
  magician.stoned = false;
  magician.attack = 200;
  magician.distance = 2;
  expect(magician.attack).toBe(180);
});
