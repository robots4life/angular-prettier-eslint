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
v22.14.0
```

Check your current NPM version.

```shell
npm --version
```

```shell
10.9.2

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

## 3.1 Import a Profile for your VS Code workspace

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

**Angular CLI**

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

In VS Code you can also install the extension via these two commands.

```shell
Ctrl + Shift + P
```

```shell
ext install esbenp.prettier-vscode
```

---

<a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint</a>

**Name: ESLint**

Id: dbaeumer.vscode-eslint

Description: Integrates ESLint JavaScript into VS Code.

Version: 3.0.10

Publisher: Microsoft

In VS Code you can also install the extension via these two commands.

```shell
Ctrl + Shift + P
```

```shell
ext install dbaeumer.vscode-eslint
```

---

<a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=Angular.ng-template">https://marketplace.visualstudio.com/items?itemName=Angular.ng-template</a>

**Name: Angular Language Service**

Id: Angular.ng-template

Description: Editor services for Angular templates

Version: 19.0.3

Publisher: Angular

Open the `Extensions` view by pressing `Ctrl + Shift + X`.

Search for `Angular Language Service` and click `Install`.

In VS Code you can also install the extension via these two commands.

```shell
Ctrl + Shift + P
```

```shell
ext install Angular.ng-template
```

---

<a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker">https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker</a>

**Name: Code Spell Checker**

Id: streetsidesoftware.code-spell-checker

Description: Spelling checker for source code

Version: 4.0.34

Publisher: Street Side Software

In VS Code you can also install the extension via these two commands.

```shell
Ctrl + Shift + P
```

```shell
ext install streetsidesoftware.code-spell-checker
```

**Code Spell Checker has Dictionaries for Languages**

<a target="_blank" href="https://github.com/streetsidesoftware/cspell-dicts">https://github.com/streetsidesoftware/cspell-dicts</a>

First of all let's have a look at your globally installed packages.

Open a terminal and type the following command.

```shell
npm list -g --depth=0
```

<a target="_blank" href="https://cspell.org/docs/installation">https://cspell.org/docs/installation</a>

```shell
npm install -g cspell@latest
```

This will list you all the packages that are currently installed globally for the current version of Node that you are running.

If you switch your Node version do not forget to install the packages you like or need to have installed globally for that Node version.

Here is an example output on a Linux system that uses **Node Version Manager**.

**Node Version Manager** is a **very handy tool** that very easily lets you manage the current version of Node for your development environment.

If you are not using **Node Version Manager** you are wasting your own time.

<a target="_blank" href="https://github.com/nvm-sh/nvm">https://github.com/nvm-sh/nvm</a>

From the output we can see that Node version 22.14.0 is used and `@angular/cli@19.2.1` as well as `npm@10.9.2` are **globally** installed packages.

```shell
/home/user/.nvm/versions/node/v22.14.0/lib
├── @angular/cli@19.2.1
└── npm@10.9.2
```

For **Code Spell Checker** to be able to correct spelling in different languages you need to install the corresponding dictionaries as global packages.

Let's install the following dictionaries.

<a target="_blank" href="https://github.com/streetsidesoftware/cspell-dicts/tree/main/dictionaries/de_CH">https://github.com/streetsidesoftware/cspell-dicts/tree/main/dictionaries/de_CH</a>

```shell
npm install -g @cspell/dict-de-ch
```

```shell
cspell link add @cspell/dict-de-ch
```

```shell
npm list -g --depth=0
```

```shell
Adding:
filename                                                                                   | errors
/home/user/.nvm/versions/node/v22.14.0/lib/node_modules/@cspell/dict-de-ch/cspell-ext.json |
```

```shell
npm install -g @cspell/dict-en-gb
```

```shell
cspell link add @cspell/dict-en-gb
```

```shell
npm list -g --depth=0
```

You terminal will more or less look like this.

