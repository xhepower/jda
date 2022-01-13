const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  // ... Configuración de empaquetado
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'development',
  module: {
    rules: [
      // Reglas para babel
      {
        test: /\.js$|jsx/,
        use: { loader: 'babel-loader' },
        exclude: /node_modules/,
      },
      // Reglas para HTML loader
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|svg|jpeg|webp)$/,
        /*aquí en test agregas la expresión regular para procesar los diferentes tipos de imagenes que tengas.*/
        type: 'asset/resource',
        generator: {
          filename: 'assets/pictures/[hash][ext]',
          /*aquí en filename pones la carpeta en donde quieres que se guarden tus imagenes (le agrego el [hash] para evitar problemas con el cache, además [ext] hace referencia a la extensión del archivo que se haya procesado).*/
        },
      },
    ],
  },
  plugins: [
    //... Configuración de plugins
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devServer: {
    allowedHosts: path.join(__dirname, 'dist'), // contentBase corresponde a webpack 4
    // ahora en Webpack 5 se usa allowedHosts
    // créditos al compañero Fabian Rivera Restrepo
    port: 3005,
    compress: true,
    historyApiFallback: true,
  },
};
