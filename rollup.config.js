import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";
import pkg from "./package.json";
import postcss from "rollup-plugin-postcss";
import commonjs from '@rollup/plugin-commonjs';

const input = ["src/lib/index.js"];
const globals = {
    react: 'React',
    'react-dom': 'ReactDOM',
};

const commonjsOptions = {
    ignoreGlobal: true,
    include: /node_modules/,
    namedExports: {
        '../../node_modules/prop-types/index.js': [
            'elementType',
            'bool',
            'func',
            'object',
            'oneOfType',
            'element',
        ],
        '../../node_modules/react/jsx-runtime.js': ['jsx', 'jsxs'],
        '../../node_modules/react-is/index.js': [
            'ForwardRef',
            'isFragment',
            'isLazy',
            'isMemo',
            'Memo',
            'isValidElementType',
        ],
    },
};

export default [
    {
        // UMD
        input,
        plugins: [
            nodeResolve(),
            babel({
                babelHelpers: "bundled",
            }),
            commonjs(commonjsOptions),
            postcss(),
            // terser()
        ],
        external: Object.keys(globals),
        output: {
            file: `dist/${pkg.name}.min.js`,
            format: "umd",
            name: "sbComponentLibrary", // this is the name of the global object
            esModule: false,
            exports: "named",
            sourcemap: false,
            globals,
        },
    },
/*// ESM and CJS
    {
        input,
        plugins: [nodeResolve()],
        output: [
            {
                dir: "dist/esm",
                format: "esm",
                exports: "named",
                sourcemap: true,
            },
            {
                dir: "dist/cjs",
                format: "cjs",
                exports: "named",
                sourcemap: true,
            },
        ],
    },*/
];
