// const Promise = require('bluebird');
const bcrypt = require('bcrypt-nodejs');

function hashPassword(user, options) {
  const SALT_FACTOR = 8;
  if (!user.changed('password')) {
    return null;
  }
  const salt = bcrypt.genSaltSync(SALT_FACTOR);
  const hash = bcrypt.hashSync(user.password, salt, null);
  user.password = hash;
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: hashPassword,
        beforeUpdate: hashPassword,
        beforeSave: hashPassword,
      },
    },
  );

  User.prototype.comparePassword = async function comparePassword(password) {
    return bcrypt.compare(password, this.password, (err, res) => res);
  };

  return User;
};
