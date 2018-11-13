import AWS from 'aws-sdk';
import Twitter from 'twitter';

const kms = new AWS.KMS();

export default async () => {
  const TWITTER_CONSUMER_KEY = String((await kms.decrypt({
    CiphertextBlob: Buffer.from(process.env.TWITTER_CONSUMER_KEY, 'base64'),
  }).promise()).Plaintext);

  const TWITTER_CONSUMER_SECRET = String((await kms.decrypt({
    CiphertextBlob: Buffer.from(process.env.TWITTER_CONSUMER_SECRET, 'base64'),
  }).promise()).Plaintext);

  const TWITTER_ACCESS_TOKEN_KEY = String((await kms.decrypt({
    CiphertextBlob: Buffer.from(process.env.TWITTER_ACCESS_TOKEN_KEY, 'base64'),
  }).promise()).Plaintext);

  const TWITTER_ACCESS_TOKEN_SECRET = String((await kms.decrypt({
    CiphertextBlob: Buffer.from(process.env.TWITTER_ACCESS_TOKEN_SECRET, 'base64'),
  }).promise()).Plaintext);

  return new Twitter({
    consumer_key: TWITTER_CONSUMER_KEY,
    consumer_secret: TWITTER_CONSUMER_SECRET,
    access_token_key: TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: TWITTER_ACCESS_TOKEN_SECRET,
  });
};
