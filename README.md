# Stack
- Webpack (more: petehunt/webpack-howto)
- ES7 (throught babel loader)
- Material Design
- Firebase (backend in the cloud)
- Flux (with Alt.js)
- React-Router

# Recap
- Builds/Packaging with Webpack
  - replace gulp/grunt
  - packages everything
  - ES7
- Material design with Material-UI
- Backend with Firebase
- Flux with Alt
  - Less boilerplate
  - ES7 decorators
- Routing with React-Router

# Babel preset
In tutorial use the old version Babel (v5), so in .babelrc they use deprecate
option `stage: 0` (see package config in: [https://github.com/hendrikswan/react-stack/blob/master/package.json])
for new version of Babel (v6), we need to install presets: react, es2015, stage-0 by
```
npm i babel-preset-es2015 babel-preset-react babel-preset-stage-0 --save-dev
```
and set .babelrc to
```
{
  "presets": ["react", "es2015", "stage-0"]
}
```

# React hot loader
to run server use webpack-dev-server by `npm i -g webpack-dev-server`
React-hot-loader is very impressive, it's just change only updated data
but not update state or customize attribute we do in devtool

# Flux && Alt
- `action` event that get fire
- `dispatcher` event broker
- `store` event state
- `view` the one that change and fire event as an action 
