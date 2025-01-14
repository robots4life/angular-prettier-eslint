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

Check your current NPM version.

```shell
npm --version
```

```shell
10.8.2

```

:bulb:

Depending on the current date you might have to **update** your Node and NPM version.

# 3. Create a new Angular Profile for your VS Code in your workspace

Go to a path on your computer where you keep your work projects.

Create a new folder called "angular" there.

```shell
mkdir angular
```

Open VS Code from this new `angular` folder.

VS Code has a nifty feature called **Profiles**.

<a target="_blank" href="https://code.visualstudio.com/docs/editor/profiles">https://code.visualstudio.com/docs/editor/profiles</a>

<a target="_blank" href="https://code.visualstudio.com/docs/editor/profiles#_create-a-profile">https://code.visualstudio.com/docs/editor/profiles#\_create-a-profile</a>

To create a new profile, open the Profiles editor and select the New Profile button.

This opens the New Profile form, where you can enter a profile name, choose an icon, and configure the contents that are included in the new profile.

Create a new Profile and name it **Angular**.

<img src="/docs/data/004_create_angular_profile_vs_code_Screenshot_20250110_143715.png">

Once you have created the new profile also select it for the current workspace.

<img src="/docs/data/005_use_angular_profile_Screenshot_20250110_143908.png">

A copy of the **Angular Profile** is also in this folder <a target="_blank" href="https://github.com/robots4life/angular-prettier-eslint/tree/main/vscode-profile">https://github.com/robots4life/angular-prettier-eslint/tree/main/vscode-profile</a>.

# 3.1 Import a Profile for your VS Code workspace

You can also **import** a VS Code Profile for your workspace.

Open the Profiles editor and select the dropdown to import a profile.

<img src="/docs/data/007_import_vscode_profile_Screenshot_20250110_150612.png">

In the next step you can either select a file or import the profile from a URL.

<img src="/docs/data/008_select_file_or_url_Screenshot_20250110_150704.png">

If you want to import the profile with a URL from this repository you need to use the raw link of where the profile is stored.

<a target="_blank" href="https://raw.githubusercontent.com/robots4life/angular-prettier-eslint/refs/heads/main/vscode-profile/Angular.code-profile">https://raw.githubusercontent.com/robots4life/angular-prettier-eslint/refs/heads/main/vscode-profile/Angular.code-profile</a>

`https://raw.githubusercontent.com/robots4life/angular-prettier-eslint/refs/heads/main/vscode-profile/Angular.code-profile`

Simply paste this link in the dialog and hit enter.

The newly imported profile will be listed in the view with all the profiles.

# 4. Install Angular CLI, VS Code Extensions Prettier, ESLint, Angular Language Service, Code Spell Checker and Indenticator

---

<a target="_blank" href="https://angular.dev/tools/cli/setup-local#install-the-angular-cli">https://angular.dev/tools/cli/setup-local#install-the-angular-cli</a>

```shell
npm install -g @angular/cli
```

---

<a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode</a>

**Name: Prettier - Code formatter**

Id: esbenp.prettier-vscode

Description: Code formatter using prettier

Version: 11.0.0

Publisher: Prettier

Open the `Extensions` view by pressing `Ctrl + Shift + X`.

Search for `Prettier - Code Formatter by Esben Petersen` and click `Install`.

---

<a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint</a>

**Name: ESLint**

Id: dbaeumer.vscode-eslint

Description: Integrates ESLint JavaScript into VS Code.

Version: 3.0.10

Publisher: Microsoft

---

<a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=Angular.ng-template">https://marketplace.visualstudio.com/items?itemName=Angular.ng-template</a>

**Name: Angular Language Service**

Id: Angular.ng-template

Description: Editor services for Angular templates

Version: 19.0.3

Publisher: Angular

Open the `Extensions` view by pressing `Ctrl + Shift + X`.

Search for `Angular Language Service` and click `Install`.

---

<a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker">https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker</a>

**Name: Code Spell Checker**

Id: streetsidesoftware.code-spell-checker

Description: Spelling checker for source code

Version: 4.0.34

Publisher: Street Side Software

---

<a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=SirTori.indenticator">https://marketplace.visualstudio.com/items?itemName=SirTori.indenticator</a>

**Name: Indenticator**

Id: SirTori.indenticator

Description: Highlights your current indent depth

Version: 0.7.0

Publisher: SirTori

---

After you have installed all these extensions the Extensions view in your VS Code should look like this.

<img src="/docs/data/006_installed_extensions_Screenshot_20250110_145826.png">

# 5. Create App

<a target="_blank" href="https://angular.dev/tools/cli/setup-local#create-a-workspace-and-initial-application">https://angular.dev/tools/cli/setup-local#create-a-workspace-and-initial-application</a>

Make sure you are inside the `angular` folder you previously created as the workspace for this project.

```shell
cd angular
```

Then run the following command.

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

# 6. Run the App

<a target="_blank" href="https://angular.dev/tools/cli/setup-local#run-the-application">https://angular.dev/tools/cli/setup-local#run-the-application</a>

Once you have installed the app in the `angular` folder you will see that there is a new folder called `app`.

```shell
drwxrwxr-x  4 user user 4.0K Jan 10 14:23 .
drwxr-xr-x 75 user user 4.0K Jan 10 14:05 ..
drwxrwxr-x  6 user user 4.0K Jan 10 14:24 app
drwxrwxr-x  7 user user 4.0K Jan 10 14:13 .git
```

