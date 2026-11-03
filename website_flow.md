nteractive Website Concept: El Filibusterismo — The Reign of Greed
1. Creative direction and overall concept
My recommendation is to build this as an interactive literary experience disguised as an antique, living book.

Rather than creating a conventional educational website with a homepage, chapter summaries, and character descriptions, make visitors feel like they're physically discovering the story of El Filibusterismo.

The book itself becomes the interface.

As the visitor scrolls:
- The closed book gradually opens.
- Its pages turn and reveal the title and dedication.
- The pages transition into the actual narrative.
- Illustrations come alive.
- Characters and objects become interactive.
- Important events unfold through cinematic sequences.
- Readers investigate, make decisions, and reflect on the novel's ideas.
The experience should have two primary objectives:
1. Tell the story effectively: Make the events, characters, historical background, and motivations easy to understand.
2. Make the reader participate: Let them explore, investigate, uncover hidden information, make decisions, and reflect on Rizal's arguments.
I envision a cinematic, scroll-driven narrative with interactive experiences integrated throughout.
Visual identity
- Antique leather-bound book.
- Aged parchment pages.
- Dark brown, sepia, faded gold, and ink-black palette.
- 19th-century Spanish colonial illustrations.
- Handwritten annotations, red markings, stamps, and archival documents.
- Cinematic lighting and subtle atmospheric particles.
Three presentation styles
Presentation	Purpose
Living book	Main narrative and chapter transitions
Interactive illustrations	Explore people, objects, locations, and events
Archival documents	Historical context, evidence, letters, and deeper explanations

This prevents the website from becoming a repetitive book-reading experience.

2. Complete website flow
PROPOSED USER JOURNEY · 7 MAJOR STAGES
1. The discovery — Opening the book
   
   The visitor encounters a closed antique book. Scrolling gradually opens it, revealing the title page and dedication.
   Scroll-driven animation
2. The prologue — Before the story
   
   Introduce Rizal, Gomburza, the historical circumstances, and why the sequel was written.
3. Act I — Return of the Subversive
   
   Simoun returns. The reader explores the Bapor Tabo and discovers the colonial social hierarchy.
4. Act II — Reformist Idealism vs. Colonial Decay
   
   Explore the university, student academy, Quiroga's smuggling operation, and the collapse of María Clara's story.
5. Act III — Betrayal and Radicalization
   
   Investigate the pasquinades, student arrests, Juli's tragedy, and Basilio's transformation.
6. Act IV — The Abortive Revolution
   
   Experience the wedding feast, the lamp, Isagani's intervention, and Simoun's final confession.
7. The epilogue — What remains
   
   Explore the novel's message, historical impact, legacy, and the questions it leaves behind.


3. The opening experience — The book comes alive
This is the most important part of the concept.

I would make the opening feel like a cinematic sequence rather than simply animating a book graphic.
Scroll sequence
Scene 01 — The closed book
0–15%

Asset: book_closed_hero.glb
- Full-screen dark environment.
- A single closed book in the center.
- Dust particles and subtle lighting.
- Text: "Some stories are written in ink. Others are written in blood."
- Scrolling starts the opening animation.


Scene 02 — The book opens
15–35%

Assets: book_opening_animation.glb, book_leather_texture.png
- Cover rotates backward around the spine.
- Pages separate and fan out.
- Camera gradually moves closer.
- Ambient page-turning sounds.


Scene 03 — The title page
35–55%

Assets: parchment_base_texture.png, title_page_ornament.png
- The book settles into an open two-page spread.
- Left page: title and author.
- Right page: El Filibusterismo — The Reign of Greed.
- The dedication is revealed as the next scroll interaction.


Scene 04 — The dedication
55–80%

Assets: gomburza_portraits.png, dedication_manuscript_texture.png
- Reveal the dedication to Gomburza.
- Their names appear one at a time.
- Clicking each name reveals a short historical account.
- A red ink underline emphasizes February 17, 1872.


Scene 05 — Enter the story
80–100%

