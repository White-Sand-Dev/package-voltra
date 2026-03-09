import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { VoltraViewProps } from './VoltraView.js';
/**
 * Android-specific widget sizes in dp.
 */
export type AndroidWidgetFamily = 'small' | 'mediumSquare' | 'mediumWide' | 'mediumTall' | 'large' | 'extraLarge';
export type VoltraWidgetPreviewProps = Omit<VoltraViewProps, 'style'> & {
    /**
     * Android widget size to preview
     */
    family: AndroidWidgetFamily;
    /**
     * Additional styles to apply on top of the widget dimensions
     */
    style?: StyleProp<ViewStyle>;
};
/**
 * A preview component that renders Voltra Android JSX content at specific dimensions.
 */
export declare function VoltraWidgetPreview({ family, style, children, ...voltraViewProps }: VoltraWidgetPreviewProps): React.JSX.Element;
//# sourceMappingURL=VoltraWidgetPreview.d.ts.map