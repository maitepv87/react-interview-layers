export const login = (setUser, name = "Maite") => {
  setUser({ name });
};

export const logout = (setUser) => {
  setUser(null);
};
