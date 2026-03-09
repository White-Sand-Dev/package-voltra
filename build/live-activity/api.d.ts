import type { DismissalPolicy, LiveActivityVariants } from './types.js';
export type SharedLiveActivityOptions = {
    /**
     * Unix timestamp in milliseconds
     */
    staleDate?: number;
    /**
     * Double value between 0.0 and 1.0
     * @default 0.0
     */
    relevanceScore?: number;
    /**
     * How the Live Activity should be dismissed after ending
     * @default 'immediate'
     */
    dismissalPolicy?: DismissalPolicy;
};
export type StartLiveActivityOptions = {
    /**
     * The name of the Live Activity.
     * Allows you to rebind to the same activity on app restart.
     */
    activityName?: string;
    /**
     * URL to open when the Live Activity is tapped.
     */
    deepLinkUrl?: string;
    /**
     * Channel ID for broadcast push notifications (iOS 18+).
     * When provided, the Live Activity subscribes to broadcast updates on this channel
     * instead of receiving individual push tokens.
     */
    channelId?: string;
} & SharedLiveActivityOptions;
export type UpdateLiveActivityOptions = SharedLiveActivityOptions;
export type EndLiveActivityOptions = {
    dismissalPolicy?: DismissalPolicy;
};
export type UseLiveActivityOptions = {
    /**
     * The name of the Live Activity.
     * Allows you to rebind to the same activity on app restart.
     */
    activityName?: string;
    /**
     * Automatically start the Live Activity when the component mounts.
     */
    autoStart?: boolean;
    /**
     * Automatically update the Live Activity when the component updates.
     */
    autoUpdate?: boolean;
    /**
     * URL to open when the Live Activity is tapped.
     */
    deepLinkUrl?: string;
    /**
     * Channel ID for broadcast push notifications (iOS 18+).
     */
    channelId?: string;
};
export type UseLiveActivityResult = {
    start: (options?: StartLiveActivityOptions) => Promise<void>;
    update: (options?: UpdateLiveActivityOptions) => Promise<void>;
    end: (options?: EndLiveActivityOptions) => Promise<void>;
    isActive: boolean;
};
/**
 * React hook for managing Live Activities with automatic lifecycle handling.
 *
 * @param variants - The Live Activity content variants to display
 * @param options - Configuration options for the hook
 * @returns Object with start, update, end methods and isActive state
 *
 * @example
 * ```tsx
 * import { useLiveActivity, Voltra } from 'voltra'
 *
 * const MyLiveActivity = () => {
 *   const { start, update, end, isActive } = useLiveActivity({
 *     minimal: <Voltra.Text>Live Activity</Voltra.Text>,
 *     compact: <Voltra.HStack>...</Voltra.HStack>,
 *     expanded: <Voltra.VStack>...</Voltra.VStack>
 *   }, {
 *     activityName: 'my-activity',
 *     autoStart: true,
 *     autoUpdate: true
 *   })
 *
 *   return (
 *     <View>
 *       <Button title={isActive ? "Stop" : "Start"} onPress={isActive ? end : start} />
 *     </View>
 *   )
 * }
 * ```
 */
export declare const useLiveActivity: (variants: LiveActivityVariants, options?: UseLiveActivityOptions) => UseLiveActivityResult;
/**
 * Start a new Live Activity with the provided content variants.
 *
 * @param variants - The Live Activity content variants to display
 * @param options - Configuration options for the Live Activity
 * @returns Promise resolving to the activity ID
 *
 * @example
 * ```tsx
 * import { startLiveActivity, Voltra } from 'voltra'
 *
 * const activityId = await startLiveActivity({
 *   minimal: <Voltra.Text>Live Activity</Voltra.Text>,
 *   compact: <Voltra.HStack>...</Voltra.HStack>,
 *   expanded: <Voltra.VStack>...</Voltra.VStack>
 * }, {
 *   activityName: 'my-activity',
 *   deepLinkUrl: '/details',
 *   relevanceScore: 0.8
 * })
 * ```
 */
export declare const startLiveActivity: (variants: LiveActivityVariants, options?: StartLiveActivityOptions) => Promise<string>;
/**
 * Update an existing Live Activity with new content.
 *
 * @param targetId - The ID of the Live Activity to update
 * @param variants - The new Live Activity content variants
 * @param options - Update options like relevance score
 *
 * @example
 * ```tsx
 * import { updateLiveActivity, Voltra } from 'voltra'
 *
 * await updateLiveActivity('activity-123', {
 *   minimal: <Voltra.Text>Updated: Live Activity</Voltra.Text>,
 *   compact: <Voltra.HStack>...</Voltra.HStack>,
 *   expanded: <Voltra.VStack>...</Voltra.VStack>
 * }, {
 *   relevanceScore: 0.9
 * })
 * ```
 */
export declare const updateLiveActivity: (targetId: string, variants: LiveActivityVariants, options?: UpdateLiveActivityOptions) => Promise<void>;
/**
 * Stop a Live Activity.
 *
 * @param targetId - The ID of the Live Activity to stop
 * @param options - Options for how to end the activity
 *
 * @example
 * ```tsx
 * import { stopLiveActivity } from 'voltra'
 *
 * await stopLiveActivity('activity-123', { dismissalPolicy: 'immediate' })
 * ```
 */
export declare const stopLiveActivity: (targetId: string, options?: EndLiveActivityOptions) => Promise<void>;
/**
 * Check if a Live Activity with the given name is currently active.
 *
 * @param activityName - The name of the Live Activity to check
 * @returns true if the activity is active, false otherwise
 *
 * @example
 * ```tsx
 * import { isLiveActivityActive } from 'voltra'
 *
 * if (isLiveActivityActive('my-activity')) {
 *   console.log('Activity is running')
 * }
 * ```
 */
export declare const isLiveActivityActive: (activityName: string) => boolean;
/**
 * End all active Live Activities.
 *
 * This function stops and dismisses all currently running Live Activities in the app.
 * It's useful for cleanup operations, such as when the app is being closed or
 * when you want to reset all Live Activity states.
 *
 * @example
 * ```typescript
 * import { endAllLiveActivities } from 'voltra'
 *
 * // End all active Live Activities
 * await endAllLiveActivities()
 * ```
 */
export declare function endAllLiveActivities(): Promise<void>;
//# sourceMappingURL=api.d.ts.map