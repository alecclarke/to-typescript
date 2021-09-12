# Contributing

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

When contributing to this repository, please first discuss the change you wish to make via an [issue](https://github.com/alecclarke/to-typescript/issues/new). 

## Pull Request Process

1. Fork the repo
2. Clone the repo
```
$ git clone https://github.com/<your user name>/to-typescript.git
```
3. Create a new branch for your intended changes
```
$ cd to-typescript
$ git checkout -b my-new-branch
```
4. Make your changes
5. Test your changes
6. Commit your changes
7. Open a pull request

## Commit messages

Refrenced from http://chris.beams.io/posts/git-commit/, when writing commit messages for your change, use the following guidelines to do so:

1. Separate subject from body with a blank line
2. Limit the subject line to 50 characters
3. Capitalize the subject line
4. Do not end the subject line with a period
5. Use the imperative mood in the subject line
6. Wrap the body at 72 characters

## Testing
`to-typescript` includes to test suites:
- [e2e tests](https://github.com/alecclarke/to-typescript/tree/master/src/test/e2e) for testing the entire extension workflow. Typically there's an e2e test for each codefix and each language being converted.
- [unit tests](https://github.com/alecclarke/to-typescript/tree/master/src/test/unit) for testing common uitilities and services used by the other components in the extension.

Tests are run via the [VS Code debug launch](https://code.visualstudio.com/api/working-with-extensions/testing-extension#debugging-the-tests) with the "Extension Tests" config.
