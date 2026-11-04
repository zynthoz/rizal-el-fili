import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ==========================================================================
   1. CHARACTER PROFILES (VERIFIED AGAINST DERBYSHIRE'S 1912 TRANSLATION)
   ========================================================================== */
const CHARACTER_ARCHETYPES = {
  simoun: {
    tabLabel: 'Simoun',
    name: 'Simoun (Revealed in Ch. 7 as Crisóstomo Ibarra)',
    archetype: 'Wealthy Jeweler and Architect of the Conspiracy',
    chapters: 'Chapters 1–3, 5, 7, 10–11, 16, 18–19, 21, 23, 28, 32–36, 39',
    role: 'Introduced on the steamer Tabo behind blue-tinted goggles as the Captain-General’s “Brown Cardinal,” he is recognized by Basilio in the San Diego forest in Chapter 7 as Juan Crisóstomo Ibarra, enriched in Cuba thirteen years after Noli Me Tángere. Convinced that lawful reform is futile, he uses bribery and flattery to worsen official abuses and provoke a nationwide uprising.',
    significance:
      'Literary & Historical Note: Both of Simoun’s uprisings fail because personal motives and corrupt methods undermine them—first at 10:30 PM in Chapter 23 when he learns María Clara died at six o’clock, and second in Chapter 35 when Isagani hurls the nitroglycerin lamp into the Pasig. Mortally wounded by the very outlaws he twice stood up (Chapters 36, 39), he takes poison and confesses to Father Florentino.'
  },
  basilio: {
    tabLabel: 'Basilio',
    name: 'Basilio',
    archetype: 'Graduating Medical Student',
    chapters: 'Chapters 2, 5–7, 9, 11, 23, 26, 29–35',
    role: 'Orphaned son of Sisa who rose from Capitan Tiago’s unpaid servant and neglected Letrán pupil to Ateneo honor student and graduating medical clinician. In Chapter 7 he rejects Simoun’s conspiracy, trusting in medical science, peaceful work, and marriage to Juli after ransoming her from Hermana Penchang.',
    significance:
      'Literary & Historical Note: Tests whether quiet compliance can protect an honest Filipino under arbitrary colonial rule. Flagged on the government watchlist in Chapter 11, arrested at Makaraig’s house in Chapter 26, stripped of Tiago’s 25-peso bequest in Chapter 29, held over three months in Bilibid, and told by coachman Sinong of Juli’s death (Chapter 32), he finally joins Simoun in Chapter 33—yet his warning to Isagani in Chapter 35 prevents the blast.'
  },
  isagani: {
    tabLabel: 'Isagani',
    name: 'Isagani',
    archetype: 'Student Poet and Spokesman for the Castilian Academy',
    chapters: 'Chapters 2, 12, 14–15, 17, 22, 24–27, 32, 34–35, 37',
    role: 'Nephew of Father Florentino, educated earlier by the Jesuits at the Ateneo and studying at UST. He champions the Castilian Academy before lawyer Señor Pasta (Chapter 15), speaks fearlessly to classmates after the pasquinades (Chapter 26), and debates his sole respected Dominican professor, Padre Fernández (Chapter 27), before voluntarily surrendering to arrest.',
    significance:
      'Literary & Historical Note: Embodies generous civic idealism undone by romantic attachment. Abandoned by comfort-loving Paulita Gómez for wealthy Juanito Pelaez (Chapter 32), he lingers outside the Calle Anloague wedding feast, hears Basilio’s warning, and hurls Simoun’s dimming lamp into the Pasig River to save Paulita (Chapter 35)—only to express quiet regret at the Orenda house in Chapter 37 before returning forever to Father Florentino’s coast.'
  },
  'cabesang-tales': {
    tabLabel: 'Cabesang Tales',
    name: 'Cabesang Tales & Tandang Selo',
    archetype: 'Dispossessed Farmer of Tiani and His Mute Father',
    chapters: 'Chapters 4–5, 8–11, 19, 23, 30–31, 38',
    role: 'Son of old broom-maker Tandang Selo and father of Lucia, Tano, and Juli. After clearing forest land at the cost of his wife’s and Lucia’s lives, Tales faces friar rent hikes from 20–30 to 200 pesos, loses his savings in court, sees Tano conscripted, and is kidnapped for a 500-peso ransom. Returning to usurped fields, a mute father, an enslaved daughter, and a 3-day eviction notice, he trades María Clara’s locket for Simoun’s revolver in Chapter 10, kills three people, and leads mountain guerrillas—known by Chapter 31 as Matanglawin.',
    significance:
      'Historical Context: Directly parallels the 1887–1891 Calamba Hacienda evictions addressed by Rizal at the end of Chapter 10. In Chapter 38, Tales’ conscripted son Tano (serving as “Carolino”) is caught in a mountain ambush where his squad shoots down his mute grandfather Tandang Selo.'
  },
  juli: {
    tabLabel: 'Juli',
    name: 'Juli (Juliana)',
    archetype: 'Daughter of Cabesang Tales and Fiancée of Basilio',
    chapters: 'Chapters 4, 8–12, 23, 30, 32',
    role: 'Sells her combs and jewelry (keeping only María Clara’s locket given by Basilio) and enters domestic servitude under pious Hermana Penchang on Christmas Day to raise half her father’s 500-peso ransom. Ransomed later by Basilio, she faces fresh despair in Chapter 30 when Capitan Tiago dies and patronless Basilio remains the sole student jailed facing deportation.',
    significance:
      'Literary & Historical Note: Exposes how colonial courts, debt bondage, and clerical predation crush peasant women without wealth or patrons. Pressured by town officials and Sister Bali to enter the Tiani convent to beg Padre Camorra for Basilio’s release, she leaps from the convent window to her death that night (Chapter 30).'
  },
  'padre-florentino': {
    tabLabel: 'Father Florentino',
    name: 'Father Florentino',
    archetype: 'Retired Filipino Secular Priest',
    chapters: 'Chapters 2–3, 39',
    role: 'Born to a wealthy Manila family and pressured into ordination by his mother despite loving another woman, he retired to his solitary Pacific estate shortly after the 1872 execution of Gomburza, raising his nephew Isagani and sheltering Don Tiburcio de Espadaña.',
    significance:
      'Literary & Historical Note: Honors the dignity of the Filipino secular clergy (like Father Leoncio Lopez and Father Burgos) and voices Chapter 39’s ethical argument—affirming God’s justice and the right to liberty while warning that freedom pursued through corruption and hatred merely turns today’s slaves into tomorrow’s tyrants, before casting Simoun’s jewel-chest into the sea.'
  },
  'pasta-custodio': {
    tabLabel: 'Pasta & Custodio',
    name: 'Señor Pasta & Don Custodio',
    archetype: 'Cautious Filipino Jurist and Colonial Arbitrator',
    chapters: 'Chapters 1, 14–15, 20, 22, 28, 35–36',
    role: 'Señor Pasta is Manila’s wealthiest Filipino lawyer and legal adviser to the friars who urges Isagani to think only of personal career and comfort (Chapter 15). Don Custodio (“Buena Tinta”) is the pompous Spanish official appointed to rule on the Castilian Academy, copying the Augustinian-run School of Arts and Trades file in Chapter 20 to place the students’ school under friar control as mere fee-collectors (Chapter 22).',
    significance:
      'Literary Interpretation: Together they demonstrate why lawful reform petitions fail from within—blocked both by cautious native insiders protecting their status and pseudo-liberal colonial bureaucrats preserving clerical dominance.'
  },
  'placido-fernandez': {
    tabLabel: 'Placido & High Official',
    name: 'Placido Penitente, Padre Fernández & The High Official',
    archetype: 'Alienated Student and Rare Institutional Consciences',
    chapters: 'Chapters 11–13, 19, 27–28, 31',
    role: 'Placido Penitente walks out of Dominican Padre Millón’s abusive UST Physics class (Chapter 13) and witnesses Simoun’s Calle Iris bomb workshop (Chapter 19). By contrast, Dominican professor Padre Fernández treats Isagani as an equal in debate (Chapter 27), and the Spanish High Official defends innocent Basilio against the Captain-General before resigning in protest (Chapter 31).',
    significance:
      'Literary Interpretation: Proves Rizal did not caricature individuals simplistically by nationality—showing both how institutional humiliation radicalizes peaceful students like Placido and how even fair-minded Spaniards (Padre Fernández and the High Official) are overruled by the colonial system.'
  },
  'zayb-paulita': {
    tabLabel: 'Ben-Zayb & Paulita',
    name: 'Ben-Zayb & Paulita Gómez',
    archetype: 'Sycophantic Journalist and Colonial Society Bride',
    chapters: 'Chapters 1–3, 12, 16–18, 22, 24, 28, 32, 34–36',
    role: 'Ben-Zayb (anagram of Ybañez) flatters friars and officials in print, fails to find hidden mirrors at Mr. Leeds’ show (Chapter 18), and sees his grand wedding epic banned by the Captain-General’s censorship (Chapter 36). Paulita Gómez dismisses Isagani’s patriotic ideals as “Dreams!” (Chapter 24) and marries wealthy Spanish mestizo Juanito Pelaez after Isagani’s arrest (Chapters 32, 34).',
    significance:
      'Literary Interpretation: Depict a censored colonial press blind to real suffering alongside a privileged social class that chooses wealth, carriages, and safety over solidarity.'
  }
};

/* ==========================================================================
   2. INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initBookPortalTransition();
  initBookOutroTransition();
  initScrollProgressAndNav();
  initSelectiveMomentReveals();
  initDeckExplorer();
  initLampExplorer();
  initAuditExplorer();
  initCharacterModal();
  initPresentationControls();
});

/* ==========================================================================
   3A. OPENING BOOK PORTAL (60FPS GPU-ACCELERATED)
   ========================================================================== */
function initBookPortalTransition() {
  const portalSection = document.getElementById('hero-book');
  const pinViewport = document.getElementById('portal-pin-viewport');
  const pageWipe = document.getElementById('portal-page-wipe');
  const bookObject = document.getElementById('book-object');
  const frontCover = document.getElementById('book-front-cover');
  const insideContent = document.getElementById('inside-page-content');

  if (!portalSection || !pinViewport || !bookObject || !frontCover || !pageWipe) return;

  gsap.set(frontCover, { rotateY: 0, force3D: true });
  gsap.set(bookObject, { scale: 1, rotateX: 4, rotateY: -3, force3D: true });
  gsap.set(insideContent, { opacity: 0.25, scale: 0.96 });
  gsap.set(pageWipe, { opacity: 0 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: portalSection,
      start: 'top top',
      end: '+=165%',
      pin: pinViewport,
      scrub: 0.4,
      anticipatePin: 1,
      fastScrollEnd: true
    }
  });

  tl.to(bookObject, { rotateX: 0, rotateY: 0, duration: 0.45, ease: 'power2.inOut' }, 0)
    .to(frontCover, { rotateY: -168, duration: 0.48, ease: 'power2.inOut' }, 0.02)
    .to(insideContent, { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' }, 0.2);

  tl.to(bookObject, { scale: 1.06, duration: 0.16, ease: 'none' }, 0.46);

  tl.to(insideContent, { opacity: 0, scale: 1.08, duration: 0.24, ease: 'power2.in' }, 0.64)
    .to(bookObject, { scale: 2.25, duration: 0.38, ease: 'power2.in' }, 0.62)
    .to(pageWipe, { opacity: 1, duration: 0.26, ease: 'power2.inOut' }, 0.72);
}

/* ==========================================================================
   3B. CLOSING BOOK PORTAL (60FPS GPU-ACCELERATED REVERSE ANIMATION)
   ========================================================================== */
function initBookOutroTransition() {
  const outroSection = document.getElementById('closing-book');
  const outroPinViewport = document.getElementById('outro-pin-viewport');
  const outroWipe = document.getElementById('outro-page-wipe');
  const outroBook = document.getElementById('outro-book-object');
  const outroCover = document.getElementById('outro-front-cover');
  const outroContent = document.getElementById('outro-inside-content');

  if (!outroSection || !outroPinViewport || !outroBook || !outroCover || !outroWipe) return;

  gsap.set(outroWipe, { opacity: 1 });
  gsap.set(outroBook, { scale: 2.25, rotateX: 0, rotateY: 0, force3D: true });
  gsap.set(outroCover, { rotateY: -168, force3D: true });
  gsap.set(outroContent, { opacity: 0, scale: 1.08 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: outroSection,
      start: 'top top',
      end: '+=155%',
      pin: outroPinViewport,
      scrub: 0.35,
      anticipatePin: 1,
      fastScrollEnd: true
    }
  });

  tl.to(outroWipe, { opacity: 0, duration: 0.24, ease: 'power2.inOut' }, 0)
    .to(outroBook, { scale: 1.04, duration: 0.38, ease: 'power2.out' }, 0)
    .to(outroContent, { opacity: 1, scale: 1, duration: 0.25, ease: 'power2.out' }, 0.15);

  tl.to(outroBook, { scale: 1, duration: 0.14, ease: 'none' }, 0.38);

  tl.to(outroContent, { opacity: 0.25, scale: 0.96, duration: 0.28, ease: 'power2.in' }, 0.52)
    .to(outroCover, { rotateY: 0, duration: 0.45, ease: 'power2.inOut' }, 0.52)
    .to(outroBook, { rotateX: 4, rotateY: -3, duration: 0.44, ease: 'power2.inOut' }, 0.54);
}

/* ==========================================================================
   4. RESTRAINED REVEALS FOR PLATES & KEY MOMENTS
   Keep all presentation beats 100% opaque so slides are never faded or
   invisible during classroom projection, fast navigation, or PDF export.
   ========================================================================== */
function initSelectiveMomentReveals() {
  const moments = document.querySelectorAll('.reveal-moment');
  moments.forEach((el) => {
    gsap.set(el, { opacity: 1, y: 0 });
  });
}

/* ==========================================================================
   5. INTERACTIVE BAPOR TABO EXPLORER (CHAPTERS 1–3, ZERO LAYOUT SHIFT)
   ========================================================================== */
function initDeckExplorer() {
  const container = document.getElementById('deck-explorer');
  if (!container) return;

  const tabs = container.querySelectorAll('.deck-tab-btn');
  const panels = container.querySelectorAll('.deck-panel');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-deck-target');

      tabs.forEach((t) => {
        const isActive = t === tab;
        t.classList.toggle('active', isActive);
        t.setAttribute('aria-selected', String(isActive));
      });

      panels.forEach((p) => {
        p.classList.toggle('active', p.getAttribute('data-deck-panel') === target);
      });
    });
  });
}

