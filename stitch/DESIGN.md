---
name: Guard Retry Probe
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#b9c8de'
  on-secondary: '#233143'
  secondary-container: '#39485a'
  on-secondary-container: '#a7b6cc'
  tertiary: '#ffc176'
  on-tertiary: '#472a00'
  tertiary-container: '#f1a02b'
  on-tertiary-container: '#613b00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#d4e4fa'
  secondary-fixed-dim: '#b9c8de'
  on-secondary-fixed: '#0d1c2d'
  on-secondary-fixed-variant: '#39485a'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb960'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '450'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

The design system is engineered for technical clarity, reliability, and high-stakes monitoring. It prioritizes information density and functional utility over decorative flair, catering to a user base of developers, DevOps engineers, and security analysts. 

The aesthetic is **Corporate Modern with a Technical Edge**, leaning heavily into systematic logic and utilitarian layouts. The UI should evoke a sense of precision and immediate "at-a-glance" comprehension. Visual weight is used sparingly to direct attention to state changes and critical data points. The interface feels like a high-performance tool: cold, efficient, and exceptionally stable.

## Colors

The palette is anchored in a deep, "Midnight Slate" spectrum to reduce eye strain during prolonged monitoring sessions. 

- **Primary:** A bright, high-visibility "Sky Blue" used exclusively for interactive elements, focus states, and primary actions.
- **Neutral:** A range of slates (`#0F172A` to `#F8FAFC`). Backgrounds utilize the darkest values, while borders and secondary text use mid-range grays to maintain a clear hierarchy.
- **Functional/Semantic:** These colors are the most vibrant part of the UI. They are used strictly for status indicators (Success, Warning, Error). In a data-heavy environment, these colors act as the primary visual signal.
- **Contrast:** AA/AAA compliance is mandatory for all text-on-background combinations to ensure accessibility in high-pressure environments.

## Typography

This design system utilizes **Inter** for its exceptional legibility in digital interfaces and **JetBrains Mono** for technical data strings, logs, and IDs.

- **Scale:** The type scale is compact to allow for high data density without sacrificing readability. 
- **Hierarchy:** Use `label-caps` for table headers and section labels to create a distinct visual anchor. 
- **Mono Usage:** Any dynamic value (IP addresses, timestamps, retry counts) must use the monospaced font to prevent "jumping" during real-time updates and to align columns of data perfectly.

## Layout & Spacing

A **Strict 4px Grid System** governs all spatial relationships. 

- **Grid:** A 12-column fluid grid is used for dashboard layouts. On desktop, sidebars are fixed-width (240px or 280px) to maximize the "working area" for data tables and graphs.
- **Density:** High-density spacing is the default. Padding in table cells and lists should be minimized (`sm` or `md`) to allow as much information as possible to fit "above the fold."
- **Breakpoints:** 
    - Mobile (<768px): Single column, hidden sidebars (drawer menu).
    - Tablet (768px - 1280px): Collapsed sidebars (icons only).
    - Desktop (>1280px): Expanded persistent navigation.

## Elevation & Depth

This system avoids heavy shadows and traditional skeuomorphism in favor of **Tonal Layering and Border Definition**.

- **Surfaces:** Depth is created by lightening the background color. 
    - Level 0 (Base): `#0F172A`
    - Level 1 (Cards/Panels): `#1E293B`
    - Level 2 (Modals/Popovers): `#334155`
- **Borders:** Every container and interactive element must have a 1px border. 
    - Default borders: `Slate-800`
    - Active/Focus borders: `Primary-Sky-Blue`
- **Shadows:** Only used on the highest elevation (Modals) to provide a subtle "lift" from the dark background. Use a crisp, low-blur shadow: `0 4px 12px rgba(0,0,0,0.5)`.

## Shapes

The shape language is **Soft (0.25rem)**. This provides a subtle modern touch that prevents the UI from feeling overly aggressive or "brutalist," while maintaining the efficiency of a grid-aligned system. 

- **Interactive Elements:** Buttons and inputs use `0.25rem`. 
- **Large Containers:** Cards and panels use `0.5rem` (`rounded-lg`) to clearly define section boundaries.
- **Status Dots:** Small status indicators (online/offline) remain perfectly circular.

## Components

- **Buttons:** Solid primary buttons for main actions. Ghost buttons (border + text) for secondary actions. State changes (hover/active) should be immediate and high-contrast.
- **Data Tables:** The core of the system. Use zebra-striping only on hover. Headers are `label-caps`. 
- **Input Fields:** Darker than the container background. Use a 1px inset border. Focus state is a 1px `Primary-Sky-Blue` border with no outer glow.
- **Chips/Badges:** Used for status. For example, a "Success" badge uses a dark green background with light green text and a subtle green border. 
- **Toggles:** Small and tactile. When "On," the background should use the `Primary` color to provide a clear visual signal against the dark theme.
- **Probe Cards:** Summary cards for monitoring probes. Include a mini sparkline graph to show recent activity, using the semantic color associated with its current health status.