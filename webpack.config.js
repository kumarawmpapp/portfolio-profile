const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point of your application. Webpack starts bundling from here.
  entry: './src/index.js',

  // Output configuration: where Webpack should put the bundled files.
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory (e.g., 'dist' folder)
    filename: 'bundle.js',                 // Name of the bundled JavaScript file
    clean: true,                           // Clean the output directory before building
  },

  // Module rules: how to process different file types.
  module: {
    rules: [
      {
        // Rule for JavaScript/JSX files.
        test: /\.(js|jsx)$/,         // Apply this rule to .js and .jsx files
        exclude: /node_modules/,     // Don't process files in node_modules
        use: {
          loader: 'babel-loader',    // Use babel-loader to transpile with Babel
          options: {
            // Options for babel-loader can also be in babel.config.js
            // presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        // Rule for CSS files (including Tailwind CSS).
        test: /\.css$/,              // Apply this rule to .css files
        use: [
          'style-loader',            // Injects CSS into the DOM
          'css-loader',              // Interprets @import and url() like import/require()
          {
            loader: 'postcss-loader', // Processes CSS with PostCSS (for Tailwind)
            options: {
              postcssOptions: {
                plugins: [
                  require('@tailwindcss/postcss'),
                  require('autoprefixer'),
                ],
              },
            },
          },
        ],
      },
    ]
  },

  // Resolve extensions: allows you to import modules without specifying their extensions.
  resolve: {
    extensions: ['.js', '.jsx'], // Automatically resolve .js and .jsx extensions
  },

  // Plugins: extend Webpack's capabilities.
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use this HTML file as a template
      filename: 'index.html',          // Output HTML file name
      inject: 'body',                  // Inject bundled scripts into the <body>
    })
  ],

  // Development server configuration (for `npm start`).
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve static files from 'dist'
    },
    compress: true,                           // Enable gzip compression
    port: 3000,                               // Port for the development server
    open: true,                               // Open the browser automatically
    historyApiFallback: true,                 // Fallback to index.html for client-side routing
  }
};