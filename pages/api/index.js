import nc from 'next-connect';

const handler = nc()
  .get((req, res) => {
    res.json({ message: 'Hello' });
  })
  .post((req, res) => {
    res.json({ message: 'Ok' });
  });

export default handler;
