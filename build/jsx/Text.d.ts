import { VoltraTextStyleProp } from '../styles/index.js';
import type { TextProps as GeneratedTextProps } from './props/Text.js';
export type TextProps = Omit<GeneratedTextProps, 'style'> & {
    style?: VoltraTextStyleProp;
};
export declare const Text: import("./createVoltraComponent.js").VoltraComponent<TextProps>;
//# sourceMappingURL=Text.d.ts.map