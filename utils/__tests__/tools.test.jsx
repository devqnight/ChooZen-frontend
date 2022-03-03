import { formatDate } from '../tools';

it("expect new Date('2000-01-01') to be 2000-1-1",() => {
    expect(formatDate(new Date('2000-01-01'))).toBe('2000-1-1');
});