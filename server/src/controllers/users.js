import User from 'models/user';
import { authMiddleware } from 'middlewares';
import { hashingUtils } from 'utils';

const show = async (req, res) => res.status(200).json({ user: req.user });

const users = async (req, res) => {
  const { user } = req;
  if (user.role !== 'admin') {
    return res
      .status(404)
      .json({ error: 'not have permission to get all user dat' });
  }
  res.status(200).json({ users: await User.find() });
};

const signup = async (req, res) => {
  const {
    username, password, age, role,
  } = req.body;

  let user = await User.findByUserName(username);

  if (user) {
    return res
      .status(404)
      .json({ error: 'Username has already been taken' });
  }

  user = await User.createUser(username, password, age, role);

  return res
    .status(200)
    .json({ user, token: authMiddleware.generateAuthToken(user.id) });
};

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findByUserName(username);

  if (!user || !(await hashingUtils.verify(user.password, password))) {
    return res
      .status(401)
      .json({ error: 'Invalid username or password.' });
  }

  return res
    .status(200)
    .json({ user, token: authMiddleware.generateAuthToken(user.id) });
};

const changePassword = async (req, res) => {
  const { user, body: { newPassword } } = req;

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

  await user.updateOne({ password: newPassword });

  return res.status(200).json({ success: true });
};

module.exports = {
  signup,
  login,
  changePassword,
  show,
  users,
};
