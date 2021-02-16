const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const getErrorLogin = state => state.auth.errorLogin;

const getErrorRegister = state => state.auth.errorRegister;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsFetchingCurrentUser,
  getErrorLogin,
  getErrorRegister,
};

export default authSelectors;
