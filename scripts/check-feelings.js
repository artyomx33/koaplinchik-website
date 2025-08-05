#!/usr/bin/env node

/**
 * Feelings Checker - Ensures code has soul
 * 
 * This script validates that our codebase maintains the Koaplinchik emotional integrity.
 * Run before every commit to preserve the whisper in our code.
 */

const fs = require('fs');
const path = require('path');
const util = require('util');
const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);
const readFile = util.promisify(fs.readFile);

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
};

// Forbidden phrases that lack soul
const FORBIDDEN_PHRASES = [
  'click here',
  'submit',
  'error',
  'loading...',
  'please wait',
  'required field',
  'invalid input',
  'book now',
  'hire us',
  'our services',
  'cheap',
  'discount',
  'IMG_',
  'DSC_',
  'photo1',
  'image1'
];

// Required patterns for naming with feeling
const REQUIRED_PATTERNS = {
  components: /^[A-Z][a-zA-Z]*(Whisper|Story|Memory|Heart|Soul|Dream|Connection|Emotional)/,
  images: /^[a-z-]+(moment|memory|whisper|story|dream|heart)/,
  variables: /(heart|soul|whisper|memory|story|dream|feeling|emotion)/i
};

// Track issues found
let errors = [];
let warnings = [];

/**
 * Check content for forbidden phrases
 * @param {string} content - File content to check
 * @param {string} filepath - Path to file for error reporting
 */
function checkForbiddenPhrases(content, filepath) {
  FORBIDDEN_PHRASES.forEach(phrase => {
    if (content.toLowerCase().includes(phrase)) {
      errors.push(`${colors.red}❌ Found "${phrase}" in ${filepath} - use more soulful language${colors.reset}`);
    }
  });
}

/**
 * Check component naming follows our emotional conventions
 * @param {string} filepath - Path to component file
 */
function checkComponentNaming(filepath) {
  const filename = path.basename(filepath, path.extname(filepath));
  
  if (!REQUIRED_PATTERNS.components.test(filename)) {
    warnings.push(`${colors.yellow}⚠️ Component ${filename} could have more soul in its name${colors.reset}`);
  }
}

/**
 * Check image naming follows our emotional conventions
 * @param {string} filepath - Path to image file
 */
function checkImageNaming(filepath) {
  const filename = path.basename(filepath);
  
  if (!REQUIRED_PATTERNS.images.test(filename)) {
    errors.push(`${colors.red}❌ Image ${filename} needs emotional naming${colors.reset}`);
  }
}

/**
 * Check variable naming in JS/TS files
 * @param {string} content - File content to check
 * @param {string} filepath - Path to file for error reporting
 */
function checkVariableNaming(content, filepath) {
  // Simple regex to find variable declarations
  const varDeclarations = content.match(/(?:const|let|var)\s+([a-zA-Z0-9_]+)\s*=/g) || [];
  
  varDeclarations.forEach(declaration => {
    const varName = declaration.replace(/(?:const|let|var)\s+/, '').replace(/\s*=/, '').trim();
    
    // Skip short variable names (like i, j for loops)
    if (varName.length <= 2) return;
    
    // Skip React hook names
    if (varName.startsWith('use')) return;
    
    // Check if variable has emotional naming
    if (!REQUIRED_PATTERNS.variables.test(varName)) {
      warnings.push(`${colors.yellow}⚠️ Variable "${varName}" in ${filepath} could use more emotional naming${colors.reset}`);
    }
  });
}

/**
 * Check for generic loading states
 * @param {string} content - File content to check
 * @param {string} filepath - Path to file for error reporting
 */
function checkLoadingStates(content, filepath) {
  const genericLoadingPatterns = [
    /loading\.\.\./i,
    /isLoading/,
    /<Spinner/,
    /please wait/i
  ];
  
  genericLoadingPatterns.forEach(pattern => {
    if (pattern.test(content)) {
      warnings.push(`${colors.yellow}⚠️ Generic loading state in ${filepath} - add whisper poetry to loading${colors.reset}`);
    }
  });
}

/**
 * Check for generic error messages
 * @param {string} content - File content to check
 * @param {string} filepath - Path to file for error reporting
 */
function checkErrorMessages(content, filepath) {
  const genericErrorPatterns = [
    /Error:/i,
    /failed/i,
    /invalid/i,
    /required/i,
    /try again/i
  ];
  
  genericErrorPatterns.forEach(pattern => {
    if (pattern.test(content)) {
      warnings.push(`${colors.yellow}⚠️ Generic error message in ${filepath} - add comfort to errors${colors.reset}`);
    }
  });
}

/**
 * Process a single file
 * @param {string} filepath - Path to file
 */
async function processFile(filepath) {
  try {
    const extension = path.extname(filepath);
    
    // Check file based on type
    if (['.js', '.jsx', '.ts', '.tsx'].includes(extension)) {
      const content = await readFile(filepath, 'utf8');
      
      checkForbiddenPhrases(content, filepath);
      checkVariableNaming(content, filepath);
      checkLoadingStates(content, filepath);
      checkErrorMessages(content, filepath);
      
      if (filepath.includes('components/') && 
          (extension === '.tsx' || extension === '.jsx')) {
        checkComponentNaming(filepath);
      }
    } else if (['.jpg', '.jpeg', '.png', '.webp', '.avif'].includes(extension)) {
      if (filepath.includes('public/images/')) {
        checkImageNaming(filepath);
      }
    }
  } catch (err) {
    console.error(`Error processing ${filepath}:`, err);
  }
}

/**
 * Recursively scan directory
 * @param {string} dir - Directory to scan
 */
async function scanDirectory(dir) {
  try {
    const files = await readdir(dir);
    
    for (const file of files) {
      const filepath = path.join(dir, file);
      const stats = await stat(filepath);
      
      // Skip node_modules and hidden directories
      if (file === 'node_modules' || file.startsWith('.')) {
        continue;
      }
      
      if (stats.isDirectory()) {
        await scanDirectory(filepath);
      } else {
        await processFile(filepath);
      }
    }
  } catch (err) {
    console.error(`Error scanning directory ${dir}:`, err);
  }
}

/**
 * Main function
 */
async function main() {
  console.log(`\n${colors.magenta}💕 Checking for feelings in your code...${colors.reset}\n`);
  
  // Scan key directories
  await scanDirectory('./app');
  await scanDirectory('./components');
  await scanDirectory('./lib');
  await scanDirectory('./public/images');
  
  // Report results
  if (errors.length === 0 && warnings.length === 0) {
    console.log(`\n${colors.green}✨ Beautiful! Your code has soul.${colors.reset}\n`);
    process.exit(0);
  } else {
    if (errors.length > 0) {
      console.log(`\n${colors.red}😢 Some code needs more heart:${colors.reset}\n`);
      errors.forEach(error => console.log(error));
    }
    
    if (warnings.length > 0) {
      console.log(`\n${colors.yellow}💭 Consider these suggestions:${colors.reset}\n`);
      warnings.forEach(warning => console.log(warning));
    }
    
    console.log(`\n${colors.cyan}💝 Remember: We're creating memories, not just websites.${colors.reset}\n`);
    
    // Exit with error code if errors were found
    process.exit(errors.length > 0 ? 1 : 0);
  }
}

// Run the script
main().catch(err => {
  console.error('Unexpected error:', err);
  process.exit(1);
});
