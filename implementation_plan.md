# Implementation Plan: *El Filibusterismo* — Class Presentation Website

## 1. Project Reframing & Vision
Unlike a traditional digital storybook that narrates the novel's plot line-by-line, this application is designed as a **scroll-driven academic & literary presentation tool** for live classroom delivery. 

As you scroll through the website during your presentation:
- **The Book Motif** serves as the framing device (opening the text to examine its anatomy, turning pages between major analytical acts).
- **On-Screen Copy** presents crisp, analytical thesis statements, historical facts, sociological archetypes, and structural comparisons—digestible for classmates and professors watching the screen.
- **Speaker Script (Companion Layer)** aligns 1:1 with every scroll trigger so you know exactly what to explain verbally as each visual state pins and reveals.

---

## 2. Strictly Scoped Asset Architecture
Per [01_SIMPLIFIED_SCROLL_WEBSITE_BRIEF.md](file:///home/aaronlime/code/rizal-el-filibusterismo/01_SIMPLIFIED_SCROLL_WEBSITE_BRIEF.md) and [02_MINIMUM_IMAGE_ASSET_PACK.md](file:///home/aaronlime/code/rizal-el-filibusterismo/02_MINIMUM_IMAGE_ASSET_PACK.md), the site relies strictly on the 13 core assets plus typography, CSS transforms, and scroll choreography:

```text
/public/assets/
  /book/
    book.glb            (Optional 3D fallback to CSS 3D book using book-cover.jpg + parchment.jpg)
    book-cover.jpg      (Closed antique leather cover)
    parchment.jpg       (Seamless aged paper texture for page spreads & cards)
  /characters/
    simoun.png          (The Radicalized Revolutionary / Anarchist)
    basilio.png         (The Assimilated Pragmatist Turned Rebel)
    isagani.png         (The Idealistic Poet-Patriot)
    juli.png            (The Martyred Peasant Youth)
    cabesang-tales.png  (The Dispossessed Peasant / Matanglawin)
    padre-florentino.png(The Moral Conscience / Native Secular Clergy)
    maria-clara.png     (The Death of Reformist Innocence)
  /scenes/
    bapor-tabo.jpg      (Allegory of the Two-Tiered Colonial State)
    crystal-lamp.jpg    (The Nitroglycerin Pomegranate Lamp / Concentrated Tears)
    final-ocean.jpg     (The Pacific Ocean Verdict & Legacy)
```

---

## 3. Tech Stack & Architecture
- **Core Stack:** Vite + Vanilla HTML5 / CSS3 / JavaScript (ES6+), or lightweight React—prioritizing zero-lag 60fps scroll performance during a live class presentation.
- **Animation Engine:** **GSAP (GreenSock) + ScrollTrigger** for pinned presentation slides, scrubbed book opening, staggered text reveals, and deck/lamp zoom transitions.
- **Typography & Visual Theme:**
  - *Display / Headings:* `Cormorant Garamond` or `Playfair Display` (19th-century literary authority).
  - *Body / Analytical Copy:* `Inter` or `Source Serif 4` (high legibility on classroom projectors).
  - *Accents / Metadata:* `JetBrains Mono` or `Cinzel` for historical dates, chapter markers, and archival labels.
  - *Color Palette:* Deep Espresso (`#120D0A`), Aged Parchment (`#F4EAD5`), Dried Blood Crimson (`#8B1E1E`), Tarnished Gold (`#C5A059`), and Charcoal Ink (`#1E1915`).

---

## 4. Presentation UI & Classroom Controls
To make this effortless to present in class:
1. **Top Progress & Chapter Bar:** Shows current section (`I. Context` → `II. Act I` → `III. Act II` → `IV. Act III` → `V. Act IV` → `VI. Noli vs. Fili` → `VII. Legacy & Verdict`) with one-click jump links.
2. **Keyboard Presentation Shortcuts:** `Right Arrow` / `Space` / `PageDown` smoothly tweens to the next scroll stop so you don't have to delicatelyfeather a trackpad while speaking.
3. **Character Archetype Drawer/Modal:** Clicking any of the 7 character portraits opens a clean sociological breakdown card (Archetype, Role, Symbolic Significance from Section III of `topic_outline.md`).
4. **Optional Presenter Notes Toggle (`P` key):** A subtle bottom-corner drawer that displays your current speaking cue if you want an on-screen teleprompter during class.

---

## 5. Section-by-Section Scroll & Visual Implementation Plan

### Stage 1: The Closed Book & Title Reveal (`#hero-book`)
- **Visual State:** Full-screen dark vignette (`#120D0A`). Centered 3D CSS/WebGL book built with `book-cover.jpg` and `parchment.jpg`.
- **Scroll Action (Pinned, `0% -> 100%`):**
  - `0–30%`: Hook quote fades in; book rotates from three-quarter angle to flat open spread.
  - `30–70%`: Left page reveals etymology of *Filibustero* (from Caribbean pirate to political subversive; Rizal's translation to Blumentritt: *"The Reign of Greed"*).
  - `70–100%`: Right page reveals title typography and transitions into the Prologue spread.

### Stage 2: Historical Context, Authorial Motivation & Printing Struggle (`#context`)
- **Visual State:** Two-page parchment spread (`parchment.jpg`) with archival red-ink callouts and timeline cards.
- **Scroll Sequence (3 Pinned Sub-panels):**
  1. **The Gomburza Dedication (1872):** Highlights Mariano Gómez (72), José Burgos (35), and Jacinto Zamora (36) executed Feb 17, 1872. Includes a specific **"Historical Note"** badge explaining Rizal's slight memory inaccuracies regarding their ages/dates while writing in Europe.
  2. **Three Catalysts Behind the Sequel:**
     - *Calamba Agrarian Dispute (1887–1891):* Dominican rent hikes and Governor-General Weyler's eviction of the Rizal family.
     - *Personal Heartbreak (1890):* Leonor Rivera marrying British engineer Henry Kipping (inspiring the Paulita Gómez / Isagani / Juanito Pelaez triangle).
     - *Propaganda Movement Split:* Disillusionment with peaceful lobbying in Madrid and the *La Solidaridad* rivalry with Marcelo H. del Pilar.
  3. **The Itinerant Writing & Ghent Printing Crisis (1887–1891):** Map/timeline strip from Calamba (1887) → London → Paris → Madrid → Brussels → Biarritz (completed March 29, 1891) → Ghent (F. Meyer-Van Loo Press). Highlights Rizal pawning his jewels, halting printing in August 1891, and **Valentin Ventura** funding the final release on September 18, 1891.

### Stage 3: Act I — Return of the Subversive & The Colonial Microcosm (Ch. 1–10) (`#act-1`)
- **Page-Turn Transition:** Animated page flip introduces Act I.
- **Scene 3A — The *Bapor Tabo* Allegory (Pinned Visual Breakdown):**
  - Full-bleed `bapor-tabo.jpg` scales into view.
  - Scroll step 1 highlights the **Vessel Itself**: Slow, circular, freshly whitewashed over filth—symbolizing the stagnant, hypocritical colonial state.
  - Scroll step 2 highlights the **Upper Deck**: European officials and friars lounging in privilege.
  - Scroll step 3 highlights the **Lower Deck**: *Indios*, Chinese traders, and students crushed beside the boiling engine.
- **Scene 3B — The Subversive & The Dispossessed (Portrait Grid + Analytical Cards):**
  - **Simoun (`simoun.png`):** Ibarra after 13 years—wealthy jeweler in blue-tinted spectacles accelerating colonial greed and tyranny to provoke revolt.
  - **Cabesang Tales (`cabesang-tales.png`) & Juli (`juli.png`):** Lockean labor theory of property vs. Dominican land-grabbing. Tales' evolution into the outlaw *Matanglawin* and Juli's indentured servitude.
  - **Basilio (`basilio.png`):** Christmas Eve encounter at Sisa's grave (Ch. 6–7). Staging the central ideological debate: **Assimilation & Science (Basilio) vs. Separatist Destruction (Simoun)**.

### Stage 4: Act II — Reformist Idealism vs. Colonial Decay (Ch. 11–24) (`#act-2`)
- **Page-Turn Transition:** Flip to Act II.
- **Scroll Sequence (4 Analytical Cards & Portrait Callouts):**
  1. **Arbitrary Governance & Academic Oppression (Ch. 11–13):** Los Baños card game politics alongside the UST Physics Class (`Ch. 13`). Explains how laboratory equipment locked behind glass and Father Millon's humiliation of Placido Penitente expose colonial education as an instrument of control.
  2. **The Castilian Academy Campaign (Ch. 14–15, 20–21):** Features `isagani.png` alongside sociological profiles of **Señor Pasta** (the self-serving technocrat) and **Don Custodio** (pretentious bureaucratic incompetence). Exposes the sham compromise making students mere tax collectors under religious orders.
  3. **Smuggling & Psychological Mirroring (Ch. 16–18):** Simoun exploiting Chinese merchant Quiroga's debts to smuggle rifles in fireworks crates, paired with Mr. Leeds' talking head **"Imuthis"** at the Quiapo fair mirroring Father Salví's lust and betrayal.
  4. **Death of Reformist Innocence (Ch. 22–23):** Features `maria-clara.png` and `simoun.png`. While students face betrayal at *Les Cloches de Corneville*, Basilio brings news of María Clara's death in Santa Clara convent—shattering Simoun and aborting the first uprising.

### Stage 5: Act III — Betrayal, Repression & Radicalization (Ch. 25–34) (`#act-3`)
- **Page-Turn Transition:** Darkening background palette shifting from sepia to charcoal and crimson.
- **Scroll Sequence:**
  1. **Satire & State Pretext (Ch. 25–27):** The *Pansiteria* satirical banquet, the mysterious *pasquinades* (seditious posters) used to arrest students, and Isagani's debate with Father Fernández (`isagani.png`) on why colonial institutions stunt Filipino intellect.
  2. **The Death of Juli & The Death of Reform (Ch. 29–30):** Features `juli.png`. Father Irene manipulates Captain Tiago's will; Juli leaps from the convent window to escape Father Camorra's assault.
  3. **Basilio's Radicalization & The Nitroglycerin Lamp (Ch. 31, 33–34):**
     - Pinned dramatic reveal of `crystal-lamp.jpg` alongside `basilio.png` and `simoun.png`.
     - Annotated callouts explain the pomegranate-shaped lamp containing nitroglycerin—what Simoun calls *"the concentrated tears of the oppressed."*

### Stage 6: Act IV — The Abortive Revolution & Theological Resolution (Ch. 35–39) (`#act-4`)
- **Scene 6A — The Wedding Feast & Isagani's Intervention (Pinned Climax using `crystal-lamp.jpg`):**
  - Scroll step 1: Paulita Gómez & Juanito Pelaez's wedding at Captain Tiago's former mansion. Red-ink typography reveals **"Mane, Thecel, Phares"** (*Measured, Weighed, Found Wanting* — signed Juan Crisóstomo Ibarra).
  - Scroll step 2: `isagani.png` & `basilio.png` appear. Basilio warns Isagani outside; driven by chivalrous love for Paulita rather than politics, Isagani seizes the dimming lamp and hurls it into the Pasig River.
  - Visual effect: Lamp glow extinguishes into dark river ripple transition.
- **Scene 6B — State Terror & The Carolino Tragedy (Ch. 36–38):**
  - Explains Ben Zayb's censored press vanity and the heartbreaking irony of **Tano (Carolino)**—Cabesang Tales' son in the *Guardia Civil*—forced to shoot at outlaws on a cliff, unknowingly killing his own mute grandfather, **Tandang Selo**.
- **Scene 6C — Father Florentino's Verdict (Ch. 39):**
  - Features `padre-florentino.png` and `simoun.png` over the transition to `final-ocean.jpg`.
  - Contrasts Simoun's dying accusation against God with Father Florentino's theological and civic verdict: **Freedom cannot be won by the sword or by corrupting society further; it must be earned through moral uprightness, civic virtue, and willingness to suffer for a just cause.**

### Stage 7: Comparative Analysis, Historical Impact & The Final Verdict (`#verdict`)
- **Visual State:** Full-screen `final-ocean.jpg` pinned in the background with translucent dark glass/parchment overlays.
- **Sub-section 7A — Structural Comparison (`Noli Me Tángere` vs. `El Filibusterismo`):**
  - Interactive or side-by-side comparison matrix contrasting Tone/Genre (*Social Cancer / Work of the Heart* vs. *Reign of Greed / Work of the Head*), Protagonist (*Ibarra* vs. *Simoun*), Target of Critique, and Structure (64 vs. 39 chapters).
- **Sub-section 7B — Historical Impact & Reception (1891–1956):**
  - **1891–1892 Smuggling & Censorship:** Hong Kong shipments intercepted, clandestine reading, Rizal's exile to Dapitan (1892) and execution (Dec 30, 1896).
  - **The Katipunan Paradox (1896):** How Andrés Bonifacio and Emilio Jacinto read Rizal's cautionary tale of failed revolt as proof of colonial irreformability, inspiring armed revolution.
  - **Institutional Legacy (1925–1956):** Preservation of the manuscript (bought from Ventura in 1925 for ₱10,000, surviving WWII) and **Republic Act No. 1425 (The Rizal Law of 1956)** authored by Sen. Claro M. Recto and sponsored by Sen. Jose P. Laurel.
- **Sub-section 7C — Interactive Classroom Discussion Prompts ("The Final Verdict"):**
  - 4 selectable philosophical reflection cards where you can click options during class Q&A to reveal how the novel answers questions on **Reform vs. Revolution**, **Colonial Education**, **Agrarian Justice**, and **Moral Readiness for Freedom**.

---

## 6. Implementation Phases (When Ready to Build)
1. **Phase 1 — Content & Script Lock:** Review [presentation_script_and_text.md](file:///home/aaronlime/code/rizal-el-filibusterismo/presentation_script_and_text.md) (created alongside this plan) containing every heading, on-screen bullet, character modal bio, and spoken presenter script.
2. **Phase 2 — Project Scaffolding & Asset Setup:** Initialize the web app, configure `/public/assets/` placeholders/fallbacks (including CSS 3D book fallback so the site works immediately even before custom images are dropped in).
3. **Phase 3 — Layout & Scroll Choreography:** Implement the 7 stages with GSAP ScrollTrigger, page-turn transitions, and keyboard slide navigation.
4. **Phase 4 — Interactive Polish:** Add the Character Archetype modal drawer, the *Noli vs. Fili* comparative switcher, the Q&A reflection cards, and the optional Presenter Teleprompter (`P` key).

