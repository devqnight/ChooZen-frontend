import { formatDate } from '../tools';
import { getAge } from '../tools';
import { hasNumber } from '../tools';
import { hexToRgb } from '../tools';



it("expect new Date('2000-01-01') to be 2000-1-1",() => {
    expect(formatDate(new Date('2000-01-01'))).toBe('2000-1-1');
});

it('should format date', () => {
  var date = new Date(2018, 1, 1);
  expect(formatDate(date)).toBe("2018-2-1");
});

it('getAge should return age', () => {
  expect(getAge('2000-01-01')).toBe(22);
});

it('hasNumber should return true', () => {
  expect(hasNumber('123')).toBe(true);
});

it("hasNumber", () => {
  expect(hasNumber("abc")).toBe(false);
  expect(hasNumber("abc123")).toBe(true);
});

it("hexToRgb", () => {
  expect(hexToRgb("#ff0000")).toEqual({
    r: 255,
    g: 0,
    b: 0
  });
});