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
v20.17.0
```

```shell
npm --version
```

```shell
10.8.2

```

:bulb:

Depending on the current date you might have to **update** your Node and NPM version.

# 3. Install Angular CLI, VS Code Angular Language Service and Code Spell Checker Extensions

<a target="_blank" href="https://angular.dev/tools/cli/setup-local#install-the-angular-cli">https://angular.dev/tools/cli/setup-local#install-the-angular-cli</a>

```shell
npm install -g @angular/cli
```

<a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=Angular.ng-template">https://marketplace.visualstudio.com/items?itemName=Angular.ng-template</a>

**Name: Angular Language Service**

Id: Angular.ng-template

Description: Editor services for Angular templates

Version: 18.2.0

Publisher: Angular

VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=Angular.ng-template

Open the `Extensions` view by pressing `Ctrl + Shift + X`.

Search for `Angular Language Service` and click `Install`.

<a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode</a>

**Name: Prettier - Code formatter**

Id: esbenp.prettier-vscode

Description: Code formatter using prettier

Version: 11.0.0

Publisher: Prettier

VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

Open the `Extensions` view by pressing `Ctrl + Shift + X`.

Search for `Prettier - Code Formatter by Esben Petersen` and click `Install`.

<a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker">https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker</a>

**Name: Code Spell Checker**

Id: streetsidesoftware.code-spell-checker

Description: Spelling checker for source code

Version: 3.0.1

Publisher: Street Side Software

VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker

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

# 6. Prettier

<a target="_blank" href="https://prettier.io/">https://prettier.io/</a>

Prettier is used to format the code, ideally to look prettier, it is used to enforce a style for the syntax.

## 6.1 Install Prettier

Go to the project \*_root_ directory, so the folder `app`.

```shell
cd app
```

Install Prettier as a development dependency.

```shell
npm install --save-dev prettier
```

<a target="_blank" href="/app/package.json">/app/package.json</a>

**Before**

```json
{
  "name": "app",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^18.2.0",
    "@angular/common": "^18.2.0",
    "@angular/compiler": "^18.2.0",
    "@angular/core": "^18.2.0",
    "@angular/forms": "^18.2.0",
    "@angular/platform-browser": "^18.2.0",
    "@angular/platform-browser-dynamic": "^18.2.0",
    "@angular/router": "^18.2.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.14.10"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^18.2.5",
    "@angular/cli": "^18.2.5",
    "@angular/compiler-cli": "^18.2.0",
    "@types/jasmine": "~5.1.0",
    "jasmine-core": "~5.2.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "typescript": "~5.5.2"
  }
}
```

**After**

```json
{
  "name": "app",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^18.2.0",
    "@angular/common": "^18.2.0",
    "@angular/compiler": "^18.2.0",
    "@angular/core": "^18.2.0",
    "@angular/forms": "^18.2.0",
    "@angular/platform-browser": "^18.2.0",
    "@angular/platform-browser-dynamic": "^18.2.0",
    "@angular/router": "^18.2.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.14.10"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^18.2.5",
    "@angular/cli": "^18.2.5",
    "@angular/compiler-cli": "^18.2.0",
    "@types/jasmine": "~5.1.0",
    "jasmine-core": "~5.2.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "prettier": "^3.3.3", <=== Prettier is now installed as development dependency
    "typescript": "~5.5.2"
  }
}

```

## 6.1 Create a Basic Prettier Configuration File

Create a configuration file for Prettier to define the formatting rules.

Create a new file `.prettierrc` in the project **root** directory, so the folder `app`.

```shell
cd app
```

```shell
touch .prettierrc
```

If you don't work on the terminal just create the file in VS Code.

Add some basic formatting rules to the file.

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

## 6.2 Run Prettier on Save

<a target="_blank" href="https://code.visualstudio.com/api/ux-guidelines/command-palette">https://code.visualstudio.com/api/ux-guidelines/command-palette</a>

Open the VS Code Command Palette

`Ctrl + Shift + P`

Type `Format Document With...`.

Then select `Configure Default Formatter` and choose `Prettier - Code Formatter`.

The project you are working on should have a `.vscode` **folder** under the project **root**.

So in the folder `app` there should already be a `.vscode` folder.

This folder has configuration files that tell VS Code how to deal with the current repository you are working on.

Currently this folder has 3 files in it.

```shell
.vscode
├── extensions.json
├── launch.json
└── tasks.json
```

Add a new file `settings.json` in this `.vscode` folder.

```shell
cd app

cd .vscode

touch settings.json
```

```shell
.vscode
├── extensions.json
├── launch.json
├── settings.json <=== new file
└── tasks.json
```

<a target="_blank" href="/app/.vscode/settings.json">/app/.vscode/settings.json</a>

Add this configuration to the `settings.json` file.

```json
{
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.cursorBlinking": "smooth"
}
```

Now go to any TypeScript, JavaScript, HTML, CSS or JSON file and add a few tabs at a random place before some code.

Hit `Ctrl + S`.

You will see how the code is automatically formatted.

If the code is not formatted then you most possibly have a global `settings.json` file in your VS Code profile.

<a target="_blank" href="https://code.visualstudio.com/docs/editor/profiles">https://code.visualstudio.com/docs/editor/profiles</a>

Hit `Ctrl + ,`.

Click on the little file icon to open the `settings.json` file for the current active profile.

<img src="/docs/data/002_open_profile_settings_json_Screenshot_20240925_172139.png">

If you have not configured profiles then this is most likely your `Default` profile.

Profiles are a great way to configure VS Code, check them out and get your own going.

Also paste this configuration in there.

```json
{
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.cursorBlinking": "smooth"
}
```

Now go to any TypeScript, JavaScript, HTML, CSS or JSON file and add a few tabs at a random place before some code.

Hit `Ctrl + S`.

You will see how the code is automatically formatted.

You can also check the `Output` for Prettier.

You can view Prettier's output to see if any errors are logged.

To open the `Output` panel hit `Ctrl + Shift + U`.

From the dropdown, select `Prettier` to check for any error messages.

<img src="/docs/data/003_prettier_task_output_Screenshot_20240925_172619.png">
