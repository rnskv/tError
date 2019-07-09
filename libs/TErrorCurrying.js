import TError from "./TError";

const TErrorCurrying = (groupParams, params) => {
  return new TError({
    groupParams,
    ...params
  }).data;
};

export default TErrorCurrying;
