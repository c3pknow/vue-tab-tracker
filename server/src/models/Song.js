module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    album: DataTypes.STRING,
    albumImageURL: DataTypes.STRING,
    youtubeId: DataTypes.STRING,
    genre: DataTypes.STRING,
    tab: DataTypes.TEXT,
    lyrics: DataTypes.TEXT,
  });

  return Song;
};