```shell
user@userbox  ~  npm install -g cspell@latest

added 121 packages in 1s

14 packages are looking for funding
  run `npm fund` for details

user@userbox  ~  npm list -g --depth=0
/home/user/.nvm/versions/node/v22.14.0/lib
├── @angular/cli@19.2.1
├── cspell@8.17.5
└── npm@10.9.2


user@userbox  ~  npm install -g @cspell/dict-de-ch

added 1 package in 242ms

user@userbox  ~  npm list -g --depth=0
/home/user/.nvm/versions/node/v22.14.0/lib
├── @angular/cli@19.2.1
├── @cspell/dict-de-ch@1.2.3
├── cspell@8.17.5
└── npm@10.9.2


user@userbox  ~  cspell link add @cspell/dict-de-ch
Adding:
filename                                                                                   | errors
/home/user/.nvm/versions/node/v22.14.0/lib/node_modules/@cspell/dict-de-ch/cspell-ext.json |

user@userbox  ~  npm install -g @cspell/dict-en-gb

added 1 package in 1s

user@userbox  ~  cspell link add @cspell/dict-en-gb
Adding:
filename                                                                                                       | errors
/home/user/.nvm/versions/node/v22.14.0/lib/node_modules/cspell/node_modules/@cspell/dict-en-gb/cspell-ext.json |

user@userbox  ~  npm list -g --depth=0
/home/user/.nvm/versions/node/v22.14.0/lib
├── @angular/cli@19.2.1
├── @cspell/dict-de-ch@1.2.3
├── @cspell/dict-en-gb@4.1.58
├── cspell@8.17.5
└── npm@10.9.2
```

You have now installed the **Swiss German** and **British English** dictionaries for **Code Spell Checker**.

If you like to remove packages from your global installation you can use these commands. Do not specify a version number when removing global packages as that will fail with their removal.

```shell
npm uninstall -g @cspell/dict-de-ch

npm uninstall -g @cspell/dict-en-gb

npm uninstall -g cspell

npm uninstall -g @angular/cli
```

On Linux you can check the `~/.config/cspell/cspell.json` file for a list of imported dictionaries.

```json
{
  "import": [
    "/home/user/.nvm/versions/node/v22.14.0/lib/node_modules/@cspell/dict-de-ch/cspell-ext.json",
    "/home/user/.nvm/versions/node/v22.14.0/lib/node_modules/cspell/node_modules/@cspell/dict-en-gb/cspell-ext.json"
  ]
}
```

Update this file if you remove globally installed dictionaries as you will otherwise try to import a dictionary that is not installed and that will lead to an error.

---

<a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=SirTori.indenticator">https://marketplace.visualstudio.com/items?itemName=SirTori.indenticator</a>

**Name: Indenticator**

Id: SirTori.indenticator

Description: Highlights your current indent depth

Version: 0.7.0

Publisher: SirTori

In VS Code you can also install the extension via these two commands.

```shell
Ctrl + Shift + P
```

```shell
ext install SirTori.indenticator
```

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

## 7.1 Install Prettier

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

## 7.2 Create a Basic Prettier Configuration File

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

## 7.3 Create a Basic Prettier Ignore File

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

## 7.4 Run Prettier on Save

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

ESLint is one of the most popular and powerful linters for JavaScript and TypeScript!

## 8.1 Install ESLint

```shell
ng lint
```

```shell
Cannot find "lint" target for the specified project.
You can add a package that implements these capabilities.

For example:
  ESLint: ng add @angular-eslint/schematics

 Would you like to add ESLint now? yes
✔ Determining Package Manager
  › Using package manager: npm
✔ Searching for compatible package version
  › Found compatible package version: @angular-eslint/schematics@19.0.2.
✔ Loading package information from registry
✔ Confirming installation
✔ Installing package

    All angular-eslint dependencies have been successfully installed 🎉

    Please see https://github.com/angular-eslint/angular-eslint for how to add ESLint configuration to your project.

    We detected that you have a single project in your workspace and no existing linter wired up, so we are configuring ESLint for you automatically.

    Please see https://github.com/angular-eslint/angular-eslint for more information.

CREATE eslint.config.js (969 bytes)
UPDATE package.json (1175 bytes)
UPDATE angular.json (2877 bytes)
✔ Packages installed successfully.
```

This installed <a target="_blank" href="https://github.com/angular-eslint/angular-eslint">https://github.com/angular-eslint/angular-eslint</a> for the app.

Check your <a target="_blank" href="/app/package.json">/app/package.json</a> file to see what has been installed.

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
    "test": "ng test",
    "lint": "ng lint"
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
    "prettier": "^3.3.3",
    "typescript": "~5.5.2",
    "typescript-eslint": "8.18.0"
  }
}
```

Here your `package.json` after you installed ESLint, that is <a target="_blank" href="https://github.com/angular-eslint/angular-eslint">https://github.com/angular-eslint/angular-eslint</a>.

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
    "test": "ng test",
    "lint": "ng lint"
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
    "angular-eslint": "19.0.2", <=== ESLint is now installed as development dependency
    "eslint": "^9.16.0", <=== ESLint is now installed as development dependency
    "jasmine-core": "~5.2.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "prettier": "^3.3.3",
    "typescript": "~5.5.2",
    "typescript-eslint": "8.18.0"
  }
}
```

