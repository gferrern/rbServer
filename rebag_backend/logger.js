var winston = require('winston');
var DailyRotateFile = require('winston-daily-rotate-file');
var logger = new winston.createLogger({
    format: winston.format.combine(
        /*winston.format((info, opts) => {
            if (process.env.NODE_ENV !== 'production') { return false; }
            return info;
        })(),*/
        winston.format.splat(),
        winston.format.simple()
    ),
    transports: [
        new DailyRotateFile({ 
            filename: './logs/%DATE%.log',
            datePattern: 'YYYY-MM-DD-HH', 
            zippedArchive: true, 
            maxSize: '20m', 
            maxFiles: '14d', 
            prepend: true,
            level: 'error',
            colorize: true
        }),
    ],
    exitOnError: false
});

winston.add(logger);
logger.info('Logger OK');

module.exports= {logger};