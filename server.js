require('dotenv').config();

const { App } = require('@slack/bolt');
const { getStackByMemberId } = require('./controller');

const app = new App({
  signingSecret: process.env.SIGNING_SECRET,
  token: process.env.OAUTH_TOKEN,
  socketMode: true,
  appToken: process.env.APP_TOKEN
});


/* Add functionality here */
app.message('udd my stack', async ({ message, say }) => {
    console.log("Showing the user their stack")
    const response = await getStackByMemberId(message.user);
    await say(`Your stack is: ${response}`);
});


(async () => {
  // Start the app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');

})();
