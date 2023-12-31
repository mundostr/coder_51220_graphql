import mongoose from 'mongoose';

mongoose.pluralize(null);

const collection = 'users';

const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    password: String,
    gender: String,
    avatar: String
});

const userModel = mongoose.model(collection, schema);

export default userModel;