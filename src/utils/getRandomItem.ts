export const getRandomItem = <T>(list: Array<T>): T =>
    list[Math.floor(Math.random() * list.length)]
