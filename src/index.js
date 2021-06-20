import { getProperty } from './property';
import { getProps, objectTest, Test } from './test';

console.log(getProperty({ a: 1, c: 'test' }, 'c'));

const t = Test(objectTest);
const c = getProps(t);

console.log(t, '\n', getProps(t));
