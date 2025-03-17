/** @type {import('./lib/types').Configuration} */
export default {
  // Run ESLint with auto-fix on all JavaScript files
  // This checks for and fixes code quality issues according to ESLint rules
  '*.js': 'eslint --fix',

  // Run Prettier formatter on JavaScript, CSS, and Markdown files
  // This ensures consistent code formatting across these file types
  '*.{js,css,md}': 'prettier --write',

  // For TypeScript files, run two commands in sequence:
  // 1. ESLint to check and fix linting issues
  // 2. TypeScript compiler in strict mode to verify types without generating output files
  '*.ts': ['eslint --fix', 'tsc --noEmit --strict']
};
