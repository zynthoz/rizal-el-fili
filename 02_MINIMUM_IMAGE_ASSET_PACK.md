# El Filibusterismo --- Minimum Image Asset Pack

## For the Image-Generation AI

### Goal

Generate only the essential visual assets for a scroll-driven *El
Filibusterismo* website.

The website will use mostly scroll animations and real website text. The
images are supporting visuals, not complete scenes with text embedded in
them.

**Keep the asset pack small. Do not generate extra characters, alternate
poses, expression sheets, backgrounds, icons, decorative elements, or
individual chapter illustrations.**

### 1. Shared illustration style

Use this same style for every asset:

> A cohesive, cinematic illustrated storybook style inspired by the
> Philippines during the late 19th century Spanish colonial period.
> Painterly realism, historically appropriate clothing and details, warm
> aged-paper tones, muted sepia and dark brown colors, restrained
> highlights, dramatic but natural lighting, and a serious literary
> atmosphere. The artwork should feel like illustrations from one
> beautifully produced historical novel. Avoid cartoon styling, modern
> objects, fantasy details, text, labels, logos, and watermarks.

Keep the style, color palette, and visual treatment consistent across
all generated assets.

### 2. Book assets

**A. `book.glb` --- Main book model**

Create one simple antique, leather-bound 19th-century book, viewed in a
three-quarter perspective. It should have a dark worn leather cover,
visible spine, slightly aged page edges, and understated gold detailing.
It must be suitable for an opening animation.

If 3D model generation is not supported, generate a high-quality image
named `book-cover.jpg` showing the same book closed, from a
three-quarter perspective.

**B. `book-cover.jpg` --- Book cover image**

Generate a closed antique leather-bound book, centered, with no readable
title or lettering. The website will place the title separately.

**C. `parchment.jpg` --- Page texture**

Generate a subtle, seamless aged parchment texture. Keep it light enough
that dark website text can be read clearly on top.

### 3. Essential character portraits

Generate one portrait for each character below. Use a chest-up
composition, one person per image, with a plain or transparent
background. Use a calm, neutral expression. Do not generate multiple
poses or expressions.

  -----------------------------------------------------------------------
  Filename                            Character description
  ----------------------------------- -----------------------------------
  `simoun.png`                        Simoun: a mature, wealthy Filipino
                                      jeweler with a mysterious,
                                      calculating presence; formal dark
                                      colonial-era clothing and refined
                                      accessories.

  `basilio.png`                       Basilio: a young Filipino medical
                                      student; modest, neat
                                      period-appropriate clothing and a
                                      serious, intelligent appearance.

  `isagani.png`                       Isagani: a young Filipino student
                                      and poet; neat 19th-century student
                                      clothing and an idealistic,
                                      thoughtful presence.

  `juli.png`                          Juli: a young Filipina from a
                                      modest family; simple, modest
                                      period clothing and a gentle,
                                      dignified appearance.

  `cabesang-tales.png`                Cabesang Tales: a Filipino farmer;
                                      weathered features, simple rural
                                      clothing, and a hardworking,
                                      resolute presence.

  `padre-florentino.png`              Padre Florentino: an elderly
                                      Filipino secular priest;
                                      traditional priestly clothing and a
                                      calm, principled appearance.

  `maria-clara.png`                   María Clara: a young Filipina from
                                      an affluent family; elegant, modest
                                      19th-century clothing and a quiet,
                                      dignified presence.
  -----------------------------------------------------------------------

### 4. Three essential story images

Generate only these three scene images. Use the shared illustration
style.

**A. `bapor-tabo.jpg` --- The Bapor Tabo**

A wide cinematic view of a large river steamboat traveling along a
Philippine river during the Spanish colonial period. Show the vessel
clearly, with a visible upper deck and lower passenger area. The image
should suggest the social divisions aboard the ship. No readable text.

**B. `crystal-lamp.jpg` --- Simoun's lamp**

A dramatic close view of an ornate crystal lamp in a wealthy
19th-century Filipino mansion. Warm light glows through the glass. The
mood should feel beautiful but ominous. Do not show an explosion or add
text.

**C. `final-ocean.jpg` --- The final ocean**

A wide, quiet view of a dark ocean at dusk, seen from a rocky Philippine
coastline. The mood should feel solemn, reflective, and final. Leave
enough open space for website text to appear over the image.

### 5. Output requirements

-   Character portraits: PNG.
-   Scene images and parchment: JPG.
-   Book model: GLB, if supported.
-   Use the exact filenames listed in this document.
-   Keep scene images wide landscape compositions.
-   Keep portraits chest-up and visually consistent.
-   Do not place titles, dialogue, captions, or other text inside the
    images.
-   Do not create any assets beyond this list.

### 6. Final asset checklist

-   [ ] `book.glb` (or `book-cover.jpg` if 3D is unavailable)
-   [ ] `book-cover.jpg`
-   [ ] `parchment.jpg`
-   [ ] `simoun.png`
-   [ ] `basilio.png`
-   [ ] `isagani.png`
-   [ ] `juli.png`
-   [ ] `cabesang-tales.png`
-   [ ] `padre-florentino.png`
-   [ ] `maria-clara.png`
-   [ ] `bapor-tabo.jpg`
-   [ ] `crystal-lamp.jpg`
-   [ ] `final-ocean.jpg`

This is the complete minimum asset pack. The coding AI should build the
rest of the experience using layout, typography, text, and scroll-based
animation.
