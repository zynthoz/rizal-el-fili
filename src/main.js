import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ==========================================================================
   1. CHARACTER PROFILES (NATURAL, ACADEMICALLY GROUNDED PROSE)
   ========================================================================== */
const CHARACTER_ARCHETYPES = {
  simoun: {
    name: 'Simoun (Crisóstomo Ibarra)',
    archetype: 'Wealthy Jeweler and Leader of the Conspiracy',
    chapters: 'Chapters 1–2, 7, 10–11, 16, 23, 33–35, 39',
    role: 'Thirteen years after being pursued on the lake as Crisóstomo Ibarra, he returns from Cuba as an affluent jeweler with influence over the Captain-General. Convinced that peaceful reform cannot succeed, he uses bribery to worsen official abuses and provoke a nationwide revolt.',
    significance:
      'His two failed uprisings expose the conflict in his motives: in Chapter 23, he calls off his attack upon learning that María Clara has died, showing that his revolutionary plan remained tied to personal grief and revenge.'
  },
  basilio: {
    name: 'Basilio',
    archetype: 'Graduating Medical Student',
    chapters: 'Chapters 6–7, 23, 26, 31, 33–35',
    role: 'Orphaned son of Sisa who worked as an unpaid servant for Captain Tiago while completing medical school. In Chapter 7, he declines Simoun’s conspiracy because he hopes to practice medicine peacefully and marry Juli.',
    significance:
      'Represents Filipinos who try to survive colonial rule through hard work and compliance. Only after he is arrested without cause, stripped of his twenty-five-peso bequest, and told of Juli’s death does he join Simoun’s plot, though his warning to Isagani ultimately prevents the explosion.'
  },
  isagani: {
    name: 'Isagani',
    archetype: 'Student Poet and Advocate for the Spanish Academy',
    chapters: 'Chapters 2, 14–15, 22, 27, 35',
    role: 'Nephew of Father Florentino and former fiancé of Paulita Gómez. He speaks for the student campaign before the lawyer Señor Pasta (Chapter 15) and debates the Jesuit Father Fernández on the shortcomings of colonial education (Chapter 27).',
    significance:
      'Illustrates a central contradiction in the climax: despite opposing colonial abuses throughout the novel, he rushes into the mined house at Calle Anloague and throws Simoun’s lamp into the Pasig River to save Paulita, inadvertently rescuing the colonial elite.'
  },
  'cabesang-tales': {
    name: 'Cabesang Tales (Matanglawin)',
    archetype: 'Dispossessed Farmer of Tiani',
    chapters: 'Chapters 4, 10, 38',
    role: 'Son of Tandang Selo and father of Tano and Juli. After clearing forest land at the cost of his wife and eldest daughter Lucia’s lives, he faces friar rent increases from twenty to two hundred pesos, loses his appeal in court, and is held by bandits for a 500-peso ransom.',
    significance:
      'Modeled on the evicted tenant farmers of Calamba. Tales exhausts every peaceful and legal remedy before taking Simoun’s revolver in Chapter 10 and leading guerrilla fighters in the mountains as Matanglawin.'
  },
  juli: {
    name: 'Juli (Juliana)',
    archetype: 'Daughter of Cabesang Tales and Fiancée of Basilio',
    chapters: 'Chapters 4, 8–9, 10, 30',
    role: 'Sells her jewelry and enters domestic service under Hermana Penchang on Christmas Day to pay her father’s 500-peso ransom. Months later, when Basilio is the last student held in prison facing deportation, townspeople urge her to ask Father Camorra for help.',
    significance:
      'Shows how debt, unequal courts, and clerical abuse fall heaviest on peasant families without money or influence. Rather than submit to Father Camorra inside the Tiani convent, she leaps from the window to her death.'
  },
  'padre-florentino': {
    name: 'Father Florentino',
    archetype: 'Retired Filipino Secular Priest',
    chapters: 'Chapters 2–3, 39',
    role: 'Born to a wealthy Manila family and pressured by his mother to enter the priesthood, he retired to his estate on the Pacific coast shortly after the 1872 execution of Gomburza and raised his nephew Isagani.',
    significance:
      'Honors the Filipino secular clergy and delivers the ethical argument of Chapter 39: that independence won through corruption and hatred risks turning today’s slaves into tomorrow’s tyrants.'
  },
  'pasta-custodio': {
    name: 'Señor Pasta & Don Custodio',
    archetype: 'Manila Lawyer and Colonial Arbitrator',
    chapters: 'Chapters 14–15, 20',
    role: 'Señor Pasta is a wealthy Filipino lawyer who advises the friars and counsels Isagani to avoid public causes; Don Custodio is the Spanish official appointed to rule on the students’ Spanish-language academy.',
    significance:
      'Together they show why peaceful petitions fail: educated insiders like Pasta protect their own standing, while officials like Custodio place student initiatives back under clerical control.'
  },
  'zayb-paulita': {
    name: 'Ben Zayb & Paulita Gómez',
    archetype: 'Manila Journalist and Colonial Society Bride',
    chapters: 'Chapters 1, 16–18, 22, 34–36',
    role: 'Ben Zayb (an anagram of Ybañez) writes flattering newspaper reports for colonial officials until the Captain-General censors his coverage of the wedding; Paulita Gómez breaks off her engagement to Isagani after his arrest to marry the wealthy Juanito Pelaez.',
    significance:
      'Depict a colonial press shaped by censorship and vanity alongside an elite social circle that values comfort and status over solidarity.'
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
   ========================================================================== */
function initSelectiveMomentReveals() {
  const moments = document.querySelectorAll('.reveal-moment');
  moments.forEach((el) => {
    gsap.fromTo(
      el,
      { y: 16, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.65,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
}

/* ==========================================================================
   5. INTERACTIVE BAPOR TABO DECK EXPLORER (BEAT 03)
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

      ScrollTrigger.refresh();
    });
  });
}

/* ==========================================================================
   6. INTERACTIVE POMEGRANATE LAMP INSPECTOR (BEAT 11)
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

      ScrollTrigger.refresh();
    });
  });
}

/* ==========================================================================
   7. SCROLL PROGRESS & NAVIGATION HIGHLIGHT
   ========================================================================== */
function initScrollProgressAndNav() {
  const progressBar = document.getElementById('scroll-progress-bar');
  const navLinks = document.querySelectorAll('.chapter-nav .nav-link');
  const stages = document.querySelectorAll('[data-stage-index]');
  const beats = Array.from(document.querySelectorAll('.presentation-beat'));
  const beatIndicator = document.getElementById('beat-indicator');

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
   8. CHARACTER ARCHETYPES MODAL
   ========================================================================== */
function initCharacterModal() {
  const modal = document.getElementById('archetype-modal');
  const closeBtn = document.getElementById('modal-close');
  const openBtn = document.getElementById('btn-archetypes');
  const tabsContainer = document.getElementById('modal-char-tabs');
  const bodyContainer = document.getElementById('modal-char-content');

  if (!modal || !tabsContainer || !bodyContainer) return;

  const keys = Object.keys(CHARACTER_ARCHETYPES);

  function renderCharacter(charKey) {
    const data = CHARACTER_ARCHETYPES[charKey] || CHARACTER_ARCHETYPES.simoun;

    tabsContainer.querySelectorAll('.char-tab-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.key === charKey);
    });

    bodyContainer.innerHTML = `
      <div class="modal-char-details">
        <h4>${data.name}</h4>
        <span class="modal-archetype-pill">${data.archetype}</span>
        <div class="modal-detail-block">
          <h5>Chapters</h5>
          <p>${data.chapters}</p>
        </div>
        <div class="modal-detail-block">
          <h5>Role in the Novel</h5>
          <p>${data.role}</p>
        </div>
        <div class="modal-detail-block">
          <h5>Historical &amp; Literary Context</h5>
          <p>${data.significance}</p>
        </div>
      </div>
    `;
  }

  tabsContainer.innerHTML = keys
    .map(
      (k) =>
        `<button class="char-tab-btn" data-key="${k}">${CHARACTER_ARCHETYPES[k].name.split(' (')[0]}</button>`
    )
    .join('');

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
   9. PRESENTATION CONTROLS (STEPPER, PROJECTION SCALE & FULLSCREEN)
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
    const next = stops.find((el) => el.getBoundingClientRect().top > 95);
    if (next) {
      next.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function stepPrev() {
    const prevs = stops.filter((el) => el.getBoundingClientRect().top < -60);
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
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
    const modalOpen = document.getElementById('archetype-modal')?.classList.contains('open');
    if (modalOpen) return;

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      stepNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      stepPrev();
    }
  });
}
