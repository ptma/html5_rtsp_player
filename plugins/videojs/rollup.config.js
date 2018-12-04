import butternut from 'rollup-plugin-butternut';
import async from 'rollup-plugin-async';
import babel from 'rollup-plugin-babel';

export default
{
    input: "src/videojs.streamedian.js",
    output: {
        file: "example/videojs.ws.js"
    },
    format: "umd",
    sourceMap: true,
    plugins: [ async(),babel(),butternut() ]
}
