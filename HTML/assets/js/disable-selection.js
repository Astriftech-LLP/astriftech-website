/**
 * Disable Text Selection and Context Menu
 * Prevents users from selecting text and right-clicking on the website
 */

(function() {
    'use strict';

    // Disable text selection
    function disableTextSelection() {
        // Disable text selection via JavaScript
        document.onselectstart = function() {
            return false;
        };
        
        // Disable text selection in Mozilla Firefox
        document.onmousedown = function() {
            return false;
        };
        
        // Disable drag
        document.ondragstart = function() {
            return false;
        };
    }

    // Disable right-click context menu
    function disableContextMenu() {
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });
    }

    // Disable keyboard shortcuts for copy/select all
    function disableKeyboardShortcuts() {
        document.addEventListener('keydown', function(e) {
            // Disable Ctrl+A (Select All)
            if (e.ctrlKey && e.key === 'a') {
                e.preventDefault();
                return false;
            }
            
            // Disable Ctrl+C (Copy)
            if (e.ctrlKey && e.key === 'c') {
                e.preventDefault();
                return false;
            }
            
            // Disable Ctrl+V (Paste) - optional
            if (e.ctrlKey && e.key === 'v') {
                e.preventDefault();
                return false;
            }
            
            // Disable Ctrl+X (Cut)
            if (e.ctrlKey && e.key === 'x') {
                e.preventDefault();
                return false;
            }
            
            // Disable F12 (Developer Tools) - optional
            if (e.key === 'F12') {
                e.preventDefault();
                return false;
            }
            
            // Disable Ctrl+Shift+I (Developer Tools) - optional
            if (e.ctrlKey && e.shiftKey && e.key === 'I') {
                e.preventDefault();
                return false;
            }
            
            // Disable Ctrl+U (View Source) - optional
            if (e.ctrlKey && e.key === 'u') {
                e.preventDefault();
                return false;
            }
        });
    }

    // Disable text selection on mobile devices
    function disableMobileSelection() {
        document.addEventListener('touchstart', function(e) {
            if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
            }
        });
    }

    // Initialize all text selection prevention methods
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                disableTextSelection();
                disableContextMenu();
                disableKeyboardShortcuts();
                disableMobileSelection();
            });
        } else {
            disableTextSelection();
            disableContextMenu();
            disableKeyboardShortcuts();
            disableMobileSelection();
        }
    }

    // Start the initialization
    init();

    // Additional protection - Clear any existing selections
    function clearSelection() {
        if (window.getSelection) {
            if (window.getSelection().empty) {
                window.getSelection().empty();
            } else if (window.getSelection().removeAllRanges) {
                window.getSelection().removeAllRanges();
            }
        } else if (document.selection) {
            document.selection.empty();
        }
    }

    // Clear selection periodically (optional - for extra protection)
    setInterval(clearSelection, 1000);

})();
