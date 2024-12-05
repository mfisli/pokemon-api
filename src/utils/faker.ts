import { faker } from '@faker-js/faker';
import { TrainerType } from '../db/trainers.js';
import { getRandomItem } from './getRandomItem.js';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from "node:fs/promises";
import { Types } from 'mongoose';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

export const getTrainer = async (traitIdList: Types.ObjectId[]): Promise<TrainerType> => {
    return new Promise(async (resolve, reject) => {

        const gender = faker.person.sex();
        const pathPrefix = '/images/trainers/';
        const dirPath = `${pathPrefix}/${gender}/`;
        const directoryPath = path.join(__dirname, '../' + dirPath);
        let image = "";
        try {
            const files = await fs.readdir(directoryPath);
            image += getRandomItem(files);
            console.log("imagePath", image);
            resolve({
                firstName: faker.person.firstName(getSex(gender)),
                lastName: faker.person.lastName(),
                bio: faker.person.bio(),
                image: dirPath + image,
                traitIdList
            });
        } catch (error) {
            reject(console.error(error));
        }
    })
}

export const getTrainerList = async (length: number, traitIdList: Types.ObjectId[]) => {
    return Promise.all([...Array(length)]
            .map(async () => await getTrainer([getRandomItem<Types.ObjectId>(traitIdList)])))
    ;
}