import fetch from 'node-fetch';
import twitter from './twitter';

const handler = async () => {
  const tw = await twitter();

  const { joke } = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      'User-Agent': 'Twitter @jalka_puu',
      Accept: 'application/json',
    },
  }).then(res => res.json());

  const res = tw.post('statuses/update', { status: joke });

  return res;
};

export default handler;

export {
  handler,
};
