import { faker } from '@faker-js/faker';
import { TrainerType } from '../db/trainers.js';
import { getRandomItem } from './getRandomItem.js';

const getSex = (gender: string) => {
    switch (gender) {
        case 'male':
            return 'male'
        case 'female':
            return 'female'
        default:
            return undefined
    }
}

export const getTrainer = (traitIdList: string[]): TrainerType => {
    const gender = faker.person.sex();

    return {
        firstName: faker.person.firstName(getSex(gender)),
        lastName: faker.person.lastName(),
        bio: faker.person.bio(),
        traitIdList
    }
}

export const getTrainerList = (length: number, traitIdList: string[]): TrainerType[] => {
    return [...Array(length)].map(() => getTrainer([getRandomItem<string>(traitIdList)]));
}