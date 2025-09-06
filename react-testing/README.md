# Instalación y configuración de Jest

1. Instalación de librerías
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event @babel/core @babel/preset-env @babel/preset-react babel-jest identity-obj-proxy

2. Crear jest.config.js
export default {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/fileMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
};


3. Crear fileMock.js
export default null;


4. Crear jest.setup.js
import "@testing-library/jest-dom";

if (typeof global.TextEncoder === "undefined") {
  const { TextEncoder, TextDecoder } = require("util");
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}


5. Crear .babelrc
{
    "presets": [
        ["@babel/preset-env", { "targets": { "node": "current"}}],
        ["@babel/preset-react", { "runtime": "automatic" }]
    ]
}


6. Agregar task en package.json
scripts: {
    ...,
    "test": "jest"
}

7. Agregar la carpeta de coverage al gitignore
/coverage