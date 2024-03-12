module.exports = {
    // ... other webpack configuration options
  
    resolve: {
      fallback: {
        url: require.resolve('url'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        stream: require.resolve('stream-browserify'),
        assert: require.resolve('assert/'),
      }
    }
  };