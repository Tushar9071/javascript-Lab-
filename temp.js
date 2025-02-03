import fs from 'fs';
import path from 'path';

const image = fs.readFileSync(path.join('./DFD1.png'))
let data = image.toString('base64')
console.log(data)

const buffer = Buffer.from(data, 'base64')

fs.writeFileSync(path.join('./DFD1_decoded.png'), buffer)