import { Types } from 'mongoose';

const getObjectIdList = (list: string[]) => list.map(id => new Types.ObjectId(id));

export default getObjectIdList;