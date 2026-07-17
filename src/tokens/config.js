import StyleDictionary from 'style-dictionary';

const commonConfig = {
  source: ['src/tokens/primitives.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/tokens/generated/',
      options: {
        showFileHeader: false,
      },
    },
  },
};

// Build dark theme
const darkDictionary = new StyleDictionary({
  ...commonConfig,
  source: ['src/tokens/primitives.json', 'src/tokens/semantic/dark.json'],
  platforms: {
    css: {
      ...commonConfig.platforms.css,
      prefix: '',
      files: [
        {
          destination: 'dark.css',
          format: 'css/variables',
          options: {
            selector: '[data-theme="dark"]',
            showFileHeader: false,
          },
        },
      ],
    },
  },
});

// Build light theme
const lightDictionary = new StyleDictionary({
  ...commonConfig,
  source: ['src/tokens/primitives.json', 'src/tokens/semantic/light.json'],
  platforms: {
    css: {
      ...commonConfig.platforms.css,
      prefix: '',
      files: [
        {
          destination: 'light.css',
          format: 'css/variables',
          options: {
            selector: '[data-theme="light"]',
            showFileHeader: false,
          },
        },
      ],
    },
  },
});

// Build font tokens (shared across themes)
const fontDictionary = new StyleDictionary({
  ...commonConfig,
  source: ['src/tokens/primitives.json'],
  platforms: {
    css: {
      ...commonConfig.platforms.css,
      prefix: '',
      files: [
        {
          destination: 'fonts.css',
          format: 'css/variables',
          filter: (token) => token.path[0] === 'font' || token.path[0] === 'space' || token.path[0] === 'radius' || token.path[0] === 'duration' || token.path[0] === 'easing' || token.path[0] === 'shadow' || token.path[0] === 'layout' || token.path[0] === 'border',
          options: {
            selector: ':root',
            showFileHeader: false,
          },
        },
      ],
    },
  },
});

await darkDictionary.buildAllPlatforms();
await lightDictionary.buildAllPlatforms();
await fontDictionary.buildAllPlatforms();

console.log('✅ Design tokens built successfully!');
