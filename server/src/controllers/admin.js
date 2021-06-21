import User from 'models/user';

const changePassword = async (req, res) => {
  const { user, body: { username, newPassword } } = req;

  if (!user) {
    return res
      .status(401)
      .json({ error: 'Invalid token' });
  }

  if (!newPassword || newPassword.length < 8) {
    return res
      .status(401)
      .json({ error: 'password must be 8 characters long' });
  }

  const simUser = await User.findByUserName(username);

  if (!simUser) {
    return res
      .status(401)
      .json({ error: 'user not found' });
  }

  await simUser.updateOne({ password: newPassword });

  return res.status(200).json({ success: true });
};

module.exports = {
  changePassword,
};
