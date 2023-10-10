import cron from 'node-cron';
 console.log(`env var... ${process.env.CUSTOM_URL}`);
cron.schedule(`*/1 * * * *`, async () => {
  console.log(`running your task... `);
  fetch(process.env.CUSTOM_URL || "")
   .then(res => res.json())
   .then(data => console.log(data))
   .catch(err=> console.log(err));

  fetch(process.env.CUSTOM_URL_2 || "")
   .then(res => res.json())
   .then(data => console.log(data))
   .catch(err=> console.log(err))

});
