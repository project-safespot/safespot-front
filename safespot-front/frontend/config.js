(function () {
  var params = new URLSearchParams(window.location.search);
  var modeOverride = params.get('apiMode');

  window.SAFESPOT_CONFIG = {
    apiMode: modeOverride || 'real',
    apiBaseUrl: '',
    corePrefix: '/api/core',
    publicPrefix: '/api/public'
  };

  window.SafeSpotConfig = {
    isRealMode: function () {
      return window.SAFESPOT_CONFIG.apiMode === 'real';
    },
    isMockMode: function () {
      return window.SAFESPOT_CONFIG.apiMode === 'mock';
    }
  };
})();
