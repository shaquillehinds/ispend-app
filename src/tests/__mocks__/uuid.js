const uuid = require.requireActual("uuid");

const v4 = () => "1234";
export { v4 };
export default () => {
  return () => "1234";
};
