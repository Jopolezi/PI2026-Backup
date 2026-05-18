export const removePassword = (
  user: any
) => {

  const { password, ...userWithoutPassword } = user;

  return userWithoutPassword;
};