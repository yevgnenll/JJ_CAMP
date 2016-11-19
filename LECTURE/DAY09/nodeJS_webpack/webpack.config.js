
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
            },
            // Babel (EC6, ECMAScript 2015) -> JS 파일 ㅍ변환 -> 번들링
            {
                'test': /\.js$/,
                'exclude': /node_modules/, // rex
                // 'loader': 'babel-loader?presets[]=2015'
                'loader': 'babel-loader', // 'babel' 로 loader 생략 가능
                'query':{
                    'presets': ['es2015']
                }
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
