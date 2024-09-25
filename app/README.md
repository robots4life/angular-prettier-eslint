<details>

<summary>Default Readme</summary>

<hr>

##### App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.5.

##### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

##### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

##### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

##### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

##### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

##### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

<hr>

</details>

# 1. Angular Prettier Eslint

This project aims to provide sane defaults with regards to using Prettier and Eslint when working with Angular in a team.

<a target="_blank" href="https://prettier.io/">https://prettier.io/</a>

<a target="_blank" href="https://eslint.org/">https://eslint.org/</a>

# 2. Node Prerequisites

You need to have Node installed locally and available on your terminal.

<a target="_blank" href="https://nodejs.org/en">https://nodejs.org/en</a>

:bulb:

To easily install Node and to switch between installed versions of Node **at ease** use just use **nvm**.

<a target="_blank" href="https://github.com/nvm-sh/nvm">https://github.com/nvm-sh/nvm</a>

Check your current Node version.

```shell
node --version
```

```shell
v20.9.0
```

:bulb:

Depending on the current date you might have to **update** your Node version.


# 3. Install Angular CLI



<a target="_blank" href="https://angular.dev/tools/cli/setup-local#install-the-angular-cli">https://angular.dev/tools/cli/setup-local#install-the-angular-cli</a>

```shell
npm install -g @angular/cli
```

# 4. Create App

<a target="_blank" href="https://angular.dev/tools/cli/setup-local#create-a-workspace-and-initial-application">https://angular.dev/tools/cli/setup-local#create-a-workspace-and-initial-application</a>

```shell
ng new app
```

Options

```shell
Would you like to share pseudonymous usage data about this project with the Angular Team
at Google under Google's Privacy Policy at https://policies.google.com/privacy. For more
details and how to change this setting, see https://angular.dev/cli/analytics.

no

Global setting: disabled

Local setting: No local workspace configuration file.

Effective status: disabled

? Which stylesheet format would you like to use? CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ]

? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? no

CREATE app/README.md (1064 bytes)
CREATE app/.editorconfig (274 bytes)
CREATE app/.gitignore (587 bytes)
CREATE app/angular.json (2578 bytes)
CREATE app/package.json (1035 bytes)
CREATE app/tsconfig.json (1012 bytes)
CREATE app/tsconfig.app.json (424 bytes)
CREATE app/tsconfig.spec.json (434 bytes)
CREATE app/.vscode/extensions.json (130 bytes)
CREATE app/.vscode/launch.json (470 bytes)
CREATE app/.vscode/tasks.json (938 bytes)
CREATE app/src/main.ts (250 bytes)
CREATE app/src/index.html (289 bytes)
CREATE app/src/styles.css (80 bytes)
CREATE app/src/app/app.component.css (0 bytes)
CREATE app/src/app/app.component.html (19903 bytes)
CREATE app/src/app/app.component.spec.ts (907 bytes)
CREATE app/src/app/app.component.ts (299 bytes)
CREATE app/src/app/app.config.ts (310 bytes)
CREATE app/src/app/app.routes.ts (77 bytes)
CREATE app/public/favicon.ico (15086 bytes)

✔ Packages installed successfully.

Directory is already under version control. Skipping initialization of git.
```

# 5. Run the App

<a target="_blank" href="https://angular.dev/tools/cli/setup-local#run-the-application">https://angular.dev/tools/cli/setup-local#run-the-application</a>

```shell
ng serve
```

Open `http://localhost:4200/` in a browser of your choice.

<img src="/docs/data/001_default_app_Screenshot_20240925_094448.png">