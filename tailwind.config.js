import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";



const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",

        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            filter: ["responsive"],
            backdropFilter: ["responsive"],
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    darkMode: "class",
    plugins: [nextui(), forms(), require('@tailwindcss/forms'),
],
};
