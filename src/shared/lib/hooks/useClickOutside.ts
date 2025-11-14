import { type RefObject, useEffect } from 'react';

/**
 * Hook for detecting clicks outside a referenced element
 *
 * Useful for closing dropdowns, modals, and menus when clicking outside them.
 *
 * @param ref - React ref to the element to monitor
 * @param handler - Callback function to execute when clicking outside
 * @param enabled - Whether the hook is active (default: true)
 *
 * @example
 * ```tsx
 * const menuRef = useRef<HTMLDivElement>(null);
 * useClickOutside(menuRef, () => setIsOpen(false), isOpen);
 * ```
 */
export function useClickOutside<T extends HTMLElement>(
	ref: RefObject<T | null>,
	handler: () => void,
	enabled: boolean = true
) {
	useEffect(() => {
		if (!enabled) return;

		function handleClickOutside(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				handler();
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref, handler, enabled]);
}