/* ==========================================================================
   6. INTERACTIVE POMEGRANATE LAMP INSPECTOR (CHAPTERS 33–35, ZERO SHIFT)
   ========================================================================== */
function initLampExplorer() {
  const container = document.getElementById('lamp-explorer');
  if (!container) return;

  const tabs = container.querySelectorAll('.lamp-tab-btn');
  const panels = container.querySelectorAll('.lamp-stage-content');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-lamp-target');

      tabs.forEach((t) => {
        const isActive = t === tab;
        t.classList.toggle('active', isActive);
        t.setAttribute('aria-selected', String(isActive));
      });

      panels.forEach((p) => {
        p.classList.toggle('active', p.getAttribute('data-lamp-panel') === target);
      });
    });
  });
}

/* ==========================================================================
   7. INTERACTIVE 39-CHAPTER CHRONOLOGICAL REFERENCE MATRIX (BEAT 19)
   ========================================================================== */
function initAuditExplorer() {
  const container = document.getElementById('audit-explorer');
  if (!container) return;

  const tabs = container.querySelectorAll('.audit-tab-btn');
  const panels = container.querySelectorAll('.audit-panel');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-audit-target');

      tabs.forEach((t) => {
        const isActive = t === tab;
        t.classList.toggle('active', isActive);
        t.setAttribute('aria-selected', String(isActive));
      });

      panels.forEach((p) => {
        p.classList.toggle('active', p.getAttribute('data-audit-panel') === target);
      });
    });
  });
}

