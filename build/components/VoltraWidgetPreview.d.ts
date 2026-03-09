import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { WidgetFamily } from '../widgets/types.js';
import { VoltraViewProps } from './VoltraView.js';
export type VoltraWidgetPreviewProps = Omit<VoltraViewProps, 'style'> & {
    /**
     * Widget family size to preview
     */
    family: WidgetFamily;
    /**
     * Additional styles to apply on top of the widget dimensions
     */
    style?: StyleProp<ViewStyle>;
};
/**
 * A preview component that renders Voltra JSX content at the exact dimensions
 * of a specific iOS widget family. Useful for testing widget layouts.
 *
 * This component extends VoltraView but automatically sets the width and height
 * to match the specified widget family's dimensions.
 *
 * @example
 * ```tsx
 * <VoltraWidgetPreview
 *   family="systemSmall"
 *   style={{ backgroundColor: 'lightgray' }}
 * >
 *   <Voltra.Text>Hello Widget!</Voltra.Text>
 * </VoltraWidgetPreview>
 * ```
 */
export declare function VoltraWidgetPreview({ family, style, children, ...voltraViewProps }: VoltraWidgetPreviewProps): React.JSX.Element;
//# sourceMappingURL=VoltraWidgetPreview.d.ts.map