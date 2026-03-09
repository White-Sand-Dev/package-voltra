import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { VoltraViewProps } from './VoltraView.js';
export type VoltraLiveActivityPreviewProps = Omit<VoltraViewProps, 'style'> & {
    /**
     * Additional styles to apply on top of the lock screen dimensions
     */
    style?: StyleProp<ViewStyle>;
};
/**
 * A preview component that renders Voltra JSX lock screen Live Activity content
 * at the exact dimensions of a lock screen Live Activity. Useful for testing
 * Live Activity layouts.
 *
 * This component extends VoltraView but automatically sets the width and height
 * to match the lock screen Live Activity dimensions. Live Activities cannot be
 * fully emulated, so this provides a close approximation for development.
 *
 * @example
 * ```tsx
 * <VoltraLiveActivityPreview
 *   style={{ backgroundColor: 'lightgray' }}
 * >
 *   <Voltra.Text>Hello Live Activity!</Voltra.Text>
 * </VoltraLiveActivityPreview>
 * ```
 */
export declare function VoltraLiveActivityPreview({ style, children, ...voltraViewProps }: VoltraLiveActivityPreviewProps): React.JSX.Element;
//# sourceMappingURL=VoltraLiveActivityPreview.d.ts.map