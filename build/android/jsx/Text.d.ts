import { VoltraAndroidTextStyleProp } from '../styles/types.js';
import type { TextProps as GeneratedTextProps } from './props/Text.js';
export type TextProps = Omit<GeneratedTextProps, 'style'> & {
    style?: VoltraAndroidTextStyleProp;
};
export declare const Text: import("../../jsx/createVoltraComponent.js").VoltraComponent<TextProps>;
//# sourceMappingURL=Text.d.ts.map