Assets: bapor_tabo_establishing_illustration.png, chapter_transition_particles.png
- The pages begin to fill the screen.
- The parchment illustration transitions into the Bapor Tabo.
- The book becomes the narrative environment.
- A button appears: "Begin reading."


How the book should behave after opening
I wouldn't make the book disappear after the introduction.

Instead, keep a persistent two-page book layout during the main narrative.

Proposed layout:
- Left page: Narrative, dialogue, historical context, and character introductions.
- Right page: Large illustrations, maps, interactive objects, and visual storytelling.
- Page corners: Previous and next chapter navigation.
- Top edge: Small chapter indicator and reading progress.
- Bottom edge: Optional glossary and audio narration controls.
The book should sometimes break its own boundaries.

For example, when the Bapor Tabo is introduced, the illustration can expand beyond the right page until the ship fills the entire screen.

That creates the feeling of entering the world inside the book.

4. Interactive storytelling — What happens inside each act?
The most important principle here is to avoid simply putting a paragraph on the left and an image on the right.

Each important event should have its own interaction.
Prologue — Why was this book written?
Topics from the outline:
- Meaning of Filibustero.
- Gomburza dedication.
- Calamba agrarian dispute.
- Leonor Rivera's marriage.
- Disillusionment with the Propaganda Movement.
- Writing and publication struggles.
Interactive idea: The historical investigation desk
The right page becomes an archival desk containing several interactive objects.
Asset name	Interaction
rizal_historical_portrait.png	Introduce Rizal and his background
rizal_letters_collection.png	Reveal motivations and correspondence
calamba_land_documents.png	Explore the land dispute and tenant evictions
antique_printing_press.glb	Discover the financial struggle to publish the novel
gomburza_portraits.png	Click each portrait to reveal their significance

Additional interaction: Timeline reconstruction

The reader drags historical events into chronological order, from the execution of Gomburza to the publication of El Filibusterismo in 1891.

This turns historical background into a small investigation instead of a lecture.

Act I — Return of the Subversive and the Colonial Microcosm
Recommended centerpiece: Interactive Bapor Tabo
Interaction 1: Explore the Bapor Tabo
Instead of presenting a static ship illustration, create a detailed interactive side-cutaway of the ship.

Assets:
- bapor_tabo_3d_model.glb
- bapor_tabo_upper_deck.png
- bapor_tabo_lower_deck.png
- bapor_tabo_cutaway_texture.png
- ship_passenger_portraits/
The ship has two explorable areas:
Upper deck	Lower deck
Spanish officials	Filipino passengers
Friars	Chinese traders
Privileged passengers	Students and commoners
Political discussions	Crowded engine room

Users click different passengers to uncover their social status, dialogue, and perspectives.

Special interaction: A vertical slider changes the view between the upper deck and lower deck, exposing the class division.
Interaction 2: Meet the characters
Characters should appear as illustrated portraits that can be clicked.

Character assets:
- simoun_portrait.png
- basilio_portrait.png
- cabesang_tales_portrait.png
- juli_portrait.png
When clicked, reveal:
- Character background.
- Their role in the story.
- Their motivations.
- Their relationships.
- Their symbolic significance.
Interaction 3: Cabesang Tales' tragedy
Make this a short branching visual narrative.

Assets:
- cabesang_tales_farmland.png
- friar_land_claim_document.png
- cabesang_tales_hut.png
- matanglawin_character_illustration.png
The reader follows the progression:
1. Tales clears and cultivates the land.
2. Friar authorities claim the land.
3. Taxes and demands increase.
4. Juli becomes an indentured servant to help pay the ransom for her father.
5. Tales takes Simoun's revolver and becomes Matanglawin.
At certain points, the reader can inspect evidence such as land documents, tax demands, and personal belongings.

Important: Don't let the user change the actual events of the novel. Let them investigate the decisions and consequences instead.
Interaction 4: Basilio meets Simoun
Create a cinematic encounter in the forest.

Assets:
- ibarra_forest_environment.png
- basilio_character_scene.png
- simoun_character_scene.png
- simoun_treasure_chest.glb
The reader discovers Simoun digging up buried treasure. Basilio confronts him.

