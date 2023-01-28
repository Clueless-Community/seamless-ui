# Migrating from Babel

SWC's [compilation](/docs/configuration/compilation) is intended to support all ECMAScript features. The SWC CLI is designed to be a drop-in replacement for Babel:

```plaintext
$ npx babel # old
$ npx swc # new
```

SWC supports **all stage 3 proposals**, and preset-env, including bugfix transforms.
