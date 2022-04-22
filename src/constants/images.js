//For absolute import
const Images = {
  logo: require("assets/images/logo.jpg"),
  loading: require("assets/images/loading.gif"),
  error: require("assets/images/error.png"),
};

//for dynamic import
const importAll = (require) =>
  require.keys().reduce((acc, next) => {
    acc[next.replace("./", "")] = require(next);
    return acc;
  }, {});

export const images = importAll(
  require.context("assets/images", false, /\.(png|jpe?g|svg)$/)
);

export default Images;
