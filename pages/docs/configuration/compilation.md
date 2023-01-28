# Compilation

Compilation works out of the box with SWC and does not require customization. Optionally, you can override the configuration. Here are the defaults:

```json filename=".swcrc" copy
{
  "jsc": {
    "parser": {
      "syntax": "ecmascript",
      "jsx": false,
      "dynamicImport": false,
      "privateMethod": false,
      "functionBind": false,
      "exportDefaultFrom": false,
      "exportNamespaceFrom": false,
      "decorators": false,
      "decoratorsBeforeExport": false,
      "topLevelAwait": false,
      "importMeta": false,
      "preserveAllComments": false
    },
    "transform": null,
    "target": "es5",
    "loose": false,
    "externalHelpers": false,
    // Requires v1.2.50 or upper and requires target to be es2016 or upper.
    "keepClassNames": false
  },
  "isModule": false
}
```

## env

SWC has an alternative for `preset-env`.
You can

- Set target browsers
- Use `browserslist`
- Control transforms

with `env` entry.
Note that this does not work with `jsc.target`.

### `env.targets`

Possible values:

- Query: `string`

Example:

```json filename=".swcrc" copy
{
    "jsc": {
        "parser": {
            "syntax": "typescript",
            "tsx": true,
        },
        "externalHelpers": true
    },
    "env": {
        "targets": "Chrome >= 48"
    }
}

```

- Queries: `string[]`

- Version per browser: `Map<String, Version>`

Example of targeting `chrome 79`.

```json filename=".swcrc" copy
{
    "env": {
        "targets": {
            "chrome": "79",
        }
    },
}
```

### `env.mode`

Optional.
Possible values: `"usage" | "entry"`.

### `env.debug`

Optional.
Type: Bool

Enable debug logging.

### `env.dynamicImport`

Optional.
Type: Bool

### `env.loose`

Optional.
Type: Bool

Enable loose mode.

### `env.skip`

Optional.
Type: `string[]`

### `env.include`

Optional.
Type: `string[]`

Feature or module to include.

Example of enabling `async`/`yield` transform while targeting chrome 79.

```json filename=".swcrc" copy
{
    "env": {
        "targets": {
            "chrome": "79",
        },
        "include": [
            "transform-async-to-generator",
            "transform-regenerator",
        ],
    },
}
```

### `env.exclude`

Optional.
Type: `string[]`

Feature or module to exclude.

### `env.coreJs`

Optional.
Type: `string`

```json filename=".swcrc" copy
{
    "jsc": {
        "parser": {
            "syntax": "ecmascript",
            "jsx": true
        }
    },
    "env": {
        "mode": "usage",
        "coreJs": "3.26.1"
    }
}
```

### `env.path`

Optional.
Currently noop.

### `env.shippedProposals`

Optional.
Type: Bool

### `env.forceAllTransforms`

Optional.
Type: Bool

### `env.bugfixes`

Optional.
Type: Bool

Enable bugfix passes.

## jsc.externalHelpers

```json filename=".swcrc" copy
{
  "jsc": {
    "externalHelpers": true
  }
}
```

The output code may depend on helper functions to support the target environment. By default, a helper function is inlined into the output files where it is required.

You can use helpers from an external module by enabling `externalHelpers` and the helpers code will be imported by the output files from `node_modules/@swc/helpers`.

While bundling, this option will greatly reduce your file size.

You must add `@swc/helpers` as a dependency in addition to `@swc/core`.

## jsc.parser

### typescript

```json filename=".swcrc" copy
{
  "jsc": {
    "parser": {
      "syntax": "typescript",
      "tsx": false,
      "decorators": false,
      "dynamicImport": false
    }
  }
}
```

### ecmascript

```json filename=".swcrc" copy
{
  "jsc": {
    "parser": {
      "syntax": "ecmascript",
      "jsx": false,
      "dynamicImport": false,
      "privateMethod": false,
      "functionBind": false,
      "classPrivateProperty": false,
      "exportDefaultFrom": false,
      "exportNamespaceFrom": false,
      "decorators": false,
      "decoratorsBeforeExport": false,
      "importMeta": false
    }
  }
}
```

## jsc.target

Starting from `@swc/core` v1.0.27, you can specify the target environment by using the field.

```json filename=".swcrc" copy
{
  "jsc": {
    // Disable es3 / es5 / es2015 transforms
    "target": "es2016"
  }
}
```

## jsc.loose

