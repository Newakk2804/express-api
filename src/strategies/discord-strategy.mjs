import passport from 'passport';
import { Strategy } from 'passport-discord';
import { DiscordUser } from '../mongoose/schemas/discord-user.mjs';

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const findUser = await DiscordUser.findById(id);
    if (!findUser) throw new Error('User not found');
    done(null, findUser);
  } catch (err) {
    done(err, null);
  }
});

export default passport.use(
  new Strategy(
    {
      clientID: '1358013498939936860',
      clientSecret: 'xrl-VCdLLNREY-Z_k74kR7oUvByK5SXF',
      callbackURL: 'http://localhost:3001/api/auth/discord/redirect',
      scope: ['identify'],
    },
    async (accessToken, refreshToken, profile, done) => {
      let findUser;

      try {
        findUser = await DiscordUser.findOne({ discordId: profile.id });
      } catch (err) {
        return done(err, null);
      }

      try {
        if (!findUser) {
          const newUser = new DiscordUser({ username: profile.username, discordId: profile.id });
          const newSavedUser = await newUser.save();
          return done(null, newSavedUser);
        }
        done(null, findUser);
      } catch (err) {
        console.log(err);
        return done(err, null);
      }
    }
  )
);
