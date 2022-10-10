import privateJudger from "../judger/index.js";
const generator = (configs = {}) => {
  const customJudeger = { ...privateJudger };
  const { judger = [], validator = [] } = configs;
  for(const { name, func } of judger) {
    customJudeger[name] = func;
  }
  const customValidator = {};
  for(const { name, judgers, messages } of validator){
    customValidator[name] = (str) => {
      judgers.forEach((judger, index) => {
        if(!judger(str)) return messages[index];
      })
      return '';
    }
  }
  return {
    judger: customJudeger,
    validator: customValidator
  }
}

export default generator;