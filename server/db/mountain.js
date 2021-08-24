const  db  = require('./db');
const Sequelize = require('sequelize');
const { DataTypes, STRING, DECIMAL, UUID, UUIDV4 } = Sequelize;

const Mountain = db.define('mountain', {
  ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    validate: {
      notEmpty: true
    }
  },
  "Mountain Peak": {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  "Mountain Range": {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  RangeID: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  Elevation_ft: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  fourteener: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  Prominence_ft: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  Isolation_mi: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  Lat: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  Long: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  "Standard Route": {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  Distance_mi: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  "Elevation Gain_ft": {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  DifficultyDescription: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  Difficulty: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  "Traffic Low": {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  "Traffic High": {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  photo: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
});

module.exports = {
  Mountain
}