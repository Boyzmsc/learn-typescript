## TypeScript Compiler

In `tsconfig.json`, there are top-level properties that can set compile options.

### compileOnSave
```json
{
  "compileOnSaveDefinition": {
    "properties": {
      "compileOnSave": {
        "description": "Enable Compile-on-Save for this project.",
        "type": "boolean"
      }
    }
  }
}
```

### extends
```json
{
  "extendsDefinition": {
    "properties": {
      "extends": {
        "description": "Path to base configuration file to inherit from. Requires TypeScript version 2.1 or later.",
        "type": "string"
      }
    }
  }
}
```

### files
```json
{
  "filesDefinition": {
    "properties": {
      "files": {
        "description": "If no 'files' or 'include' property is present in a tsconfig.json, the compiler defaults to including all files in the containing directory and subdirectories except those specified by 'exclude'. When a 'files' property is specified, only those files and those specified by 'include' are included.",
        "type": "array",
        "uniqueItems": true,
        "items": {
          "type": "string"
        }
      }
    }
  }
}
```

### include
```json
{
  "includeDefinition": {
    "properties": {
      "include": {
        "description": "Specifies a list of glob patterns that match files to be included in compilation. If no 'files' or 'include' property is present in a tsconfig.json, the compiler defaults to including all files in the containing directory and subdirectories except those specified by 'exclude'. Requires TypeScript version 2.0 or later.",
        "type": "array",
        "uniqueItems": true,
        "items": {
          "type": "string"
        }
      }
    }
  }
}
```

### exclude
```json
{
  "excludeDefinition": {
    "properties": {
      "exclude": {
        "description": "Specifies a list of files to be excluded from compilation. The 'exclude' property only affects the files included via the 'include' property and not the 'files' property. Glob patterns require TypeScript version 2.0 or later.",
        "type": "array",
        "uniqueItems": true,
        "items": {
          "type": "string"
        }
      }
    }
  }
}
```

### compileOptions
* typeRoots & types
```json
{
  "typeRoots": {
    "description": "Specify multiple folders that act like `./node_modules/@types`.",
    "type": "array",
    "uniqueItems": true,
    "items": {
      "type": "string"
    },
    "markdownDescription": "Specify multiple folders that act like `./node_modules/@types`.\n\nSee more: https://www.typescriptlang.org/tsconfig#typeRoots"
  },
  "types": {
    "description": "Specify type package names to be included without being referenced in a source file.",
    "type": "array",
    "uniqueItems": true,
    "items": {
      "type": "string"
    },
    "markdownDescription": "Specify type package names to be included without being referenced in a source file.\n\nSee more: https://www.typescriptlang.org/tsconfig#types"
  }
}
```

* target
```json
{
  "target": {
    "description": "Set the JavaScript language version for emitted JavaScript and include compatible library declarations.",
    "type": "string",
    "default": "ES3",
    "anyOf": [
      {
        "enum": [
          "ES3",
          "ES5",
          "ES6",
          "ES2015",
          "ES2016",
          "ES2017",
          "ES2018",
          "ES2019",
          "ES2020",
          "ESNext"
        ]
      },
      {
        "pattern": "^([Ee][Ss]([356]|(20(1[56789]|20))|[Nn][Ee][Xx][Tt]))$"
      }
    ],
    "markdownDescription": "Set the JavaScript language version for emitted JavaScript and include compatible library declarations.\n\nSee more: https://www.typescriptlang.org/tsconfig#target"
  }
}
```

* lib
```json
{
  "lib": {
    "description": "Specify a set of bundled library declaration files that describe the target runtime environment.",
    "type": "array",
    "uniqueItems": true,
    "items": {
      ...
    },
    "markdownDescription": "Specify a set of bundled library declaration files that describe the target runtime environment.\n\nSee more: https://www.typescriptlang.org/tsconfig#lib"
  }
}
```

* outDir & outFile & rootDir
```json
{
  "outFile": {
    "description": "Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output.",
    "type": "string",
    "markdownDescription": "Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output.\n\nSee more: https://www.typescriptlang.org/tsconfig#outFile"
  },
  "outDir": {
    "description": "Specify an output folder for all emitted files.",
    "type": "string",
    "markdownDescription": "Specify an output folder for all emitted files.\n\nSee more: https://www.typescriptlang.org/tsconfig#outDir"
  },
  "rootDir": {
    "description": "Specify the root folder within your source files.",
    "type": "string",
    "markdownDescription": "Specify the root folder within your source files.\n\nSee more: https://www.typescriptlang.org/tsconfig#rootDir"
  }
}
```

* strict
```json
{
  "strict": {
    "description": "Enable all strict type checking options.",
    "type": "boolean",
    "default": false,
    "markdownDescription": "Enable all strict type checking options.\n\nSee more: https://www.typescriptlang.org/tsconfig#strict"
  }
}
```

### Reference
https://json.schemastore.org/tsconfig