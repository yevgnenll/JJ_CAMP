
// node.js 현재 디렉토리 제공
// console.log(__dirname);

var webpack_config = {
    // define entry file path
    'entry': './src/app/app.js',
    'output': {
        // 출력파일 경로 설정
        // 'path': __dirname + '/dist',
        'publicPath': 'assets',
        'path': __dirname + '/src/public/assets',
        'filename': 'bundle.js'
    },
    // excute watch mode
    'watch': true,
    // devtool
    'devtool': 'source-map',


    // loader module
    'module': {
        'loaders': [
            {
                'test': /\.css$/,
                'loader': 'style-loader!css-loader'
            },
            {
                'test': /\.(sass|scss)$/,
                'loader': 'style-loader!css-loader!sass-loader'
            }
        ]
    },

    // webpack dev server root path
    'devServer': {
        'contentBase': __dirname + '/src/public/'
    }
};

// publize module
module.exports = webpack_config;