Now lint the app again.

```shell
ng lint
```

```shell
Linting "app"...

All files pass linting
```

## 8.2 Confirm ESLint errors show in VS Code

Open this file.

<a target="_blank" href="/app/src/app/app.component.ts">/app/src/app/app.component.ts</a>

```ts
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "app";
}
```

Change

```ts
selector: "app-root",
```

to this.

```ts
selector: "root",
```

You should **immediately** see the error being **highlighted** in VS Code.

<img src="/docs/data/009_eslint_error_in_vs_code_Screenshot_20250116_232320.png">

**Confirm** ESLint works correct for you, then **reverse** the **changes**.

Change

```ts
selector: "root",
```

back to

```ts
selector: "app-root",
```

again and make sure that the ESLint error is **gone**.

You successfully added <a target="_blank" href="https://github.com/angular-eslint/angular-eslint">https://github.com/angular-eslint/angular-eslint</a> to the app and are now using ESLint to lint you app.

What does the word `lint` mean at all and where does it come from ?

Perhaps this article from WikiPedia gives you a better idea.

<a target="_blank" href="https://en.wikipedia.org/wiki/Lint_(material)">https://en.wikipedia.org/wiki/Lint\_(material)</a>

<img src="/docs/data/010_what_is_lint_Screenshot_20250116_234008.png">

The fun in this is, the word `lint` is a **NOUN** but used as a verb in software development all the time when i.e. a fellow dev asks you `oh my gosh, have you at all linted your code` or `go lint you code`. :smile:

## 8.3 angular-eslint packages

Please follow the links below for the packages you care about.

<a target="_blank" href="https://github.com/angular-eslint/angular-eslint/blob/main/packages/angular-eslint/README.md">angular-eslint</a>

- This is the core package that exposes most of the other packages below for the common use case of using angular-eslint with Angular CLI workspaces. It exposes all the tooling you need to work with ESLint v9 and typescript-eslint v8 with flat config in v18 of angular-eslint onwards. For versions of angular-eslint older than v18, or workspaces still using ESLint v8 and typescript-eslint v7 or the legacy eslintrc config format, you will use a combination of the packages below directly.

<a target="_blank" href="https://github.com/angular-eslint/angular-eslint/blob/main/packages/builder/README.md">@angular-eslint/builder</a>

- An Angular CLI Builder which is used to execute ESLint on your Angular projects using standard commands such as ng lint

<a target="_blank" href="https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/README.md">@angular-eslint/eslint-plugin</a>

- An ESLint-specific plugin that contains rules which are specific to Angular projects. It can be combined with any other ESLint plugins in the normal way.

<a target="_blank" href="https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/README.md">@angular-eslint/eslint-plugin-template</a>

- An ESLint-specific plugin which, when used in conjunction with @angular-eslint/template-parser, allows for Angular template-specific linting rules to run.

<a target="_blank" href="https://github.com/angular-eslint/angular-eslint/blob/main/packages/schematics/README.md">@angular-eslint/schematics</a>

- Schematics which are used to add and update configuration files which are relevant for running ESLint on an Angular workspace.

<a target="_blank" href="https://github.com/angular-eslint/angular-eslint/blob/main/packages/template-parser/README.md">@angular-eslint/template-parser/a>

- An ESLint-specific parser which leverages the @angular/compiler to allow for custom ESLint rules to be written which assert things about your Angular templates.

<a target="_blank" href="https://github.com/angular-eslint/angular-eslint/blob/main/packages/test-utils/README.md">@angular-eslint/test-utils</a>

- Utilities which are helpful when testing custom ESLint rules for Angular workspaces.

<a target="_blank" href="https://github.com/angular-eslint/angular-eslint/blob/main/packages/utils/README.md">@angular-eslint/utils</a>

- Utilities which are helpful when writing custom ESLint rules for Angular workspaces.

## 8.4 Configuring ESLint

<a target="_blank" href="https://eslint.org/blog/2024/04/eslint-v9.0.0-released/">https://eslint.org/blog/2024/04/eslint-v9.0.0-released/</a>

In version 9 of ESLint, the default configuration format has been changed to the so called "flat config" style using exclusively an `eslint.config.js` file as the only way of configuring a project.

