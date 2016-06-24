/*
 * Webpack Config
 */

module.exports = {

  // Entry
  entry:[
    './app/app.jsx'
  ],

  //Output
  output: {
    path: __dirname,
    filename:'./public/bundle.js'
  },

  //Code Transformations
  resolve:{
    root:__dirname,
    alias:{
      Main:'app/components/Main.jsx',
      Nav:'app/components/Nav.jsx',
      Weather:'app/components/Weather.jsx',
      About:'app/components/About.jsx',
      Examples:'app/components/Examples.jsx',
      Container:'app/components/Container.jsx',
      WeatherForm:'app/components/WeatherForm.jsx',
      WeatherInfo:'app/components/WeatherInfo.jsx',
      openWeatherMap:'app/api/openWeatherMap.jsx',
      Loader:'app/components/Loader.jsx',
      ErrorMessage:'app/components/ErrorMessage.jsx',
    },
    extensions:['','.js','.jsx']
  },

  //module: loader
  module:{
    loaders:[
      {
        loader:'babel-loader',
        query:{
          presets:['react','es2015','stage-0']
        },
        test:/\.jsx?$/,
        exclude:/(node_modules|bower_components)/
      }
    ]
  },

  //Dev Tools
  devtool:'cheap-module-eval-source-map'
};
