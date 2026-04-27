var SafeSpotAuth = (function () {
  var TOKEN_KEY = 'safespot.accessToken';
  var USER_KEY = 'safespot.user';

  return {
    getToken: function () {
      return localStorage.getItem(TOKEN_KEY) || '';
    },

    getUser: function () {
      try {
        return JSON.parse(localStorage.getItem(USER_KEY) || 'null');
      } catch (e) {
        return null;
      }
    },

    setSession: function (accessToken, user) {
      localStorage.setItem(TOKEN_KEY, accessToken);
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    },

    clearSession: function () {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    },

    isLoggedIn: function () {
      return !!localStorage.getItem(TOKEN_KEY);
    },

    logout: function () {
      this.clearSession();
    }
  };
})();
