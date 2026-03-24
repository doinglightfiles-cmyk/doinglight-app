const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// In this environment native `find` crawling can hang and leave Metro unresponsive.
// Disabling watchman forces the Node filesystem crawler path.
config.resolver.useWatchman = false;

module.exports = config;