Make sure you are inside this new `app` folder.

```shell
cd app
```

Then run the following command.

```shell
ng serve
```

You should have output similar to this on your terminal.

```shell
Initial chunk files | Names         |  Raw size
polyfills.js        | polyfills     |  90.20 kB |
main.js             | main          |  18.17 kB |
styles.css          | styles        |  95 bytes |

                    | Initial total | 108.47 kB

Application bundle generation complete. [1.550 seconds]

Watch mode enabled. Watching for file changes...
NOTE: Raw file sizes do not reflect development server per-request transformations.
  ➜  Local:   http://localhost:4200/
  ➜  press h + enter to show help
```

Open <a target="_blank" href="http://localhost:4200/">http://localhost:4200/</a> in a browser of your choice and you will be presented with the default Angular app.

:tada:

<img src="/docs/data/001_default_app_Screenshot_20240925_094448.png">

# 7. Prettier

<a target="_blank" href="https://prettier.io/">https://prettier.io/</a>

Prettier is used to format the code, ideally to look prettier, it is used to enforce a style for the syntax.

Prettier does not fix logical issues with your code, it is only used to format your code so that everyone in the team can get used to the code being presented in the same formatting style.

Cognitive load between members of the team is greatly reduced once a good formatting for the code has been found.

## 6.1 Install Prettier

Make sure you are inside the new `app` folder.

```shell
cd app
```

Install Prettier as a development dependency.

```shell
npm install --save-dev prettier
```

Here your `package.json` before you installed Prettier.

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

Here your `package.json` after you installed Prettier.

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

Create a new file `.prettierrc` in the project **root** directory of the app, so the folder `app`.

```shell
cd app
```

```shell
touch .prettierrc
```

If you don't work on the terminal just create the file in VS Code.

Add this configuration to the `.prettierrc` file.

```json
{
  "printWidth": 240,
  "singleQuote": true,
  "useTabs": false,
  "tabWidth": 2,
  "semi": true,
  "bracketSpacing": true,
  "indent_style": "space",
  "bracketSameLine": true,
  "arrowParens": "always",
  "trailingComma": "none",
  "singleAttributePerLine": true
}
```

## 6.2 Create a Basic Prettier Ignore File

You also want to create a `.prettierignore` file to specify which files or folders **should not be formatted by Prettier**.

Create a new file `.prettierignore` in the project **root** directory, so the folder `app`.

```shell
cd app
```

```shell
touch .prettierignore
```

Add this configuration to the `.prettierignore` file.

```shell
# Ignore artifacts:
dist
build
coverage

# Ignore all HTML files in the root
/*.html

# Ignore minified files
*.min.js
```

## 6.3 Run Prettier on Save

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

**Before** you can automatically format code you need to do one more thing.

Hit `Ctrl + ,`.

Click on the little file icon to open the `settings.json` file for the current active profile, your **Angular** profile.

<img src="/docs/data/002_open_profile_settings_json_Screenshot_20240925_172139.png">

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

:tada:

You can also check the `Output` for Prettier.

You can view Prettier's output to see if any errors are logged.

To open the `Output` panel hit `Ctrl + Shift + U`.

From the dropdown, select `Prettier` to check for any error messages.

<img src="/docs/data/003_prettier_task_output_Screenshot_20240925_172619.png">

Go to file and hit `Ctrl + S` while having the Prettier task `Output` panel open.

<a target="_blank" href="/app/src/app/app.component.ts">/app/src/app/app.component.ts</a>

You should see output similar to this in the panel.

```shell
["INFO" - 5:45:31 PM] Formatting file:///angular-prettier-eslint/app/src/app/app.component.ts
["INFO" - 5:45:31 PM] Using config file at /angular-prettier-eslint/app/.prettierrc
["INFO" - 5:45:31 PM] PrettierInstance:
{
  "modulePath": "/angular-prettier-eslint/app/node_modules/prettier/index.cjs",
  "messageResolvers": {},
  "version": "3.3.3"
}
["INFO" - 5:45:31 PM] Using ignore file (if present) at /angular-prettier-eslint/.prettierignore
["INFO" - 5:45:31 PM] File Info:
{
  "ignored": false,
  "inferredParser": "typescript"
}
["INFO" - 5:45:31 PM] Detected local configuration (i.e. .prettierrc or .editorconfig), VS Code configuration will not be used
["INFO" - 5:45:31 PM] Prettier Options:
{
  "filepath": "/angular-prettier-eslint/app/src/app/app.component.ts",
  "parser": "typescript",
  "useTabs": false,
  "tabWidth": 2,
  "singleQuote": true,
  "semi": true,
  "trailingComma": "es5"
}
["INFO" - 5:45:31 PM] Formatting completed in 32ms.
```

This line is important in the output.

```shell
Detected local configuration (i.e. .prettierrc or .editorconfig), VS Code configuration will not be used
```

This means that the local `.prettierrc` file you created for the project is being used to format the code according to the rules in that file.

# 8. ESLint

<a target="_blank" href="https://eslint.org/">https://eslint.org/</a>

ESLint is used to find and fix problems in your JavaScript code.

## 8.1 Install ESLint
