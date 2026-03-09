import { VoltraTextStyleProp } from '../styles/types.js';
import type { TimerProps as SwiftTimerProps } from './props/Timer.js';
export type TimerProps = Omit<SwiftTimerProps, 'style'> & {
    style?: VoltraTextStyleProp;
};
export declare const Timer: import("./createVoltraComponent.js").VoltraComponent<TimerProps>;
//# sourceMappingURL=Timer.d.ts.map