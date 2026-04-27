var SafeSpotApi = (function () {
  function resolvePrefix(service) {
    var cfg = window.SAFESPOT_CONFIG;
    if (service === 'core') return cfg.corePrefix;
    if (service === 'public') return cfg.publicPrefix;
    throw new Error('Unknown service: ' + service);
  }

  return {
    request: async function (opts) {
      var cfg = window.SAFESPOT_CONFIG;
      var base = cfg.apiBaseUrl.replace(/\/$/, '');
      var prefix = resolvePrefix(opts.service);
      var path = opts.path.charAt(0) === '/' ? opts.path : '/' + opts.path;
      var url = base + prefix + path;
      var headers = { 'Content-Type': 'application/json' };

      if (opts.auth) {
        var token = SafeSpotAuth.getToken();
        if (token) headers['Authorization'] = 'Bearer ' + token;
      }

      var fetchOpts = { method: opts.method || 'GET', headers: headers };
      if (opts.body !== undefined) fetchOpts.body = JSON.stringify(opts.body);

      var res = await fetch(url, fetchOpts);

      if (res.status === 401) {
        SafeSpotAuth.clearSession();
        window.location.href = 'login.html';
        return;
      }

      if (res.status === 403) {
        var e403 = new Error('FORBIDDEN');
        e403.status = 403;
        throw e403;
      }

      var json = await res.json();

      if (!res.ok) {
        var eApi = new Error((json.error && json.error.message) || 'REQUEST_FAILED');
        eApi.status = res.status;
        eApi.data = json;
        throw eApi;
      }

      return json;
    }
  };
})();