At the end, give the reader a decision:
- Pursue peaceful reform.
- Join Simoun's violent conspiracy.
Neither option changes the novel. Instead, selecting one reveals the arguments and consequences behind the two approaches.

Act II — Reformist Idealism vs. Colonial Decay
This act should feel like exploring a corrupt institution.
Interaction 1: The physics classroom
The Class in Physics

Build a classroom where the user can click laboratory equipment behind glass.

Assets:
- ust_classroom_environment.png
- physics_instruments_collection.png
- glass_cabinet_illustration.png
- placido_penitente_portrait.png
- father_millon_portrait.png
When the reader clicks an object, a description appears explaining how education is reduced to rote memorization rather than actual scientific inquiry.

The reader then encounters Father Millon and Placido Penitente.

An optional mini-interaction: Answer a physics question using an actual experiment-style animation, contrasting genuine scientific learning with the classroom's oppressive system.
Interaction 2: The failed academy
Create an interactive proposal document.

Assets:
- castilian_academy_petition.png
- academy_document_seal.png
- student_group_portraits.png
- don_custodio_portrait.png
- senor_pasta_portrait.png
Users click through the academy's proposal, its supporters, and the bureaucratic obstacles.

Introduce Macaraig, Isagani, Sandoval, Señor Pasta, and Don Custodio through clickable annotations.

At the end, reveal the compromise: The academy is approved under religious supervision, undermining its original goal of academic freedom.
Interaction 3: Quiroga's smuggling operation
Assets:
- quiapomerchant_warehouse.png
- quiroga_portrait.png
- merchandise_crates.glb
- fireworks_crates.png
- cargo_inventory_document.png
Make this a detective-style activity.
- Click the crates to inspect their labels.
- Discover discrepancies in the cargo inventory.
- Reveal Simoun's manipulation of Quiroga's debts.
Interaction 4: The talking head
Assets:
- quiapo_fair_environment.png
- mr_leeds_portrait.png
- imuthis_sphinx_head.glb
- egyptian_legend_manuscript.png
Use a theatrical transition to the Quiapo fair.

The reader discovers Mr. Leeds' performance and the mysterious head of Imuthis.

Clicking different portions of the illusion reveals the ancient Egyptian story and its parallels with Father Salví's persecution of Ibarra and María Clara.
Interaction 5: The death of María Clara
This should be a slower, emotionally impactful section.

Assets:
- santa_clara_convent_corridor.png
- convent_window_illustration.png
- maria_clara_portrait.png
- simoun_emotional_portrait.png
The reader sees Basilio discover that María Clara has died inside the Santa Clara convent.

The animation pauses. The book's colors become darker. Simoun's portrait changes expression.

Use this moment to explain why Simoun delays his planned uprising.

Act III — Betrayal, Repression, and Radicalization
This act should feel progressively darker and more claustrophobic.
Interaction 1: The satirical banquet
Create an interactive dinner table.

Assets:
- pansiteria_interior.png
- banquet_table.glb
- satirical_dishes_collection.png
- student_banquet_portraits.png
The reader clicks dishes to discover the students' satirical dedications to the friars and Don Custodio.

Make the satire understandable with short contextual popups.
Interaction 2: Investigate the pasquinades
Create a crime-scene investigation.

Assets:
- university_exterior_night.png
- pasquinades_collection.png
- university_wall_posters.png
- arrest_records_document.png
Interactions:
- Examine the posters.
- Inspect the university entrance.
- Read witness accounts.
- Discover how the authorities use the incident to arrest the student leaders.
The user can assemble clues to reconstruct what happened.
Interaction 3: Isagani's debate
Create a split-screen dialogue between Isagani and Father Fernández.

Assets:
- isagani_portrait.png
- father_fernandez_portrait.png
- debate_background.png
- philosophical_dialogue_manuscript.png
Let users select arguments to hear the opposing perspective.

At the end, display the central question:

Is education truly accessible when the institutions controlling it have no intention of empowering the people?
Interaction 4: Juli's tragedy
This should not be turned into a game.

