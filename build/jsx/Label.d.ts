import { VoltraTextStyleProp } from '../styles/types.js';
import type { LabelProps as SwiftLabelProps } from './props/Label.js';
export type LabelProps = Omit<SwiftLabelProps, 'style'> & {
    style?: VoltraTextStyleProp;
};
export declare const Label: import("./createVoltraComponent.js").VoltraComponent<LabelProps>;
//# sourceMappingURL=Label.d.ts.map