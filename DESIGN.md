---
name: Aso & Thread
description: Nigerian cloth cut into ready-to-wear, built like aso-oke, in narrow strips sewn edge to edge.
colors:
  sanyan: "#e6e0d4"
  sanyan-deep: "#d9d1c1"
  sanyan-hover: "#cfc6b4"
  etu: "#171a2b"
  etu-soft: "#464757"
  alaari: "#8e1f33"
  alaari-press: "#741829"
  on-dark-soft: "#b9b3a8"
  white: "#ffffff"
  danger: "#a3172b"
typography:
  monument:
    fontFamily: "Anton, 'Arial Narrow', sans-serif"
    fontSize: "clamp(4.5rem, 18.7vw, 24rem)"
    fontWeight: 400
    lineHeight: 0.8
    letterSpacing: "-0.01em"
  display:
    fontFamily: "Anton, 'Arial Narrow', sans-serif"
    fontSize: "clamp(3.75rem, 0.5rem + 12.8vw, 12rem)"
    fontWeight: 400
    lineHeight: 0.84
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Anton, 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.5rem, 1.4rem + 4.6vw, 5.5rem)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Anton, 'Arial Narrow', sans-serif"
    fontSize: "clamp(2rem, 1.3rem + 2.2vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "'Work Sans', system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem)"
    fontWeight: 400
    lineHeight: 1.35
  body:
    fontFamily: "'Work Sans', system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.96rem + 0.2vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "'Work Sans', system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.96rem + 0.2vw, 1.125rem)"
    fontWeight: 600
    lineHeight: 1.1
  small:
    fontFamily: "'Work Sans', system-ui, sans-serif"
    fontSize: "clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem)"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: "0px"
spacing:
  seam: "4px"
  gutter: "24px"
  margin: "clamp(16px, 2.2vw, 32px)"
  section-gap: "clamp(96px, 12vw, 200px)"
components:
  button-primary:
    backgroundColor: "{colors.alaari}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 26px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.alaari-press}"
  button-ink:
    backgroundColor: "{colors.etu}"
    textColor: "{colors.sanyan}"
    rounded: "{rounded.none}"
    padding: "0 26px"
    height: "52px"
  button-quiet:
    backgroundColor: "{colors.sanyan-deep}"
    textColor: "{colors.etu}"
    rounded: "{rounded.none}"
    padding: "0 26px"
    height: "52px"
  button-quiet-hover:
    backgroundColor: "{colors.sanyan-hover}"
  button-light:
    backgroundColor: "{colors.sanyan}"
    textColor: "{colors.etu}"
    rounded: "{rounded.none}"
    padding: "0 26px"
    height: "52px"
  button-light-hover:
    backgroundColor: "{colors.white}"
  chip:
    backgroundColor: "{colors.sanyan-deep}"
    textColor: "{colors.etu}"
    rounded: "{rounded.none}"
    padding: "0 18px"
    height: "46px"
  chip-hover:
    backgroundColor: "{colors.sanyan-hover}"
  chip-selected:
    backgroundColor: "{colors.etu}"
    textColor: "{colors.sanyan}"
  size-option:
    backgroundColor: "{colors.sanyan-deep}"
    textColor: "{colors.etu}"
    rounded: "{rounded.none}"
    padding: "0 14px"
    height: "48px"
  size-option-selected:
    backgroundColor: "{colors.etu}"
    textColor: "{colors.sanyan}"
  swatch-selected:
    backgroundColor: "{colors.alaari}"
    rounded: "{rounded.none}"
    padding: "4px"
    size: "52px"
  input:
    backgroundColor: "{colors.sanyan}"
    textColor: "{colors.etu}"
    rounded: "{rounded.none}"
    padding: "12px 14px"
    height: "52px"
  bag-count-filled:
    backgroundColor: "{colors.alaari}"
    textColor: "{colors.white}"
    typography: "{typography.small}"
    rounded: "{rounded.none}"
    height: "26px"
  order-note:
    backgroundColor: "{colors.etu}"
    textColor: "{colors.sanyan}"
    typography: "{typography.small}"
    rounded: "{rounded.none}"
    padding: "18px 20px 20px"
---

