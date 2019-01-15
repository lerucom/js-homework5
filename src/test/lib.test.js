import {calculateZodiacSign} from "../js/lib";

test('Чтобы узнать знак зодиака введите ', () => {
    const day = 14;
    const month = 'Ноябрь';
    const result = calculateZodiacSign(day, month);
    expect(result).toBe('Скорпион');
});