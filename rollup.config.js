import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import {babel} from '@rollup/plugin-babel';
import dts from 'rollup-plugin-dts';

export default [
    {
        input: ["./src/index.ts"],
        output: [
            {
                file: "lib/index.js",
                format: "cjs",
                exports: "named"
            },
            {
                file: "lib/index-esm.js",
                format: "es",
                exports: "named"
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({
                useTsconfigDeclarationDir: true
            }),
            // terser(),
            babel({ babelHelpers: 'bundled' })
        ]
    },
    {
        input: 'lib/types/index.d.ts',
        output: [{ file: 'lib/index.d.ts', format: "esm" }],
        plugins: [dts()]
    }
]
