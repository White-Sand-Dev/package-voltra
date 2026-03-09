import { createVoltraComponent } from './createVoltraComponent.js';
// Helper function to convert point to string
const convertPointToString = (point) => {
    if (!point)
        return null;
    if (typeof point === 'string')
        return point;
    if (Array.isArray(point) && point.length === 2) {
        const [x, y] = point;
        if (typeof x === 'number' && typeof y === 'number') {
            // Convert coordinate to closest predefined point
            if (x === 0 && y === 0)
                return 'topLeading';
            if (x === 0.5 && y === 0)
                return 'top';
            if (x === 1 && y === 0)
                return 'topTrailing';
            if (x === 0 && y === 0.5)
                return 'leading';
            if (x === 0.5 && y === 0.5)
                return 'center';
            if (x === 1 && y === 0.5)
                return 'trailing';
            if (x === 0 && y === 1)
                return 'bottomLeading';
            if (x === 0.5 && y === 1)
                return 'bottom';
            if (x === 1 && y === 1)
                return 'bottomTrailing';
            // For custom coordinates, encode as "x,y"
            return `${x},${y}`;
        }
        return null;
    }
    if (typeof point === 'object' && point.x != null && point.y != null) {
        const x = typeof point.x === 'number' ? point.x : Number(point.x);
        const y = typeof point.y === 'number' ? point.y : Number(point.y);
        if (!Number.isNaN(x) && !Number.isNaN(y)) {
            // Convert coordinate to closest predefined point
            if (x === 0 && y === 0)
                return 'topLeading';
            if (x === 0.5 && y === 0)
                return 'top';
            if (x === 1 && y === 0)
                return 'topTrailing';
            if (x === 0 && y === 0.5)
                return 'leading';
            if (x === 0.5 && y === 0.5)
                return 'center';
            if (x === 1 && y === 0.5)
                return 'trailing';
            if (x === 0 && y === 1)
                return 'bottomLeading';
            if (x === 0.5 && y === 1)
                return 'bottom';
            if (x === 1 && y === 1)
                return 'bottomTrailing';
            // For custom coordinates, encode as "x,y"
            return `${x},${y}`;
        }
    }
    return null;
};
export const LinearGradient = createVoltraComponent('LinearGradient', {
    toJSON: ({ colors, locations, start, end, ...otherProps }) => {
        const updatedProps = { ...otherProps };
        // Handle colors array (required in Expo API)
        if (Array.isArray(colors)) {
            updatedProps.colors = colors.join('|');
        }
        // Handle locations array (Expo API)
        if (Array.isArray(locations)) {
            // Convert locations to stops format for iOS compatibility
            const stops = colors.map((color, index) => `${String(color)}@${locations[index]}`);
            updatedProps.stops = stops.join('|');
        }
        // Handle start point (Expo API)
        const startPoint = convertPointToString(start);
        if (startPoint)
            updatedProps.startPoint = startPoint;
        // Handle end point (Expo API)
        const endPoint = convertPointToString(end);
        if (endPoint)
            updatedProps.endPoint = endPoint;
        return updatedProps;
    },
});
//# sourceMappingURL=LinearGradient.js.map