Starting from `@swc/core` v1.1.4, you can enable "loose" transformations by enabling `jsc.loose` which works like `babel-preset-env` [loose mode](https://2ality.com/2015/12/babel6-loose-mode.html).

```json filename=".swcrc" copy
{
  "jsc": {
    "loose": true
  }
}
```

## jsc.transform

```json filename=".swcrc" copy
{
  "jsc": {
    "transform": {
      "react": {
        "pragma": "React.createElement",
        "pragmaFrag": "React.Fragment",
        "throwIfNamespace": true,
        "development": false,
        "useBuiltins": false
      },
      "optimizer": {
        "globals": {
          "vars": {
            "__DEBUG__": "true"
          }
        }
      }
    }
  }
}
```

### jsc.transform.legacyDecorator

You can use the legacy (stage 1) class decorators syntax and behavior.

```json filename=".swcrc" copy
{
  "jsc": {
    "parser": {
      "syntax": "ecmascript",
      "decorators": true
    },
    "transform": {
      "legacyDecorator": true
    }
  }
}
```

### jsc.transform.decoratorMetadata

This feature requires `v1.2.13+`.

If you are using typescript and decorators with `emitDecoratorMetadata` enabled, you can use `swc` for faster iteration:

```json filename=".swcrc" copy
{
  "jsc": {
    "parser": {
      "syntax": "typescript",
      "decorators": true
    },
    "transform": {
      "legacyDecorator": true,
      "decoratorMetadata": true
    }
  }
}
```

### jsc.transform.react

#### jsc.transform.react.runtime

Possible values: `automatic`, `classic`. This affects how JSX source code will be compiled.

- Use `runtime: automatic` to use a JSX runtime module (e.g. `react/jsx-runtime` introduced in React 17).
- Use `runtime: classic` to use `React.createElement` instead - with this option, you must ensure that `React` is in scope when using JSX.

[Learn more here](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html).

#### jsc.transform.react.importSource

- Defaults to `react`.
- When using `runtime: automatic`, determines the runtime library to import.
- This option can be overrided with `@jsxImportSource foo`.

#### jsc.transform.react.pragma

- Defaults to `React.createElement`.
- When using `runtime: classic`, replaces the function used when compiling JSX expressions.
- This option can be overrided with `@jsx foo`.

#### jsc.transform.react.pragmaFrag

- Defaults to `React.Fragment`
- Replace the component used when compiling JSX fragments.
- This option can be overrided with `@jsxFrag foo`.

#### jsc.transform.react.throwIfNamespace

Toggles whether or not to throw an error if an XML namespaced tag name is used. For example: `<f:image />`

Though the JSX spec allows this, it is disabled by default since React's JSX does not currently have support for it.

#### jsc.transform.react.development

Toggles debug props `__self` and `__source` on elements generated from JSX, which are used by development tooling such as React Developer Tools.

This option is set automatically based on the Webpack `mode` setting when used with `swc-loader`. See [Using swc with webpack](/docs/usage-swc-loader/).

#### jsc.transform.react.useBuiltins

Use `Object.assign()` instead of `_extends`. Defaults to false.

#### jsc.transform.react.refresh

Enable [react-refresh](https://www.npmjs.com/package/react-refresh) related transform. Defaults to `false` as it's considered experimental.

Pass `refresh: true` to enable this feature, or an object with the following:

```ts
interface ReactRefreshConfig {
  refreshReg: String;
  refreshSig: String;
  emitFullSignatures: boolean;
}
```

### jsc.transform.constModules

```json filename=".swcrc" copy
{
  "jsc": {
    "transform": {
      "constModules": {
        "globals": {
          "@ember/env-flags": {
            "DEBUG": "true"
          },
          "@ember/features": {
            "FEATURE_A": "false",
            "FEATURE_B": "true"
          }
        }
      }
    }
  }
}
```

Then, source code like:

```js filename="source.js"
import { DEBUG } from "@ember/env-flags";
import { FEATURE_A, FEATURE_B } from "@ember/features";

console.log(DEBUG, FEATURE_A, FEATURE_B);
```

is transformed to:

```js filename="output.js"
console.log(true, false, true);
```

### jsc.transform.optimizer

The SWC optimizier assumes:

- It's a module or wrapped in an iife.
- Accessing (get) global variables does not have a side-effect. It is the same assumption as the google closure compiler.
- You don't add fields to literals like a numeric literal, regular expression or a string literal.
- Files are served as gzipped.

SWC will not focus on reducing the size of non-gzipped file size.

Setting this to `undefined` skips optimizer pass.

#### jsc.transform.optimizer.simplify

> Requires `v1.2.101+`

You can set this to `false` to use `inline_globals` while skipping optimizations.

```json filename=".swcrc" copy
{
  "jsc": {
    "transform": {
      "optimizer": {
        "simplify": false,
        "globals": {
          "vars": {
            "__DEBUG__": "true"
          }
        }
      }
    }
  }
}
```

#### jsc.transform.optimizer.globals

> Requires `v1.2.101+`

- `vars` - Variables to inline.
- `typeofs` - If you set `{ "window": "object" }`, `typeof window` will be replaced with `"object"`.

```json filename=".swcrc" copy
{
  "jsc": {
    "transform": {
      "optimizer": {
        "globals": {
          "vars": {
            "__DEBUG__": "true"
          }
        }
      }
    }
  }
}
```

Then, you can use it like `npx swc '__DEBUG__' --filename input.js`.

#### jsc.transform.optimizer.jsonify

> Requires `v1.1.1+`

- `minCost` - If cost of parsing a pure object literal is larger than this value, the object literal is converted to `JSON.parse('{"foo": "bar"}')`. Defaults to 1024.

```json filename=".swcrc" copy
{
  "jsc": {
    "transform": {
      "optimizer": {
        "jsonify": {
          "minCost": 0
        }
      }
    }
  }
}
```

This will change all **pure** object literals to `JSON.parse("")`.

## jsc.keepClassNames

> Requires `v1.2.50+` and target to be es2016 or higher

Enabling this option will make swc preserve original class names.

## jsc.paths

> Requires `v1.2.62+`

Syntax is identical as it of `tsconfig.json`: [learn more](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping).

Requires `jsc.baseUrl`. See below.

## jsc.baseUrl

[Learn more](https://www.typescriptlang.org/docs/handbook/module-resolution.html#base-url).

## jsc.minify

> Requires `v1.2.67+`

See [the documentation for minification](/docs/configuration/minification) for more details.

## jsc.experimental

### jsc.experimental.keepImportAssertions

Preserve import assertions.
This is experimental because import assertions are not covered by ecmascript specifications yet.

### jsc.experimental.plugins

It follows resolving rule of node.js,.

Specify the plugin name like

```json filename=".swcrc" copy
{
  "jsc": {
    "experimental": {
      "plugins": [
        ["@swc/plugin-styled-jsx", {}]
      ]
    }
  }
}
```

`styled-jsx` works because it's published as `@swc/plugin-styled-jsx`.

## jsc.preserveAllComments

Indicate that all comments should be preserved during compilation. Comments from source may be shifted in order to preserve thier relative location from source
to compiled output.
This feature is useful for transpilation that requires comments remain relatively close to the source: e.g. files under test with istanbul-ignore coverage
annotations.

## Multiple Entries

> Requires `v1.0.47+`

```json
[
  {
    "test": ".*\\.js$",
    "module": {
      "type": "commonjs"
    }
  },
  {
    "test": ".*\\.ts$",
    "module": {
      "type": "amd"
    }
  }
]
```

This make SWC compile JavaScript files as CommonJS modules and compile TypeScript files as AMD modules.

Note that `test` option can be used to transcompile only typescript files, like

```json filename=".swcrc" copy
{
  "test": ".*\\.ts$",
  "jsc": {
    "parser": {
      "syntax": "typescript",
      "tsx": false,
      "decorators": true,
      "dynamicImport": true
    }
  }
}
```

## test

Type: `Regex / Regex[]`

```json filename=".swcrc" copy
{
  "test": ".*\\.ts$",
  "jsc": {
    "parser": {
      "syntax": "typescript",
      "tsx": false,
      "decorators": true,
      "dynamicImport": true
    }
  }
}
```

## exclude

Type: `Regex / Regex[]`

```json filename=".swcrc" copy
{
  "exclude": [".*\\.js$", ".*\\.map$"],
  "jsc": {
    "parser": {
      "syntax": "typescript",
      "tsx": false,
      "decorators": true,
      "dynamicImport": true
    }
  }
}
```

## sourceMaps

> Requires `v1.2.50+`

Enable source map by adding `sourceMaps: true` or `sourceMaps: 'inline'` to the `.swcrc`.

```json filename=".swcrc" copy
{
  "sourceMaps": true
}
```

## inlineSourcesContent

> Requires `v1.2.101+`

Defaults to `true`. If you want to make `swc` store contents of files into sourcemap, you can set `inlineSourcesContent` to `true`.

```json filename=".swcrc" copy
{
  "sourceMaps": true,
  "inlineSourcesContent": true
}
```

## isModule

Possible values: `true`, `false`, `"unknown"`

Used to treat input as a module or script.
If this is set to `unknown`, it will be `Module` if it's esm and `Script` otherwise.
