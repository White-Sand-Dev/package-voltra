import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { VoltraInteractionEvent } from '../../events.js';
export type VoltraViewProps = {
    /**
     * Unique identifier for this view instance.
     * Used as 'source' in interaction events to identify which view triggered the event.
     * If not provided, a unique ID will be generated automatically.
     */
    id?: string;
    /**
     * Voltra JSX components to render
     */
    children: ReactNode;
    /**
     * Style for the view container
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Callback when user interacts with components in the view.
     * Events are filtered by this view's id (source).
     */
    onInteraction?: (event: VoltraInteractionEvent) => void;
};
/**
 * A React Native component that renders Voltra UI for Android using Jetpack Compose.
 */
export declare function VoltraView({ id, children, style, onInteraction }: VoltraViewProps): React.JSX.Element;
//# sourceMappingURL=VoltraView.d.ts.map