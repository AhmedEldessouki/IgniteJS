/// <binding ProjectOpened='Watch - Development' /> 
"use strict";

module.exports = {
    entry: {
        "Lesson_19/CW/build/bundle_2": "./Lesson_19/CW/jsx/2.jsx",
        "Lesson_19/CW/build/bundle_3": "./Lesson_19/CW/jsx/3.jsx"
    } ,
           
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query:
                {
                       presets: ['react']
                }
            }
        ]
    }
};