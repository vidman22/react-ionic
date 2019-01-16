console.log('The custom config is used');
const reactRule = [{
    test: /\.jsx$/,
    loader: "babel-loader",
    options: {
      presets: ['react']
    }
  }];
  
  module.exports = {
    module: {
      rules: reactRule
    }
  }