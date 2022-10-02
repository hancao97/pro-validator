import validator from 'validator';

const basicJudger = {};
for(const key of Object.keys(validator)) {
  if(key.startsWith('is')) {
    basicJudger[key] = validator[key];
  }
}

export default {
  ...basicJudger
}