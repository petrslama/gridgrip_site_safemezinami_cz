# safemezinami.cz — Site Instructions

Czech one-page site for SaFe – mezi námi. Two counselors (Táňa Faltisová, Michaela Skalová) offering therapy, consultations, school programs and workshops in Hodonín area.

## Template

`inSite` — components live directly in `site/safemezinami_cz/components/`, not in a shared template directory.

## Design

- Fonts: Cormorant Garamond (headings) + DM Sans (body)
- Palette: earthy greens (`#6b8f5e` primary), warm neutrals (`#fdf8f5` bg), muted pink accent (`#b8878e`)
- Tone: warm, professional, approachable — safe space for people in difficult life situations

## Structure

Single-page site. All navigation is anchor-based (`/#section_id`).

### Sections (in order)

1. `o_hero` — main visual, headline, CTA buttons
2. `o_team` (`#o-nas`) — bios of Táňa and Michaela
3. `o_features_grid` (`#sluzby`) — 4 services: individual support, therapy, school programs, workshops
4. `o_pricing` (`#ceny`) — 3 pricing tiers (individual 800 Kč, therapy 1 000 Kč, group from 2 500 Kč)
5. `o_values` (`#hodnoty`) — 6 value cards
6. `o_delivery` — 3 delivery modes (in-person, online, schools)
7. `o_contact` (`#kontakt`) — contact cards for both counselors with email + phone

### Layout

- Header: logo + anchor nav (O nás, Služby, Ceny, Hodnoty, Kontakt) + CTA button
- Footer: logo + copyright + note about non-NGO services

## Site-Specific Components

Components not in the shared `default` template:

- `o_contact` — contact cards with photos, name, email + phone buttons
- `o_delivery` — icon + title + description cards for delivery modes
- `o_pricing` — pricing cards with icon, label, title, price, currency, per-unit, note, featured flag
- `o_team` — team member cards with photo, role, name, bio
- `o_values` — icon + title + description value cards

## Content Rules

- All text in Czech
- Contact: Michaela michaela@safemezinami.cz / +420 606 169 045, Táňa tana@safemezinami.cz / +420 702 128 833
- Pricing must stay up to date with current rates
