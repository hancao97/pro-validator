// 维度
const latitude = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
const isLatitude = (str) => latitude.test(str);

// 经度
const longitude = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;
const isLongitude = (str) => longitude.test(str);

// 自定义名称类校验
const isName = (str, {
  min = 0,
  max = Infinity,
  white = [],
  black = [],
  capital = true,
  lowercase = true,
  number = true,
  chinese = true
} = {}) => {
  const len = str.length;
  if(len < min || len > max) return false;
  const whiteSet = new Set(white); // 避免转义
  const blackSet = new Set(black);
  const charReg = new RegExp(`[${capital?'A-Z':''}${lowercase?'a-z':''}${number?'0-9':''}${chinese?'\\u4e00\-\\u9fa5':''}]`);
  for(const char of str) {
    if(whiteSet.has(char)) continue;
    if(blackSet.has(char)) return false;
    if(!charReg.test(char)) return false;
  }
  return true;
}

export default {
  isLatitude,
  isLongitude,
  isName
}