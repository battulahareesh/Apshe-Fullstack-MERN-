/*
 * ============================================================
 * App.css — STYLES SPECIFIC TO THE APP COMPONENT & TEMPLATE
 * ============================================================
 *
 * These styles are imported in App.jsx and provide styling for
 * the default Vite + React template components (hero section,
 * counter button, next-steps section, etc.).
 *
 * NOTE: Some of these styles may not be actively used if the
 * template content has been replaced with custom components.
 * They are kept here for reference and in case you want to
 * restore the original Vite template layout.
 *
 * CONCEPT: CSS NESTING
 * Modern CSS allows NESTING selectors using the & character.
 * Example:
 *   .parent {
 *     &:hover { ... }    →  same as  .parent:hover { ... }
 *     .child { ... }     →  same as  .parent .child { ... }
 *   }
 * This keeps related styles grouped together for better readability.
 */

/* ── Counter Button ── */
/* The counter button from the default Vite template */
.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);                  /* Purple accent text */
  background: var(--accent-bg);          /* Light purple background */
  border: 2px solid transparent;         /* Invisible border (prevents layout shift on hover) */
  transition: border-color 0.3s;         /* Smooth 0.3s animation when border color changes */
  margin-bottom: 24px;

  /* Nested pseudo-class: when the user hovers over the button */
  &:hover {
    border-color: var(--accent-border);  /* Show purple border on hover */
  }

  /* Nested pseudo-class: visible focus outline for keyboard navigation (accessibility) */
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;                 /* Space between element and outline */
  }
}

/* ── Hero Section ── */
/* The logo/brand area at the top of the default template */
.hero {
  position: relative;                    /* Enables absolute positioning for children */

  /* Shared styles for logo elements */
  .base,
  .framework,
  .vite {
    inset-inline: 0;                     /* Stretch horizontally */
    margin: 0 auto;                      /* Center horizontally */
  }

  .base {
    width: 170px;
    position: relative;
    z-index: 0;                          /* Background layer */
  }

  .framework,
  .vite {
    position: absolute;                  /* Position on top of .base */
  }

  /* Framework logo with 3D perspective transform */
  .framework {
    z-index: 1;                          /* Above .base */
    top: 34px;
    height: 28px;
    /* 3D rotation for visual effect — creates a tilted perspective look */
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
      scale(1.4);
  }

  /* Vite logo with 3D perspective transform */
  .vite {
    z-index: 0;                          /* Behind .framework */
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
      scale(0.8);
  }
}

/* ── Center Content Area ── */
/* The main content area using flexbox for centering */
#center {
  display: flex;
  flex-direction: column;                /* Stack items vertically */
  gap: 25px;                             /* Space between flex children */
  place-content: center;                 /* Center content vertically */
  place-items: center;                   /* Center items horizontally */
  flex-grow: 1;                          /* Take up all available space */

  /* Responsive: adjust padding and gap on smaller screens */
  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

/* ── Next Steps Section ── */
/* The bottom section with documentation and social links */
#next-steps {
  display: flex;                         /* Side-by-side layout */
  border-top: 1px solid var(--border);   /* Top border separator */
  text-align: left;                      /* Left-align text in this section */

  /* Direct child divs */
  & > div {
    flex: 1 1 0;                         /* Each child takes equal width */
    padding: 32px;
    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  /* Icon styling within next-steps */
  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  /* Responsive: stack vertically on mobile */
  @media (max-width: 1024px) {
    flex-direction: column;              /* Vertical layout on small screens */
    text-align: center;
  }
}

/* Documentation section (left side) */
#docs {
  border-right: 1px solid var(--border); /* Divider between docs and social */

  /* On mobile: replace right border with bottom border */
  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}

/* ── Social Links List ── */
#next-steps ul {
  list-style: none;                      /* Remove bullet points */
  padding: 0;                            /* Remove default padding */
  display: flex;                         /* Horizontal layout */
  gap: 8px;                              /* Space between links */
  margin: 32px 0 0;

  .logo {
    height: 18px;
  }

  /* Individual social link styling */
  a {
    color: var(--text-h);
    font-size: 16px;
    border-radius: 6px;
    background: var(--social-bg);
    display: flex;
    padding: 6px 12px;
    align-items: center;
    gap: 8px;
    text-decoration: none;               /* Remove underline from links */
    transition: box-shadow 0.3s;         /* Smooth shadow animation on hover */

    /* Show shadow on hover for depth effect */
    &:hover {
      box-shadow: var(--shadow);
    }

    .button-icon {
      height: 18px;
      width: 18px;
    }
  }

  /* Responsive: wrap links on mobile */
  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;                     /* Allow wrapping to next line */
    justify-content: center;

    li {
      flex: 1 1 calc(50% - 8px);        /* Two items per row on mobile */
    }

    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}

/* ── Bottom Spacer ── */
/* Empty space at the bottom of the page */
#spacer {
  height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;                        /* Less space on mobile */
  }
}

/* ── Decorative Tick Marks ── */
/* Small triangle decorations on horizontal rules */
.ticks {
  position: relative;
  width: 100%;

  /* Create triangle shapes using CSS borders */
  &::before,
  &::after {
    content: '';                         /* Required for pseudo-elements to appear */
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;       /* Transparent base, colored on one side = triangle */
  }

  /* Left-pointing triangle */
  &::before {
    left: 0;
    border-left-color: var(--border);
  }

  /* Right-pointing triangle */
  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}