/* ==========================================================================
   8. SCROLL PROGRESS & NAVIGATION HIGHLIGHT
   ========================================================================== */
function initScrollProgressAndNav() {
  const progressBar = document.getElementById('scroll-progress-bar');
  const navLinks = document.querySelectorAll('.chapter-nav .nav-link');
  const stages = document.querySelectorAll('[data-stage-index]');
  const beats = Array.from(document.querySelectorAll('.presentation-beat'));
  const beatIndicator = document.getElementById('beat-indicator');

  if (beatIndicator && beats.length > 0) {
    beatIndicator.textContent = `01 / ${String(beats.length).padStart(2, '0')}`;
  }

  window.addEventListener(
    'scroll',
    () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      if (progressBar) {
        progressBar.style.width = `${pct}%`;
      }

      let activeIdx = 0;
      stages.forEach((sec) => {
        const idx = Number(sec.getAttribute('data-stage-index'));
        const rect = sec.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.45) {
          activeIdx = idx;
        }
      });

      navLinks.forEach((link, idx) => {
        link.classList.toggle('active', idx === activeIdx);
      });

      if (beatIndicator && beats.length > 0) {
        let currentBeatNum = '01';
        beats.forEach((beat) => {
          const rect = beat.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.48) {
            currentBeatNum = beat.getAttribute('data-beat') || '01';
          }
        });
        beatIndicator.textContent = `${currentBeatNum} / ${String(beats.length).padStart(2, '0')}`;
      }
    },
    { passive: true }
  );
}

