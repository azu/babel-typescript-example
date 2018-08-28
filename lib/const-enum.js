export let NormalEnum;

(function (NormalEnum) {
  NormalEnum[NormalEnum["a"] = 0] = "a";
  NormalEnum[NormalEnum["b"] = 1] = "b";
  NormalEnum[NormalEnum["c"] = 2] = "c";
})(NormalEnum || (NormalEnum = {}));