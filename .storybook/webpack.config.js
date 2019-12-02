const path = require('path');

module.exports = function ({ config }) {
    // Process all stories so their source can be displayed in the Storybooks UI.
    config.module.rules.push({
        test: /\.stories\.ts?$/,
        loaders: [{
            loader: require.resolve('@storybook/source-loader'),
            options: { parser: 'typescript' },
        }],
        enforce: 'pre',
    });

    // Process this project's .less styling. 
    config.module.rules.push({
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader'],
        include: path.resolve(__dirname),
    });

    return config;
};