/* ==========================================================================
   9. CHARACTER ARCHETYPES MODAL
   ========================================================================== */
function initCharacterModal() {
  const modal = document.getElementById('archetype-modal');
  const closeBtn = document.getElementById('modal-close');
  const openBtn = document.getElementById('btn-archetypes');
  const tabsContainer = document.getElementById('modal-char-tabs');
  const bodyContainer = document.getElementById('modal-char-content');

  if (!modal || !tabsContainer || !bodyContainer) return;

  const keys = Object.keys(CHARACTER_ARCHETYPES);

  tabsContainer.innerHTML = keys
    .map((k) => `<button class="char-tab-btn" data-key="${k}">${CHARACTER_ARCHETYPES[k].tabLabel}</button>`)
    .join('');

  bodyContainer.innerHTML = keys
    .map((k) => {
      const data = CHARACTER_ARCHETYPES[k];
      return `
      <div class="modal-char-details" data-char-panel="${k}">
        <h4>${data.name}</h4>
        <span class="modal-archetype-pill">${data.archetype}</span>
        <div class="modal-detail-block">
          <h5>Chapters in the Novel</h5>
          <p>${data.chapters}</p>
        </div>
        <div class="modal-detail-block">
          <h5>Chronological Role in the Story</h5>
          <p>${data.role}</p>
        </div>
        <div class="modal-detail-block">
          <h5>Significance &amp; Context</h5>
          <p>${data.significance}</p>
        </div>
      </div>
    `;
    })
    .join('');

  function renderCharacter(charKey) {
    const activeKey = CHARACTER_ARCHETYPES[charKey] ? charKey : 'simoun';

    tabsContainer.querySelectorAll('.char-tab-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.key === activeKey);
    });

    bodyContainer.querySelectorAll('.modal-char-details').forEach((panel) => {
      panel.classList.toggle('active', panel.dataset.charPanel === activeKey);
    });
  }

  tabsContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.char-tab-btn');
    if (btn) renderCharacter(btn.dataset.key);
  });

  function openModal(initialKey = 'simoun') {
    renderCharacter(initialKey);
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  if (openBtn) openBtn.addEventListener('click', () => openModal('simoun'));
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.querySelectorAll('[data-char-modal]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(el.getAttribute('data-char-modal'));
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

/* ==========================================================================
   10. PRESENTATION CONTROLS (STEPPER, PROJECTION SCALE & FULLSCREEN)
   ========================================================================== */
function initPresentationControls() {
  const stops = [
    document.getElementById('hero-book'),
    ...Array.from(document.querySelectorAll('.presentation-beat')),
    document.getElementById('closing-book')
  ].filter(Boolean);

  const prevBtn = document.getElementById('beat-prev');
  const nextBtn = document.getElementById('beat-next');
  const projectionBtn = document.getElementById('btn-projection');
  const fullscreenBtn = document.getElementById('btn-fullscreen');

  function stepNext() {
    const next = stops.find((el) => el.getBoundingClientRect().top > 24);
    if (next) {
      next.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function stepPrev() {
    const prevs = stops.filter((el) => el.getBoundingClientRect().top < -24);
    const target = prevs[prevs.length - 1] || stops[0];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  if (nextBtn) nextBtn.addEventListener('click', stepNext);
  if (prevBtn) prevBtn.addEventListener('click', stepPrev);

  if (projectionBtn) {
    projectionBtn.addEventListener('click', () => {
      const isLarge = document.documentElement.classList.toggle('projection-large');
      projectionBtn.classList.toggle('active', isLarge);
      setTimeout(() => ScrollTrigger.refresh(), 100);
    });
  }

  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen?.();
      } else {
        document.exitFullscreen?.();
      }
    });

    document.addEventListener('fullscreenchange', () => {
      fullscreenBtn.classList.toggle('active', Boolean(document.fullscreenElement));
      setTimeout(() => ScrollTrigger.refresh(), 150);
    });
  }

  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) return;
    if (e.key === ' ' && document.activeElement?.tagName === 'BUTTON') return;
    const modalOpen = document.getElementById('archetype-modal')?.classList.contains('open');
    if (modalOpen) return;

    if (
      e.key === 'ArrowRight' ||
      e.key === 'ArrowDown' ||
      e.key === 'PageDown' ||
      (e.key === ' ' && !e.shiftKey)
    ) {
      e.preventDefault();
      stepNext();
    } else if (
      e.key === 'ArrowLeft' ||
      e.key === 'ArrowUp' ||
      e.key === 'PageUp' ||
      (e.key === ' ' && e.shiftKey)
    ) {
      e.preventDefault();
      stepPrev();
    }
  });
}
