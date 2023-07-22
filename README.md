Browser App Transitions
=======================

This is a demo of common app transitions in the browser.

There are 3 ways to approach these problems

1. View Transitions API
  - Only supported in chrome
2. Framer Motion
3. With raw (es2015) JS / CSS

Note that I will still be using React for the layout

### Common animation patterns

- Open an image in larger / full screen mode when clicked - image gallery
- Page transitions back and forth when clicking links + back button
- Long press shrinks then pops out element into a larger detail view
- ViewPager / tabs where you're moving between tabs
- Notifications - swipe to dismiss / action
- Draggable nav with animation on current content
