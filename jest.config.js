module.exports = {
  verbose: true,
  roots: ['src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      './__mocks__/fileMock.js',
    '\\.(css|less)$': './__mocks__/styleMock.js',
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '^@locales/(.*)$': 'locales/$1',
    '^@components/(.*)$': 'components/$1',
    '^@containers/(.*)$': 'containers/$1',
    '^@utils/(.*)$': 'utils/$1',
    '^@styles/(.*)$': 'styles/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/src/test/setDefault.tsx'],
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
}
