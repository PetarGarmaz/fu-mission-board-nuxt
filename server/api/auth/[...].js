import { NuxtAuthHandler } from '#auth'
import DiscordProvider from 'next-auth/providers/discord';

const handler = NuxtAuthHandler({
	secret: process.env.AUTH_SECRET,
	providers: [
		DiscordProvider.default({
			clientId: process.env.DISCORD_CLIENT_ID,
			clientSecret: process.env.DISCORD_CLIENT_SECRET,
			authorization: process.env.DISCORD_AUTHORIZATION,
			token: "https://discord.com/api/oauth2/token",
			userinfo: "https://discord.com/api/users/@me",
		})
	],
	callbacks: {
		async session({session, token}) {
			const sessionUser = await UserSchema.findOne({email: session.user.email});

			session.accessToken = token.access_token;
			session.user.id = sessionUser._id.toString();
			session.user.isAdmin = sessionUser.isAdmin;

			return {...session, isAdmin: true};
		},

		async jwt({ token, account, profile }){
			if (account) {
				token.accessToken = account.access_token;
				token = Object.assign({}, token, { access_token: account.access_token });				
			}

			return token;
		},

		async signIn({ user, account, profile, email, credentials }) {
			var returnValue = false;

			try {
				const userExists = await UserSchema.findOne({email: user.email});
				const guildResponse = await fetch("https://discord.com/api/users/@me/guilds", {headers: {Authorization: "Bearer " + account.access_token}});	
				const guilds = await guildResponse.json();
				var isAdmin = false;


				for (let i = 0; i < guilds.length; i++) {
					if(guilds[i].id == "282514718445273089") {
						
						const roleResponse = await fetch(`https://discord.com/api/users/@me/guilds/${guilds[i].id}/member`, {headers: {Authorization: "Bearer " + account.access_token}});
						const memberInfo = await roleResponse.json();
						
						for (let j = 0; j < memberInfo.roles.length; j++) {
							if(memberInfo.roles[j] == "598258350718713864") {
								returnValue = true;
							}

							if(memberInfo.roles[j] == "714949430649815140") {
								isAdmin = true;
							}
						}
					};
				}

				if(!userExists && returnValue) {
					await UserSchema.create({
						email: user.email,
						username: user.name,
						image: user.image,
						isAdmin: isAdmin
					})
				}

				//Update image - incase it was changed
				if(userExists) {
					if(userExists.image != user.image) {
						userExists.image = user.image;
						await userExists.save();
					}
				}

				return returnValue;
			} catch (error) {
				console.log("Error checking if user exists:\n- ", error.message);
				return returnValue;
			}
		}
	}
});	

export default handler;