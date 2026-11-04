import gsap from 'gsap';

/* ==========================================================================
   EL FILIBUSTERISMO — CLASSROOM PRESENTATION JAVASCRIPT
   Full-Viewport Slide Controller, Keyboard Stepper, and Archetypes Modal
   ========================================================================== */

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
  }
};

/* ==========================================================================
   2. INITIALIZATION ON DOM READY
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initSlidePresentation();
  initCharacterModal();
});

/* ==========================================================================
   3. SLIDE PRESENTATION CONTROLLER
   ========================================================================== */
function initSlidePresentation() {
  const viewport = document.getElementById('presentation-viewport');
  const slides = Array.from(document.querySelectorAll('.presentation-slide'));
  const slideIndicator = document.getElementById('slide-indicator');
  const sectionSelect = document.getElementById('nav-section-jump');
  const progressBar = document.getElementById('scroll-progress-bar');
  const prevBtn = document.getElementById('beat-prev');
  const nextBtn = document.getElementById('beat-next');
  const projectionBtn = document.getElementById('btn-projection');
  const fullscreenBtn = document.getElementById('btn-fullscreen');

  if (!viewport || slides.length === 0) return;

  let currentSlideIndex = 0;
  const totalSlides = slides.length;

  function updateStatus(index) {
    currentSlideIndex = Math.max(0, Math.min(totalSlides - 1, index));
    const activeSlide = slides[currentSlideIndex];
    const unitTitle = activeSlide.getAttribute('data-unit-name') || 'Lesson';
    const slideNumStr = String(currentSlideIndex + 1).padStart(2, '0');
    const totalNumStr = String(totalSlides).padStart(2, '0');

    if (slideIndicator) {
      slideIndicator.textContent = `Slide ${slideNumStr} / ${totalNumStr} · ${unitTitle}`;
    }

    if (progressBar) {
      const pct = totalSlides > 1 ? (currentSlideIndex / (totalSlides - 1)) * 100 : 0;
      progressBar.style.width = `${pct}%`;
    }

    if (sectionSelect) {
      // Find matching option for the active slide's section id
      const targetUnit = activeSlide.getAttribute('data-section-id');
      if (targetUnit && sectionSelect.value !== targetUnit) {
        sectionSelect.value = targetUnit;
      }
    }
  }

  function goToSlide(index) {
    const targetIdx = Math.max(0, Math.min(totalSlides - 1, index));
    const targetSlide = slides[targetIdx];
    if (targetSlide) {
      targetSlide.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Observer to track which slide occupies the viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = slides.indexOf(entry.target);
          if (idx !== -1) {
            updateStatus(idx);
          }
        }
      });
    },
    {
      root: viewport,
      threshold: 0.55
    }
  );

  slides.forEach((slide) => observer.observe(slide));

  // Stepper buttons
  if (nextBtn) nextBtn.addEventListener('click', handleNextSlide);
  if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentSlideIndex - 1));

  // 3D Book Portal Controller (Slide 01)
  const bookObject = document.getElementById('book-object');
  const frontCover = document.getElementById('book-front-cover');
  const insideContent = document.getElementById('inside-page-content');
  const pageWipe = document.getElementById('portal-page-wipe');
  const btnOpen = document.getElementById('btn-open-book');

  let isBookOpen = false;
  let isBookAnimating = false;

  if (frontCover && bookObject) {
    gsap.set(frontCover, { rotateY: 0, force3D: true, transformOrigin: 'left center' });
    gsap.set(bookObject, { scale: 1, rotateX: 4, rotateY: -3, force3D: true });
    if (insideContent) gsap.set(insideContent, { opacity: 0.25, scale: 0.96 });
    if (pageWipe) gsap.set(pageWipe, { opacity: 0 });
  }

  function animateOpenBook(onComplete) {
    if (isBookAnimating || !frontCover || !bookObject) return;
    isBookAnimating = true;
    isBookOpen = true;

    gsap.timeline({
      onComplete: () => {
        isBookAnimating = false;
        if (onComplete) onComplete();
      }
    })
    .to(bookObject, { rotateX: 0, rotateY: 0, scale: 1.05, duration: 0.5, ease: 'power2.inOut' }, 0)
    .to(frontCover, { rotateY: -168, duration: 0.75, ease: 'power2.inOut' }, 0.05)
    .to(insideContent, { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }, 0.2);
  }

  function animateCloseBook(onComplete) {
    if (isBookAnimating || !frontCover || !bookObject) return;
    isBookAnimating = true;
    isBookOpen = false;

    gsap.timeline({
      onComplete: () => {
        isBookAnimating = false;
        if (onComplete) onComplete();
      }
    })
    .to(frontCover, { rotateY: 0, duration: 0.65, ease: 'power2.inOut' }, 0)
    .to(bookObject, { rotateX: 4, rotateY: -3, scale: 1, duration: 0.55, ease: 'power2.inOut' }, 0.05)
    .to(insideContent, { opacity: 0.25, scale: 0.96, duration: 0.35, ease: 'power2.in' }, 0.05);
  }

  function toggleBook() {
    if (isBookOpen) {
      animateCloseBook();
    } else {
      animateOpenBook();
    }
  }

  if (bookObject) {
    bookObject.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleBook();
    });

    bookObject.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleBook();
      }
    });
  }

  if (btnOpen) {
    btnOpen.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!isBookOpen) {
        animateOpenBook(() => {
          setTimeout(() => {
            goToSlide(1);
          }, 300);
        });
      } else {
        goToSlide(1);
      }
    });
  }

  function handleNextSlide() {
    if (currentSlideIndex === 0 && !isBookOpen) {
      animateOpenBook(() => {
        goToSlide(1);
      });
    } else {
      goToSlide(currentSlideIndex + 1);
    }
  }

  // Real-time scroll scrub between Slide 0 (Cover) and Slide 1
  viewport.addEventListener(
    'scroll',
    () => {
      if (slides.length < 2 || !frontCover || !bookObject || isBookAnimating) return;
      const slide1 = slides[1];
      const threshold = slide1.offsetTop || viewport.clientHeight;
      const scrollTop = viewport.scrollTop;

      if (scrollTop <= threshold) {
        const progress = Math.min(1, Math.max(0, scrollTop / threshold));
        const rotY = -168 * Math.min(1, progress * 1.35);
        const scale = 1 + 0.08 * progress;
        const opacity = 0.25 + 0.75 * Math.min(1, progress * 1.5);
        const rotX = 4 * (1 - progress);
        const bookRotY = -3 * (1 - progress);

        gsap.set(frontCover, { rotateY: rotY });
        gsap.set(bookObject, { rotateX: rotX, rotateY: bookRotY, scale: scale });
        if (insideContent) gsap.set(insideContent, { opacity: opacity, scale: 0.96 + 0.04 * progress });
        if (pageWipe) gsap.set(pageWipe, { opacity: Math.max(0, (progress - 0.75) / 0.25) });

        isBookOpen = progress > 0.45;
      }
    },
    { passive: true }
  );

  // Section Jump Dropdown
  if (sectionSelect) {
    sectionSelect.addEventListener('change', (e) => {
      const targetId = e.target.value;
      const targetSlide = document.getElementById(targetId);
      if (targetSlide) {
        targetSlide.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // Projection font-scaling
  if (projectionBtn) {
    projectionBtn.addEventListener('click', () => {
      const isLarge = document.documentElement.classList.toggle('projection-large');
      projectionBtn.classList.toggle('active', isLarge);
    });
  }

  // Fullscreen toggle
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen?.().catch(() => {});
      } else {
        document.exitFullscreen?.().catch(() => {});
      }
    });

    document.addEventListener('fullscreenchange', () => {
      fullscreenBtn.classList.toggle('active', Boolean(document.fullscreenElement));
    });
  }

  // Comprehensive keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) return;
    const modalOpen = document.getElementById('archetype-modal')?.classList.contains('open');
    if (modalOpen) return;

    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
      case 'PageDown':
      case ' ': // Spacebar
        e.preventDefault();
        handleNextSlide();
        break;

      case 'ArrowUp':
      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault();
        goToSlide(currentSlideIndex - 1);
        break;

      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;

      case 'End':
        e.preventDefault();
        goToSlide(totalSlides - 1);
        break;

      default:
        break;
    }
  });

  // Touch swipe support for tablet presentation screens
  let touchStartY = 0;
  viewport.addEventListener(
    'touchstart',
    (e) => {
      touchStartY = e.changedTouches[0].clientY;
    },
    { passive: true }
  );

  viewport.addEventListener(
    'touchend',
    (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY - touchEndY;
      if (Math.abs(diffY) > 50) {
        if (diffY > 0) {
          handleNextSlide();
        } else {
          goToSlide(currentSlideIndex - 1);
        }
      }
    },
    { passive: true }
  );

  // Initialize status on start
  updateStatus(0);
}

/* ==========================================================================
   4. CHARACTER ARCHETYPES MODAL
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
