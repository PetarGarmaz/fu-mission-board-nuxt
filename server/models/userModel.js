import { defineMongooseModel } from '#nuxt/mongoose';

export const UserSchema = defineMongooseModel({
	name: 'User',
	schema: {
		email: {
			type: String, 
			unique: [true, "Email already exists!"],
			required: [true, "Email is required!"]
		},
		username: {
			type: String, 
			required: [true, "Username is required!"]
		},
		image: {
			type: String	
		},
		isAdmin: {
			type: Boolean
		}
	},
})