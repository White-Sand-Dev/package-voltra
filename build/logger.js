const LEVELS = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
};
let currentLevel = __DEV__ ? 'debug' : 'info';
export const logger = {
    debug: (message) => {
        if (LEVELS.debug >= LEVELS[currentLevel]) {
            console.log(`[Voltra] ${message}`);
        }
    },
    info: (message) => {
        if (LEVELS.info >= LEVELS[currentLevel]) {
            console.info(`[Voltra] ${message}`);
        }
    },
    warn: (message) => {
        if (LEVELS.warn >= LEVELS[currentLevel]) {
            console.warn(`[Voltra] ${message}`);
        }
    },
    error: (message) => {
        if (LEVELS.error >= LEVELS[currentLevel]) {
            console.error(`[Voltra] ${message}`);
        }
    },
    setLevel: (level) => {
        currentLevel = level;
    },
};
//# sourceMappingURL=logger.js.map