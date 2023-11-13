import pino from 'pino';
import pretty from 'pino-pretty';

const stream = pretty({
  levelFirst: true,
  colorize: true,
  ignore: 'time,hostname,pid',
});

// Create a logging instance
const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      levelFirst: true,
      translateTime: true,
      colorize: true,
    },
  },
  name: 'MyLogger',
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  // prettyPrint: process.env.NODE_ENV !== 'production',

}, stream);

export default logger;
