/**
 * Disable Text Selection and Context Menu
 * Prevents users from selecting text and right-clicking on the website
 */

(function () {
    'use strict';

    // Utility: detect interactive targets
    function isInteractive(el) {
        if (!el) return false;
        if (el.closest('input, textarea, select, button, [contenteditable="true"], .form_control, form')) return true;
        const tag = el.tagName;
        return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || tag === 'BUTTON';
    }

    // Keep: block context menu (but never on inputs)
    function initContextMenuGuard() {
        document.addEventListener('contextmenu', function (e) {
            if (isInteractive(e.target)) return; // allow right-click in inputs
            e.preventDefault();
        });
    }

    // Keep: block some shortcuts outside inputs only
    function initKeyboardGuards() {
        document.addEventListener('keydown', function (e) {
            if (isInteractive(e.target)) return; // never block while typing

            const k = e.key?.toLowerCase();
            const mod = (c) => (e.ctrlKey || e.metaKey) && k === c;

            if (mod('a') || mod('c') || mod('v') || mod('x') || mod('u')) {
                e.preventDefault();
            }
            if (k === 'f12' || (e.ctrlKey && e.shiftKey && k === 'i')) {
                e.preventDefault();
            }
        });
    }

    // Remove aggressive selection/drag suppression that caused input blur.
    // We rely on CSS for selection restrictions and avoid JS that interferes with focus.

    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function () {
                initContextMenuGuard();
                initKeyboardGuards();
            });
        } else {
            initContextMenuGuard();
            initKeyboardGuards();
        }
    }

    init();
})();