Use an illustrated sequence with restrained animation and narration.

Assets:
- juli_portrait.png
- father_camorra_portrait.png
- convent_interior.png
- convent_window_scene.png
Show the events leading to Juli's death, including Basilio's imprisonment and her desperate attempt to secure his release.

Avoid graphic depictions. Give the scene space and emotional weight.
Interaction 5: Basilio joins Simoun
Introduce the lamp as a significant story object.

Assets:
- crystal_lamp.glb
- simoun_lamp_detail.png
- basilio_transformation_portrait.png
- simoun_secret_room.png
The reader clicks the lamp to inspect its appearance and learns that it conceals Simoun's explosive device.

Then show Basilio's transformation from peaceful pragmatist to revolutionary.

Act IV — The Abortive Revolution and Theological Resolution
This should be the cinematic climax of the entire website.
Interaction 1: The wedding feast
The reader enters the wedding reception.

Assets:
- wedding_mansion_exterior.png
- wedding_ballroom_environment.png
- wedding_guest_portraits.png
- crystal_lamp.glb
The camera slowly moves through the mansion while the characters are introduced.

The crystal lamp is highlighted as the centerpiece.
Interaction 2: The warning
Display the red-ink note:

Mane, Thecel, Phares.

Assets:
- red_ink_warning_note.png
- biblical_inscription_typography.png
The reader can click the words individually to uncover their biblical meaning: measured, weighed, found wanting.

The note bears the name Juan Crisóstomo Ibarra.
Interaction 3: Isagani's intervention
Create a cinematic, scroll-controlled sequence:

Assets:
- wedding_mansion_interior.png
- isagani_running_pose.png
- crystal_lamp.glb
- pasig_river_night.png
- lamp_water_splash_effect.png
Sequence:
1. Basilio discovers the danger.
2. Isagani is warned.
3. Isagani rushes into the mansion.
4. He grabs the lamp.
5. The lamp is thrown into the Pasig River.
6. The explosion is prevented.
At the moment the lamp enters the water, the scroll pauses briefly, the sound drops out, and the screen transitions into darkness.
Interaction 4: The Carolino tragedy
Use a map and character tracking system to explain the final countryside tragedy.

Assets:
- countryside_cliff_environment.png
- guardia_civil_soldiers.png
- carolino_portrait.png
- tandang_selo_portrait.png
- family_relationship_diagram.png
Follow Tano, now called Carolino, as he is forced to shoot at the outlaws and unknowingly kills his grandfather Tandang Selo.

Let the reader explore the family connections to understand the tragedy.
Interaction 5: The final confession
Slow the entire experience down.

The book returns to a simple two-page layout.

Assets:
- father_florentino_coastal_house.png
- simoun_wounded_portrait.png
- father_florentino_portrait.png
- simoun_treasure_chest.glb
- dark_ocean_background.png
- Left page: Simoun's confession.
- Right page: Father Florentino's response.
Highlight their philosophical disagreement as the dialogue unfolds.

Finally, show Father Florentino casting the chest of jewels into the sea.

The book closes slowly.

5. The epilogue — Make the reader think
Don't end with a simple "Thank you for reading."

The most effective ending would be an interactive reflection on the central ideas of the novel.

Your outline identifies several major themes:
- Reform versus revolution.
- Education as an instrument of control.
- Land ownership and exploitation.
- Vengeance versus moral responsibility.
- The meaning of genuine freedom.
I suggest a final interactive experience called The Verdict.

Present five questions, each with two or three possible positions.

For example:

Can freedom be achieved through violence?
- Yes, when peaceful methods are exhausted.
- No, violence reproduces the oppression it seeks to destroy.
- It depends on the circumstances and intentions.
After the user answers, show how the novel's events relate to their position.

Then reveal:
- Historical impact on the Katipunan.
- Andrés Bonifacio and Emilio Jacinto's reading of the novel.
- The Rizal Law of 1956.
- Preservation of the original manuscript.
Finish with a final line:

The book may end. The questions it raises do not.