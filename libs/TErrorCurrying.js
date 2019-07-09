import TError from "./TError";

const TErrorCurrying = (groupParams, params) => {
  return new TError({
    groupParams,
    ...params
  }) ;
};

export default TErrorCurrying;