# Design System: Aso & Thread

## Overview

**Creative North Star: "The Sewn Strip"**

Aso-oke is woven in narrow strips and sewn selvedge to selvedge into one cloth, and every surface here is assembled the same way. Photographs stand as tall strips of unequal width, joined by 4px seams of the ground colour; options, actions and accordions stack with the same seam. The palette is the classic aso-oke trio (sanyan, etu, alaari) and nothing else. Corners are square everywhere because cut cloth is square.

The type is a monument and a working voice. Anton capitals carry the name and every heading at very large sizes with tight leading; Work Sans carries everything a visitor reads or acts on. Density is low: large section gaps, a 12-column grid with content pushed off-centre, and photography doing most of the talking.

Depth comes from tone and cut, not from light. Surfaces are flat fills of sanyan, sanyan-deep and etu; only the two things that truly float over the page (the bag drawer and the notice) cast a shadow. Motion behaves like cloth: strips unroll from the bottom edge, panels widen when touched, the wordmark yields slightly as its section leaves.

**Key Characteristics:**
- Photographs sewn into strips with 4px seams of ground; never a uniform card grid with wide gutters.
- Three-colour palette from aso-oke; alaari is rationed.
- Anton uppercase monuments over Work Sans text.
- Square corners and a single button shape.
- Flat tonal fills; shadows only on real overlays.
- Selected state is "lit": etu ground, sanyan ink.

## Colors

A natural-silk ground, an indigo-black ink and one crimson voice, the trio of classic aso-oke.

### Primary
- **Alaari Crimson** (alaari): the colour of action. Primary button fill, the selected colour swatch frame, the filled bag count, text selection, the focus ring, input caret, and one full colour field per page (Home "New Arrivals", About beliefs). Pressed/hovered buttons deepen to **Alaari Press** (alaari-press).

### Neutral
- **Sanyan Silk** (sanyan): the page ground, the seam colour, the ink on etu fields (`on-dark`), and the light button on dark or alaari fields.
- **Sanyan Deep** (sanyan-deep): the surface tone. Quiet buttons, chips, size options, stepper, accordions, form panel, image placeholders, and the alternating fill of table rows.
- **Sanyan Hover** (sanyan-hover): the hover tone for every sanyan-deep control (chips, size options, stepper, quiet button).
- **Etu Indigo-Black** (etu): all text, the hero and footer fields, the phone menu, the order note, the notice, the WhatsApp card, the "New" tile tag, and the lit selected state.
- **Etu Soft** (etu-soft): muted text (hints, meta, captions, table secondary columns).
- **Sanyan Soft** (on-dark-soft): muted text on etu fields.
- **Danger** (danger): field errors and invalid option groups only.

### Named Rules
**The Rationed Crimson Rule.** Alaari appears only on the primary action, the selected swatch, the filled bag count, focus/selection, and at most one full colour field per page. Anything else that wants emphasis uses etu.

**The Lit Selection Rule.** A selected chip or size is lit: etu ground with sanyan ink. Alaari marks a selected swatch only, because the swatch's own colour cannot change.

## Typography

**Display Font:** Anton (with 'Arial Narrow', sans-serif), weight 400 only, always uppercase
**Body Font:** Work Sans (with system-ui), weights 400/500/600

**Character:** A condensed poster capital standing like a woven label over a plain, open grotesk. The display face never sets running text; the text face never goes uppercase.

### Hierarchy
- **Monument** (400, clamp(4.5rem, 18.7vw, 24rem), 0.8): the brand name only, full-bleed at the foot of the home hero and again cut by the bottom edge of the footer. On phones it breaks onto lines at 26vw.
- **Display** (400, clamp(3.75rem → 12rem), 0.84): page titles and section statements (New Arrivals, The Cloth, About and Contact titles).
- **Headline** (400, clamp(2.5rem → 5.5rem), 0.88): section headings, footer invitation.
- **Title** (400, clamp(2rem → 3.25rem), 0.9): product name, belief headings.
- **Lead** (400, clamp(1.25rem → 1.625rem), 1.35): hero sentence, intro leads, collection panel names, bag title. Product and step names use it at 600 in Work Sans.
- **Body** (400, clamp(1rem → 1.125rem), 1.55): running text, held to 30–48ch.
- **Label** (600, body size, 1.1): buttons, field labels, legends, product names in tiles.
- **Small** (400–600, clamp(0.8125rem → 0.875rem)): meta, hints, prices in strips, credits, notices.

