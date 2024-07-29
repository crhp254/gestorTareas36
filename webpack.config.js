const path = require('path');

module.exports = {
    entry: './src/index.js', //Punto de entrada de la applicacion
    output: {
        filename: 'budle.js', // Nombre del archivo de salida
        path: path.resolve(_dirname, 'dist'), // Carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Regex para identificar Archivos css
                use: ['style-loader', 'css-loader'], //Loader para procesar archivos css
            },
            {
                test: /\.js$/, //Reget para identificar archivo js
                exclude: /node_modules/, //Excluir la crapeta node_modules
                use: {
                    loader: 'babel-loader', // Loader para llevar javascript moderno a JS antiguo para que sea compatible con todos los ordenadores.
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', //Generar source maps para facilitar la depuracion
    devServer: {
        contentBase: path.resolve(_dirname, 'dist'), // Carpeta desde la cual el servidor agarra los archivos
        compress: true, // Habilitar comprension gzip
        port: 9000, // Puerto del servidor de desarrollo
    },
};