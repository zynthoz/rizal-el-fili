# El Filibusterismo --- Simplified Website Build Brief

## For the Website-Coding AI

### Project direction

Build a cinematic, scroll-driven presentation of *El Filibusterismo*.
The experience should feel like a visitor is opening and reading an old
book, with the story unfolding as they scroll.

**Keep the experience mostly scroll-based.** Use pinned sections, smooth
transitions, text reveals, image movement, and page-turn effects. Avoid
building a complicated game or a website full of clickable objects.

The book is the central visual element and should remain the main design
motif throughout the experience.

### 1. Keep only these visual assets

Use this folder structure:

``` text
/public/assets/
  /book/
    book.glb
    book-cover.jpg
    parchment.jpg
  /characters/
    simoun.png
    basilio.png
    isagani.png
    juli.png
    cabesang-tales.png
    padre-florentino.png
    maria-clara.png
  /scenes/
    bapor-tabo.jpg
    crystal-lamp.jpg
    final-ocean.jpg
```

These are the only assets required for the initial version. Do not
create additional asset categories or request more character poses,
expressions, environments, props, or decorative illustrations.

If the 3D book model is unavailable, create the opening-book effect with
CSS and a static book image. The website must still work without 3D.

### 2. Website flow

Build the experience as one continuous page with these sections:

1.  **The closed book**
    -   Full-screen opening.
    -   Show the closed book in the center.
    -   The user scrolls to open it.
    -   Reveal the title: *El Filibusterismo --- The Reign of Greed*.
2.  **Dedication and historical context**
    -   Reveal the dedication to Gomburza.
    -   Introduce Rizal's reasons for writing the novel.
    -   Present the key historical background as short, readable text.
    -   Use scroll-triggered text reveals. No separate interactive
        historical desk.
3.  **Act I --- Return of the Subversive**
    -   Introduce Simoun and his return.
    -   Use `bapor-tabo.jpg` as the main visual for the Bapor Tabo.
    -   Explain the social divisions aboard the ship through text and
        simple labels that appear as the user scrolls.
    -   Introduce the central characters using their portraits.
    -   Explain Cabesang Tales' dispossession and Basilio's encounter
        with Simoun.
4.  **Act II --- Reformist Idealism vs. Colonial Decay**
    -   Tell the events through a sequence of short scroll scenes.
    -   Cover the students' campaign for a Spanish academy, the failed
        education system, Quiroga's role, Mr Leeds' performance, and
        María Clara's death.
    -   Use character portraits where useful. Do not build a classroom
        simulator, warehouse, detective game, or separate environment.
5.  **Act III --- Betrayal and Radicalization**
    -   Cover the banquet, the pasquinades, student arrests, Isagani's
        debate, Juli's tragedy, and Basilio joining Simoun.
    -   Use `crystal-lamp.jpg` as the key visual when explaining
        Simoun's plan.
    -   Present the lamp as a dramatic scroll sequence, not as a
        clickable 3D object.
6.  **Act IV --- The Abortive Revolution**
    -   Build toward the wedding feast and the planned explosion.
    -   Use the crystal lamp image again.
    -   As the user scrolls, reveal Isagani's intervention and the lamp
        being thrown into the river.
    -   Continue to Carolino's tragedy and Simoun's final confession.
7.  **The final verdict**
    -   Use `final-ocean.jpg` for the final scene.
    -   Explain Father Florentino's decision to cast the treasure into
        the sea.
    -   End with a few reflection questions about reform, revolution,
        education, injustice, and freedom.

### 3. Scroll-based interaction rules

Use scroll as the primary interaction:

-   Pin important sections while the story unfolds.
-   Reveal paragraphs and headings in sequence.
-   Move and scale illustrations as the user scrolls.
-   Use subtle page-turn transitions between major acts.
-   Use parallax sparingly for depth.
-   Use a progress indicator to show the user's position in the story.
-   Allow users to skip to an act using simple chapter navigation.

Keep other interactions minimal: - Character portraits may be tapped or
clicked to show a short biography. - Reflection questions at the end may
use simple selectable answers. - Do not add drag-and-drop activities,
object inspection systems, branching story paths, relationship maps,
mini-games, or complex hotspots.

### 4. The book presentation

The opening book sequence is the signature feature:

-   Start with a closed book.
-   As the user scrolls, rotate the cover open.
-   Reveal the inside pages.
-   Bring the title and dedication onto the pages as normal website
    text.
-   Transition from the open book into the first story section.
-   Reuse page-turn transitions between the major acts.

Do not render paragraphs as part of an image. All story text must remain
real HTML text so it is readable, responsive, and accessible.

The book does not need to be a fully simulated physical object
throughout the entire website. Use the book animation for the opening
and chapter transitions, then let the story sections occupy the screen
when needed.

### 5. Technical direction

Use the project's existing framework where possible. For scroll
storytelling, use GSAP ScrollTrigger or an equivalent scroll-animation
tool.

Suggested approach: - HTML/CSS for page layout and text. - GSAP
ScrollTrigger for pinned scenes and scroll progress. - CSS transforms
for simple page-turn and illustration movement. - Three.js only if the
book model is available and performs well. - Responsive layouts for
desktop and mobile.

Prioritize smooth scrolling, readable text, fast loading, and reliable
mobile behavior over visual complexity.

### 6. Completion requirements

-   [ ] One continuous scroll-based story experience.
-   [ ] Book-opening sequence works.
-   [ ] Major acts transition smoothly.
-   [ ] Story content is presented in clear, short sections.
-   [ ] Character portraits are reused consistently.
-   [ ] The three story images are reused where specified.
-   [ ] Chapter progress and navigation work.
-   [ ] Mobile scrolling and layouts work.
-   [ ] No unnecessary asset requests or complex mini-games have been
    added.
