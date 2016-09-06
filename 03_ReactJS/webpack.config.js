/// <binding ProjectOpened='Watch - Development' /> 
"use strict";

module.exports = {
    entry: {

        // Lesson 19
        "Lesson_19/CW/build/bundle_2": "./Lesson_19/CW/jsx/2.jsx",
        "Lesson_19/CW/build/bundle_3": "./Lesson_19/CW/jsx/3.jsx",

        "Lesson_19/HW/build/bundle_1": "./Lesson_19/HW/jsx/1.jsx",
        "Lesson_19/HW/build/bundle_2": "./Lesson_19/HW/jsx/2.jsx",
        "Lesson_19/HW/build/bundle_3": "./Lesson_19/HW/jsx/3.jsx"


        // Lesson 20
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