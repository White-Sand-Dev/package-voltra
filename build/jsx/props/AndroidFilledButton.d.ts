import type { VoltraBaseProps } from '../baseProps';
export type AndroidFilledButtonProps = VoltraBaseProps & {
    /** Text to display */
    text: string;
    /** Whether the button is enabled */
    enabled?: boolean;
    /** Optional icon */
    icon?: Record<string, any>;
    /** Background color */
    backgroundColor?: string;
    /** Text/icon color */
    contentColor?: string;
    /** Maximum lines for text */
    maxLines?: number;
};
//# sourceMappingURL=AndroidFilledButton.d.ts.map