### Named Rules
**The Two Voices Rule.** Anton is uppercase, weight 400, letter-spacing -0.01em and leading under 0.92. Work Sans is sentence case at any weight up to 600. Never mix their roles.

**The Tabular Price Rule.** Prices and quantities use tabular figures.

## Layout

A 12-column grid with 24px gutters inside a fluid page margin (clamp(16px, 2.2vw, 32px)); sections are separated by a large gap (clamp(96px, 12vw, 200px)). Content is placed off-centre: titles hold the left columns, text and tables are pushed right (columns 7–12 or 8–12), and headings may be indented by a fraction of the grid rather than centred.

Photographic groups are the signature. They are sewn bands of unequal widths (5:3:3, 3:2:4:2:3, flex-grow weights) joined by the 4px seam, often running full-bleed past the page margin, at tall viewport heights (44–76svh). Product grids use a 4px column seam with a 36–56px row gap. Staggered compositions offset alternate items vertically rather than aligning everything.

Breakpoints: 1100px (product layout rebalance), 960px (four columns to two, footer stacks), 760px (single column; galleries become a horizontal snap strip at 86% width; bands re-cut into unequal two-row mosaics; buttons go full width). The header is sticky at 68px (60px on phones); the product gallery rides sticky beside the order column.

### Named Rules
**The Seam Rule.** Anything adjacent that belongs together (photographs, options, swatches, stacked actions, accordions) is joined by a 4px gap of ground. Not 8, not 16, and never a drawn line.

**The Unequal Strip Rule.** Strips in a band never share one width.

## Elevation & Depth

Flat by default. Depth comes from tonal layering (sanyan ground, sanyan-deep surface, etu fields) and from the cut of photographs against the ground. There are no divider rules: tables alternate sanyan-deep row fills instead of borders. Inset 1px hairlines appear only inside colour swatches and dots so pale cloth stays visible, and as focus and error rings.

### Shadow Vocabulary
- **Drawer** (`box-shadow: -24px 0 60px rgba(23, 26, 43, 0.22)`): the bag drawer, over a 50% etu scrim.
- **Notice** (`box-shadow: 0 16px 40px rgba(23, 26, 43, 0.28)`): the floating notice at the foot of the viewport.

### Named Rules
**The Only-What-Floats Rule.** A shadow is permitted only on an element that genuinely floats over the page. Tiles, panels, buttons and cards never cast one.

**The No-Line Rule.** Separation is made with seams, fills and space, never with border rules. Form fields are the one exception (1px etu at 28%).

## Shapes

Square corners everywhere (0px): buttons, chips, swatches, inputs, the order note, the drawer, images. Photographs are cropped tall (3:4.4, 4:5, 3:4.6) with object-fit cover. Strips are slightly offset vertically in the hero and in staggered lists, so edges read as sewn pieces rather than a printed grid. Icons are a single stroke set on a 24px grid, 1.6 stroke, square caps. Lists in prose use square markers.

## Components

### Buttons
Square, solid and singular.
- **Shape:** square (0px), min-height 52px (58px for the product page actions), padding 0 26px, label weight 600.
- **Primary:** alaari fill, white label. Used once per view for the main action.
- **Hover / Focus / Active:** hover deepens to alaari-press; active scales to 0.97 over 160ms; focus is a 2px alaari outline offset 3px (sanyan on etu fields).
- **Ink / Quiet / Light:** etu with sanyan text; sanyan-deep with etu text (hover sanyan-hover); sanyan on dark or alaari fields (hover white). Same shape; only the fill changes.
- **Text link:** weight 600, 2px underline at 0.3em offset that drops to 0.42em on hover.

### Chips
- **Style:** sanyan-deep fill, etu text, weight 500, 46px tall (40px small), counts in muted small type. Grouped with the 4px seam.
- **State:** selected is lit (etu fill, sanyan text); hover on unselected is sanyan-hover; active scales to 0.97.

