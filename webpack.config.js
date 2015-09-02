var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react-with-addons.min.js');

var config = {
  entry: [
    'webpack/hot/dev-server',
    path.resolve(__dirname, 'app/main.js')
  ],
  resolve: {
    alias: {
      'react': pathToReact
    }
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.scss$/,

        loader: "style!css!sass?outputStyle=expanded&" +
          "includePaths[]=" +
            (path.resolve(__dirname, "./bower_components")) + "&" +
          "includePaths[]=" +
            (path.resolve(__dirname, "./node_modules"))
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ],
    noParse: [pathToReact]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.webpack.js', '.web.js'],
    modulesDirectories: ['bower_components', 'node_modules']
  }
}

module.exports = config;

// module.exports = {
//   entry: './scripts/app.jsx',
//   output: {
//     filename: 'bundle.js',
//     publicPath: 'http://localhost:8090/assets'
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.jsx$/,
//         loader: 'babel'
//       },
//       {
//         test: /\.scss$/,

//         loader: "style!css!sass?outputStyle=expanded&" +
//           "includePaths[]=" +
//             (path.resolve(__dirname, "./bower_components")) + "&" +
//           "includePaths[]=" +
//             (path.resolve(__dirname, "./node_modules"))
//       },
//       {
//         test: /\.css$/,
//         loader: "style-loader!css-loader"
//       },
//       {
//         test: /\.(jpe?g|png|gif|svg)$/i,
//         loaders: [
//             'file?hash=sha512&digest=hex&name=[hash].[ext]',
//             'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
//         ]
//       }
//     ]
//   },
//   externals: {
//     'react': 'React'
//   },
//   resolve: {
//     extensions: ['', '.js', '.jsx', '.scss', '.webpack.js', '.web.js'],
//     modulesDirectories: ['bower_components', 'node_modules']
//   }
// }