The legacy `eslintrc` style is now **deprecated**, but still fully supported.

When it comes to configuring ESLint for your Angular projects you have two options and associated guides.

**FLAT** configs

the default in ESLint **v9**, **strongly recommended for new projects**

<a target="_blank" href="https://github.com/angular-eslint/angular-eslint/blob/main/docs/CONFIGURING_FLAT_CONFIG.md">https://github.com/angular-eslint/angular-eslint/blob/main/docs/CONFIGURING_FLAT_CONFIG.md</a>

**eslintrc** style configs

the default in ESLint **v8**, **deprecated** in ESLint v9 **but still valid for existing projects**

<a target="_blank" href="https://github.com/angular-eslint/angular-eslint/blob/main/docs/CONFIGURING_ESLINTRC.md">https://github.com/angular-eslint/angular-eslint/blob/main/docs/CONFIGURING_ESLINTRC.md</a>

The <a target="_blank" href="/app/eslint.config.js">/app/eslint.config.js</a> file currently has this content.

```javascript
// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
```

This is the so called **FLAT** ESLint config.

<a target="_blank" href="https://github.com/angular-eslint/angular-eslint/blob/main/docs/CONFIGURING_FLAT_CONFIG.md">https://github.com/angular-eslint/angular-eslint/blob/main/docs/CONFIGURING_FLAT_CONFIG.md</a>

### 8.4.1 Notes on ESLint Configuration

These days with the flat config, ESLint has first class support for different types of files being configured differently (different rules and parsers)

We can leverage this for Angular projects, because they:

- use **TypeScript files** for source code
- use a **custom/extended form of HTML** for templates (be they inline or external HTML files)

The thing is: **ESLint understands neither of these things out of the box.**

Fortunately, however, ESLint has clearly defined points of extensibility that we can leverage to make this all work.

> For detailed information about ESLint plugins, parsers etc please review the official ESLint eslintrc config documentation: https://eslint.org/docs/latest/use/configure/

**The key principle of our configuration required for Angular projects is that we need to run different blocks of configuration for different file types/extensions**.

In other words, we don't want the same rules to apply on TypeScript files that we do on HTML/inline-templates.

Therefore, our flat config will contain two entries, one for TS, one for HTML.

We could provide these two entries directly in an exported array, but `typescript-eslint` provides an awesome typed utility function which makes writing our flat configs a lot nicer.

So we will instead require the function and pass in multiple objects for our configuration.

<a target="_blank" href="/app/eslint.config.js">/app/eslint.config.js</a>

Copy all the comments into the **FLAT** ESLint config.

**Before**

```javascript
// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
```

**After**

```javascript
// @ts-check

// Allows us to bring in the recommended core rules from eslint itself
const eslint = require("@eslint/js");

// Allows us to use the typed utility for our config, and to bring in the recommended rules for TypeScript projects from typescript-eslint
const tseslint = require("typescript-eslint");

// Allows us to bring in the recommended rules for Angular projects from angular-eslint
const angular = require("angular-eslint");

// Export our config array, which is composed together thanks to the typed utility function from typescript-eslint
module.exports = tseslint.config(
  {
    // Everything in this config object targets our TypeScript files (Components, Directives, Pipes etc)
    files: ["**/*.ts"],
    extends: [
      // Apply the recommended core rules
      eslint.configs.recommended,
      // Apply the recommended TypeScript rules
      ...tseslint.configs.recommended,
      // Optionally apply stylistic rules from typescript-eslint that improve code consistency
      ...tseslint.configs.stylistic,
      // Apply the recommended Angular rules
      ...angular.configs.tsRecommended,
    ],
    // Set the custom processor which will allow us to have our inline Component templates extracted
    // and treated as if they are HTML files (and therefore have the .html config below applied to them)
    processor: angular.processInlineTemplates,
    // Override specific rules for TypeScript files (these will take priority over the extended configs above)
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
    },
  },
  {
    // Everything in this config object targets our HTML files (external templates,
    // and inline templates as long as we have the `processor` set on our TypeScript config above)
    files: ["**/*.html"],
    extends: [
      // Apply the recommended Angular template rules
      ...angular.configs.templateRecommended,
      // Apply the Angular template rules which focus on accessibility of our apps
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
```

### 8.4.2 Premade flat configs

<a target="_blank" href="https://github.com/angular-eslint/angular-eslint/blob/main/packages/angular-eslint/src/configs/README.md">https://github.com/angular-eslint/angular-eslint/blob/main/packages/angular-eslint/src/configs/README.md</a>

