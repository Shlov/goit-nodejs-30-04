const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const contacts = new Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
    unique: true,
  },
  email: {
    type: String,
    default: null,

    validate: {
      validator: async function (value) {
        const count = await mongoose.models.contact.countDocuments({ email: value, _id: { $ne: this._id } });
        return count === 0;
      },
      message: 'Email already exists.',
      // validator: function (value) {
      //   // Перевірка на унікальність, якщо значення не є null
      //   if (value !== null) {
      //     return mongoose.models.contact.countDocuments({ email: value, _id: { $ne: this._id } })
      //       .then((count) => !count);
      //   }
      //   return true; // Пропустити перевірку, якщо значення є null
      // },
      // message: 'Email already exists.',
    },
  },
  number: {
    type: String,
    unique: true,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  }
  },
  { versionKey: false, timestamps: true }
);


const Contacts = mongoose.model('contact', contacts);

module.exports = Contacts;