### Option picker (sizes and swatches)
- **Sizes:** 56×48 minimum sanyan-deep squares, lit when selected, struck through at 40% etu when unavailable, seamed 4px apart. An invalid group draws a 2px inset danger ring on unselected options.
- **Swatches:** 52px squares holding the cloth colour inside a 6px sanyan-deep frame; the selected one tightens to a 4px alaari frame with a 3px sanyan inner line, so selection reads by frame weight as well as colour.

### Cards / Containers
- **Corner Style:** square.
- **Background:** product tiles have no container; the photograph (3:4.4) sits directly on the ground with name, price and colour dots beneath. Hover zooms the image to 1.035 and crossfades an alternate shot.
- **Shadow Strategy:** none (see Elevation).
- **Border:** none.
- **Panels:** the contact form and bag foot sit on sanyan-deep fills with generous padding (24–56px).

### Inputs / Fields
- **Style:** sanyan ground, 1px etu-at-28% border, square, 52px min-height, padding 12px 14px, alaari caret, bold label above and muted hint below.
- **Focus:** border goes etu with a 2px etu ring.
- **Error:** danger border with a 1px danger ring and a bold danger message.

### Navigation
- **Header:** sticky sanyan bar (transparent over the etu hero), Anton wordmark at lead size on the left, Work Sans 500 links, bag at the right. The active link carries a 2px underline seam that scales in from the left; hover draws the same.
- **Bag count:** a 26px square in sanyan-deep (translucent sanyan on etu) that fills alaari once the bag holds anything.
- **Mobile:** links collapse into a full-height etu menu with links at clamp(3.5rem, 17vw, 6rem), entering with a short drop.

### Order Note (signature)
The WhatsApp message as it will be sent: a square etu block with sanyan text, item name in body weight 600, then a two-column list of label and value. Each value that changes settles in (360ms rise with a brief blur), so the visitor watches the message being rewritten. Missing choices show in a pale crimson wavy underline.

### Sewn Strip Band (signature)
Tall photographs of unequal widths joined by 4px seams. On scroll entry each strip unrolls from the bottom edge (clip-path over 800ms, staggered 70ms); on hover the touched strip widens (flex-grow over 600ms) and its image eases to 1.03. Labels sit in an 82% etu bar at the strip foot.

### Bag Drawer and Notice
The two floating elements. The drawer slides in from the right over a 50% etu scrim (380ms on the drawer curve, 220ms out); the notice rises from the bottom as an etu bar with a sanyan action button.

### Motion
Ease-out (cubic-bezier(0.23, 1, 0.32, 1)) for entrances and feedback, ease-in-out (cubic-bezier(0.77, 0, 0.175, 1)) for strip reveals and widening, drawer curve (cubic-bezier(0.32, 0.72, 0, 1)) for sliding panels. Text and blocks rise 24px and fade in, staggered 80ms. The home monument scales from 1 to 0.94 as its section leaves. Content is visible by default and hidden only once script confirms motion is allowed; reduced motion collapses all durations to 1ms.

## Do's and Don'ts

### Do:
- **Do** join related photographs, options and stacked actions with the 4px sanyan seam.
- **Do** cut photographic bands at unequal widths and let them run full-bleed.
- **Do** keep alaari to the primary action, the selected swatch, the filled bag count, focus/selection and one full field per page.
- **Do** light selected chips and sizes in etu with sanyan text.
- **Do** separate table rows with alternating sanyan-deep fills.
- **Do** set every heading in Anton uppercase at weight 400 with leading under 0.92.
- **Do** reveal photographs by unrolling from the bottom edge, and provide the reduced-motion fallback.

### Don't:
- **Don't** round any corner.
- **Don't** introduce a second button shape, an outline button or a pill.
- **Don't** draw divider rules or borders between rows, sections or cards; fields are the only bordered element.
- **Don't** cast shadows on anything that does not float over the page.
- **Don't** add colours beyond the sanyan, etu and alaari trio and their recorded tints.
- **Don't** lay products out as an equal card grid with wide gutters and centred logo-over-banner framing.
- **Don't** set running text in Anton or uppercase Work Sans.
