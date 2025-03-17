/** @type {import('./lib/types').Configuration} */
export default {
  // Run ESLint with auto-fix on all TypeScript, HTML, and JavaScript files
  // This checks for and fixes code quality issues according to ESLint rules
  // Matches the 'lint:all' script from package.json
  '*.{ts,html,js}': 'eslint --fix',

  // Run Prettier formatter on TypeScript, JavaScript, HTML, CSS, JSON, and Markdown files
  // This ensures consistent code formatting across all source files
  // Matches the 'format' script from package.json
  '*.{ts,js,html,css,json,md}': 'prettier --write',

  // For TypeScript files, run additional type checking:
  // TypeScript compiler in strict mode to verify types without generating output files
  // This provides an extra layer of type safety for staged TypeScript files
  '*.ts': ['tsc --noEmit --strict']
};
