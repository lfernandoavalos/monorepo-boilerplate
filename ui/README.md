# UI Monorepo

Splitting up large codebases into separate independently versioned packages is extremely useful for code sharing. However, making changes across many repositories is messy and difficult to track, and testing across repositories gets complicated really fast.

To solve these (and many other) problems, some projects will organize their codebases into multi-package repositories. Projects like Babel, React, Angular, Ember, Meteor, Jest, and many others develop all of their packages within a single repository.

## Build With
[Lerna](https://lernajs.io/) - A tool for managing JavaScript projects with multiple packages.