These flat ESLint configs exist for your convenience.

They contain configuration intended to save you time and effort when configuring your project by disabling rules known to conflict with this repository, or cause issues in Angular codebases.

> NOTE: These configs are only compatible with `eslint.config.js` files, not eslintrc.

> You should access the configs exported from the [`@angular-eslint/eslint-plugin`](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/configs) package for use in eslintrc files.

#### `angular-eslint/ts-all` and `angular-eslint/template-all`

Quite simply, these enable all the possible rules from `@angular-eslint/eslint-plugin` and `@angular-eslint/eslint-plugin-template` respectively.

It is **unlikely** they will be applicable in real-world projects, but some folks find them useful to have as a reference.

#### `angular-eslint/ts-recommended` and `angular-eslint/template-recommended`

The recommended sets from `@angular-eslint/eslint-plugin` and `@angular-eslint/eslint-plugin-template` are **_opinionated_** sets of Angular-specific rules that we think you should use because:

1. They help you adhere to Angular best practices.
2. They help catch probable issue vectors in your code.

That being said, it is not the only way to use `@angular-eslint/eslint-plugin` or `@angular-eslint/eslint-plugin-template`, nor is it the way that will necessarily work 100% for your project/company.

It has been built based off of two main things:

1. Angular best practices collected and collated from places like:

   - [Angular repo](https://github.com/angular/angular).
   - [Angular documentation](https://angular.dev).
   - Advice from the **Angular Team at Google**.

2. The combined state of community contributed rulesets at the time of creation.

It is strongly encouraged to combine the **recommended** Angular rules with the _recommended_ configs from `typescript-eslint` (https://typescript-eslint.io/linting/configs/#recommended-configurations), and this is what our schematics will generate for you automatically.

### 8.4.3 Altering the recommended set to suit your project

If you disagree with a rule (or it disagrees with your codebase), consider using your local config to change the rule config so it works for your project.

For example, if you want to turn off the `@angular-eslint/no-input-rename` TS rule, and turn off the '@angular-eslint/template/no-negated-async' template rule, you can add them to the applicable sections of the config and set them to "off" like this:

**eslint.config.js**

```js
// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      // our project thinks using renaming inputs is ok
      "@angular-eslint/no-input-rename": "off",
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      // our project thinks using negated async pipes is ok
      "@angular-eslint/template/no-negated-async": "off",
    },
  }
);
```

### 8.4.4 `angular-eslint/template-accessibility`

These are all the rules within `@angular-eslint/eslint-plugin-template` which deal with things impacting the accessibility of your Angular apps.

The rules are based on a number of best practice recommendations and resources including:

- [W3C - Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)

- [Mozilla Developer Network - Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

- [Google Chrome - Audit Rules](https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules)

## 8.5 Additional ESLint Configurations

If you feel the provided ESLint configuration up to this point are **not enough** for your project you can continue to add even more configurations for ESLint with regards to Angular.

Instead of meticulously spending days, weeks and maybe months to find a good ESLint configuration this work can be left to experienced industry professionals.

There are two contenders in this space.

**AirBnB**

<a target="_blank" href="https://github.com/airbnb/javascript">https://github.com/airbnb/javascript</a>

**Code PushUp**

<a target="_blank" href="https://github.com/code-pushup/eslint-config">https://github.com/code-pushup/eslint-config</a>

While the AirBnB config is more geared towards **JavaScript and React** the **Code PushUp config is geared particularly for Angular**.

Of course your team and you can also configure your own linting rules over the course of a project.

# 9. Husky

<a href="https://typicode.github.io/husky/">https://typicode.github.io/husky/</a>

Husky enhances your commits and more 🐶 woof!

Automatically lint your commit messages, code, and run tests upon committing or pushing.

<a target="_blank" href="https://github.com/lint-staged/lint-staged">https://github.com/lint-staged/lint-staged</a>

🚫💩 — Run tasks like formatters and linters against staged git files

## 9.1 Install and Configure Husky

```shell
npm install --save-dev husky
```

<a target="_blank" href="/app/package.json">/app/package.json</a>

```json
"scripts": {
  "ng": "ng",
  "start": "ng serve",
  "build": "ng build",
  "watch": "ng build --watch --configuration development",
  "test": "ng test",
  "lint": "ng lint",
  "prepare": "husky" <== add husky install as prepare script
}
```

```shell
npm run prepare
```

```shell
npx husky init
```

The init command simplifies setting up husky in a project.

It creates a pre-commit script in `.husky` and updates the prepare script in <a target="_blank" href="/app/package.json">/app/package.json</a>.

Modifications can be made later to suit your workflow.

## 9.2 Add a Husky Hook

<a target="_blank" href="https://typicode.github.io/husky/how-to.html#adding-a-new-hook">https://typicode.github.io/husky/how-to.html#adding-a-new-hook</a>

You can add a new hook by adding a corresponding file in the `.husky` folder of your repository.

## 9.3 There are 17 Git Hooks

For each of these you can create a Husky Hook file, i.e. `post-commit` and hook into the exact Git operation that you need.

1. **applypatch-msg** – Check patch message. _(e.g., verify format before applying patch)_
2. **pre-applypatch** – Run before applying patch. _(e.g., run tests)_
3. **post-applypatch** – After patch applied. _(e.g., notify team)_
4. **pre-commit** – Before commit. _(e.g., lint code)_
5. **prepare-commit-msg** – Edit commit message before editor opens. _(e.g., add ticket ID)_
6. **commit-msg** – Check message after written. _(e.g., enforce message rules)_
7. **post-commit** – After commit. _(e.g., show summary)_
8. **pre-rebase** – Before rebase starts. _(e.g., check branch)_
9. **post-checkout** – After checkout. _(e.g., setup env)_
10. **post-merge** – After merge. _(e.g., re-install deps)_
11. **pre-push** – Before push. _(e.g., run tests)_
12. **pre-receive** – On remote before accepting push. _(e.g., validate code)_
13. **update** – On remote for each branch. _(e.g., check access)_
14. **post-receive** – After push on remote. _(e.g., deploy)_
15. **post-update** – After update on remote. _(e.g., notify services)_
16. **push-to-checkout** – During `git push` with `--checkout`. _(e.g., custom behavior)_
17. **pre-auto-gc** – Before auto garbage collection. _(e.g., log cleanup)_

**Managing Multiple Git Hooks with Husky**

When you have multiple Git hooks, you don't need to manually select which hook to use before committing - Git will automatically run all configured pre-commit hooks in sequence. Here's how it works and how to manage multiple hooks:

**Understanding Git Hooks Execution**

Git hooks are executed automatically at specific points in your Git workflow. For the pre-commit stage:

1. When you run `git commit`, Git automatically checks for and executes all pre-commit hooks
2. All hooks must succeed (exit with code 0) for the commit to proceed
3. If any hook fails, the commit is aborted

## 9.4 Setting Up Multiple Pre-commit Hooks with Husky

The simplest approach is to add multiple commands to your pre-commit hook file:

```shell
# .husky/pre-commit

# Run lint-staged
npx lint-staged

# Run additional checks
npm run test:quick

# Run additional checks
npm run type-check
```

This way, all commands run sequentially when you commit.

**Skip Git Hooks**

The `-n` or `--no-verify` flag skips Git hooks like `pre-commit` and `commit-msg`.

```shell
# Skips Git hooks
git commit -m "..." -n
```

## 9.5 Project is Not in the Root Directory

<a target="_blank" href="https://typicode.github.io/husky/how-to.html#project-not-in-git-root-directory">https://typicode.github.io/husky/how-to.html#project-not-in-git-root-directory</a>

In the case of this repository the `/app` folder is where Husky is installed as that is the location where the `package.json` file is, so this is the project folder.

However Git is in the root folder.

In this case prepare Husky so that Git is run from the root folder..

<a target="_blank" href="/app/package.json">/app/package.json</a>

```json
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "lint": "ng lint",
    "prepare": "cd .. && husky app/.husky" <=== move to root directory and tell husky where the .husky folder is
  }
```

.. and in the `pre-commit` hook change the folder back to where the app is.

<a target="_blank" href="/app/.husky/pre-commit">/app/.husky/pre-commit</a>

```shell
# app/.husky/pre-commit
cd app

npm test

exit 1
```

This is just needed in this demo repository where an Angular app is in `app/`.

<a target="_blank" href="https://typicode.github.io/husky/how-to.html#testing-hooks-without-committing">https://typicode.github.io/husky/how-to.html#testing-hooks-without-committing</a>

By adding `exit 1` to the end of the `pre-commit` hook the Git commit is aborted, so you can test your hooks like this.

# 10. Install and Configure lint-staged

<a target="_blank" href="https://github.com/lint-staged/lint-staged">https://github.com/lint-staged/lint-staged</a>
