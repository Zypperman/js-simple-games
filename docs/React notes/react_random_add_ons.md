# Random Add-ons to react learn page

- tldr, react is a way to modularize websites.
- tailwind css: do everything from the class, don't ever touch the css file. just use pre-defined functionality from tailwind css do the work for you.

## Quickstart (<https://react.dev/learn>)

- `export` ( [docs here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) | [video here](https://www.youtube.com/watch?v=cRHQNNcYf6s) )
    - basically declares what functions will be available whe you export.

    - `export default` &#8212; is the one thing that will be imported from the file, `export` alone just means you can access it if you want to. You can only have 1 expression with `export default`, but multiple expressions with `export`.

    - `import <importName> from './relative_filepath'` will just retrieve the default export.
        - to retrieve from absolute filepath, use `/abs_filepath`.
        - to retrieve non-default stuff, use `import {nonDefaultValues} from "filepath"`.
            - rename them by doing `import {function as function2} from "filepath"`.

    - for older websites that don't support the latest es standard aka are pre 2018, you can use the tag `nomodule` to have older es versions interpret tags with that kind of script.
        - alternatively, just use babel.js to do the conversion for you.

- `async` and `defer` for html
    - ( [docs here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) | [video here](https://youtu.be/BMuFBYw91UQ?si=fzckUpmY22QT2o_J) | [video here for async await](https://youtu.be/V_Kr9OSfDeU?si=LweW--m0T8dFcXlT) )

    - basically we use this to indicate when stuff should be allocated to the background.
    - context: as you load html markup, when images are loaded, that process is thrown into the background and we continue with the rest of the code.
    - js can do that only if you specify for it as you go down your html code.
        - async will download the resources then execute.
            - but the async code will load in a random order.
        - defer will render js stuff after all html has parsed and loaded.
            - good if some packages have dependencies to work.

- `async` and `await` for js
    -

## Tic-tac-toe tutorial (<https://react.dev/learn/tutorial-tic-tac-toe>)

- project structure with raw react is legit just:

```txt

```
