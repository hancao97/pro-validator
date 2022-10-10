import { generator } from "../src/index.js";
const configs = {
  judger: [{
    name: 'isHancao',
    func: () => true
  }],
  validator: [{
    name: 'hancao',
    judgers: ['isHancao'],
    messages: ['我不是寒草!']
  }]
};
console.log(generator(configs));