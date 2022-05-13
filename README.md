# Lint to the Future 🚀

LintToTheFuture (LTTF) is a modern way to progressively update your entire codebase to the latest best practices. It has a number of tools that work together to manage linting rules and provides a sustainable way to add new rules to existing codebases without slowing down your development

## Installation

You should install this as a dev-dependency of your project

```
npm i --save-dev lint-to-the-future
```

on its own LTTF doesn't do anything by itself, you should also install some plugins. The first plugin written for LTTF was the eslint plugin which you can install using the following:

```
npm i --save-dev lint-to-the-future-eslint
```

### Plugins

LTTF will automatically load each plugin (any package you have installed locally starting with `lint-to-the-future-`) and run them in order.

You can write your own plugin, or use one from the existing list:

- For Ember apps: [`lint-to-the-future-ember-template`](https://github.com/mansona/lint-to-the-future-ember-template)
- For all JavaScript apps: [`lint-to-the-future-eslint`](https://github.com/mansona/lint-to-the-future-eslint)
- For styles [`lint-to-the-future-stylelint`](https://github.com/mansona/lint-to-the-future-stylelint)

To find out some more information about how to write your own plugin, check out the [plugin docs](./docs/plugin-development.md).

## Usage

This project is still in alpha phase, so we will add new sub-sections to Usage as they have been implemented. If you are interested in this project feel free to reach out to me on Twitter at [@real_ate](https://twitter.com/real_ate).

### Adding file-based lint ignores to your project

Using the `eslint` plugin as an example: running the cli application will automatically run `eslint` on your codebase and add file-based ignores to that file.

```
npx lint-to-the-future ignore
```

After running this process you should be able to run `eslint` on your project again and it will show no more errors.

**Note:** we don't currently add file-based ignores for warnings as they don't generally break CI in the most common configurations.

## Frequently Asked Questions

### Why do you use file based ignores instead of line-based or projected-wide

The point of LintToTheFuture is to allow you to **progressively** update your codebase using new lint rules without overwhelming you with the task. You can easily ignore lint rules using project-based ignores in your config files but that doesn't prevent you from making the same errors in new files.

We chose to do the ignores on a file basis as it is a perfect balance and it means that the tracking/graphing aspects of LintToTheFuture provide you with achievable goals, especially in large codebases.

### Why would you run this instead of just running `lint fix` to fix as many problems as possible

This tool is designed to make it as easy as possible to add a new lint rule to your project and having a massive PR that changes the code in hundreds of files is not very easy to review. I talk about this in a blog post about [keeping a clean git history](https://simplabs.com/blog/2021/05/26/keeping-a-clean-git-history/), but if you want to add a new lint rule to a project you should consider running lint-to-the-future to add your ignores and then either remove each type of ignore while fixing all files in a follow up PR or remove them one file at a time (depending on how big your project is)

This is especially important if you're in the middle of a big upgrade PR where you are upgrading dependencies (and sometimes code if you're using something like [ember-cli-update](https://github.com/ember-cli/ember-cli-update)) because you don't want to make an already big PR even bigger.
