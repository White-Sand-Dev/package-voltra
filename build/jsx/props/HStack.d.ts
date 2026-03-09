import type { VoltraBaseProps } from '../baseProps';
export type HStackProps = VoltraBaseProps & {
    /** Vertical alignment */
    alignment?: 'top' | 'center' | 'bottom';
    /** Layout mode. 'stack' uses native SwiftUI stacks. 'flex' uses RN-like flexbox. */
    layout?: 'stack' | 'flex';
    /** Spacing between children. Takes precedence over gap style property. */
    spacing?: number;
};
//# sourceMappingURL=HStack.d.ts.map