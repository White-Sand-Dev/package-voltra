import { requireNativeView } from 'expo';
import React, { useEffect, useMemo } from 'react';
import { addVoltraListener } from '../../events.js';
import { androidComponentRegistry, createVoltraRenderer } from '../../renderer/renderer.js';
const NativeVoltraView = requireNativeView('VoltraModule');
// Generate a unique ID for views that don't have one
const generateViewId = () => `voltra-view-android-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
/**
 * A React Native component that renders Voltra UI for Android using Jetpack Compose.
 */
export function VoltraView({ id, children, style, onInteraction }) {
    // Generate a stable ID if not provided
    const viewId = useMemo(() => id || generateViewId(), [id]);
    const payload = useMemo(() => {
        const renderer = createVoltraRenderer(androidComponentRegistry);
        renderer.addRootNode('content', children);
        const rendered = renderer.render();
        // Move 'content' into 'variants' to match VoltraPayload structure
        const node = rendered.content;
        delete rendered.content;
        rendered.variants = { content: node };
        return JSON.stringify(rendered);
    }, [children]);
    // Subscribe to interaction events and filter by this view's ID
    useEffect(() => {
        if (!onInteraction)
            return;
        const subscription = addVoltraListener('interaction', (event) => {
            // Only forward events from this view
            if (event.source === viewId) {
                onInteraction({
                    type: 'interaction',
                    source: event.source,
                    timestamp: event.timestamp,
                    identifier: event.identifier,
                    payload: event.payload,
                });
            }
        });
        return () => subscription.remove();
    }, [viewId, onInteraction]);
    return <NativeVoltraView payload={payload} viewId={viewId} style={style}/>;
}
//# sourceMappingURL=VoltraView.js.map