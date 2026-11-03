import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ==========================================================================
   1. DRAMATIS PERSONAE CATALOGUE DATA
   ========================================================================== */
const CHARACTER_ARCHETYPES = {
  simoun: {
    name: 'Simoun (Crisóstomo Ibarra)',
    archetype: 'The Jeweler of the Escolta',
    portrait: '/assets/characters/simoun.png',
    chapters: 'Chapters 1–2, 7, 10–11, 16, 23, 33–35, 39',
    role: 'Thirteen years after being hunted on the lake as Crisóstomo Ibarra, he returns from Cuba with a fortune in jewels and the ear of the Captain-General. He believes that reform only prolongs slavery—so he bribes officials and encourages worse abuses to force the populace into armed revolt.',
    significance:
      'His tragedy lies in his own contradiction: while claiming to act as the judge of a corrupt colonial order, his first uprising collapses when he learns María Clara has died (Chapter 23), exposing how deeply his revolution remains tied to private grief and personal vengeance.'
  },
  basilio: {
    name: 'Basilio',
    archetype: 'Medical Student & Patron of Captain Tiago',
    portrait: '/assets/characters/basilio.png',
    chapters: 'Chapters 6–7, 23, 26, 31, 33–35',
    role: 'Orphaned son of Sisa who worked as an unpaid servant for Captain Tiago while enduring years of classroom humiliation to reach his final year of medicine. In Chapter 7, he refuses Simoun’s conspiracy because he wants only to heal the sick and marry Juli.',
    significance:
      'Basilio’s arc is not a theoretical conversion; it is a personal collapse. Arrested for posters he knew nothing about, robbed of his inheritance by Father Irene, and learning that Juli leaped to her death to save him, he walks into Simoun’s laboratory asking for nitroglycerin—yet still cannot stop himself from warning Isagani outside the wedding feast.'
  },
  isagani: {
    name: 'Isagani',
    archetype: 'Poet & Spokesman of the Student Academy',
    portrait: '/assets/characters/isagani.png',
    chapters: 'Chapters 2, 14–15, 22, 27, 35',
    role: 'Raised on the Pacific coast by his uncle Father Florentino, Isagani challenges Señor Pasta’s selfishness (Chapter 15) and debates the Jesuit Father Fernández face-to-face on the failures of colonial schooling (Chapter 27).',
    significance:
      'Embodies the novel’s sharpest irony: in Chapter 35, the young man who spoke most eloquently against colonial injustice rushes into the mined mansion and throws Simoun’s bomb into the Pasig River—saving the very officials and friars who ruined his country because he cannot bear to let his lost love Paulita Gómez die.'
  },
  'cabesang-tales': {
    name: 'Cabesang Tales (Matanglawin)',
    archetype: 'Farmer of Tiani Turned Outlaw',
    portrait: '/assets/characters/cabesang-tales.png',
    chapters: 'Chapters 4, 10, 38',
    role: 'Son of Tandang Selo and father of Tano and Juli. He clears virgin forest at the cost of his wife and eldest daughter Lucia’s lives, pays escalating Dominican rents from 20 to 200 pesos, loses his legal appeal in court, and is kidnapped by bandits for a 500-peso ransom.',
    significance:
      'Every step Tales takes before Chapter 10 is lawful, patient, and peaceful. Only after his land is handed to another man, his daughter Juli becomes a servant, and he is ordered out of his own house does he take Simoun’s revolver and become the guerrilla chief Matanglawin.'
  },
  juli: {
    name: 'Juli (Juliana)',
    archetype: 'Daughter of Cabesang Tales · Basilio’s Beloved',
    portrait: '/assets/characters/juli.png',
    chapters: 'Chapters 4, 8–9, 10, 30',
    role: 'To raise the 500-peso ransom for her kidnapped father Tales, she sells her jewelry and enters domestic servitude under Hermana Penchang on Christmas Day. Months later, when Basilio is the last student left in prison facing deportation, Sister Bali and the town judge pressure her to seek help from Father Camorra.',
    significance:
      'Juli’s story shows how colonial and clerical power falls heaviest on those with the fewest choices. Knowing what Father Camorra demands in return for his influence, she enters the Tiani convent in terror and leaps from the stone window to her death.'
  },
  'padre-florentino': {
    name: 'Father Florentino',
    archetype: 'Retired Filipino Secular Priest',
    portrait: '/assets/characters/padre-florentino.png',
    chapters: 'Chapters 2–3, 39',
    role: 'Born to a wealthy family in Manila and forced by his mother to enter the priesthood despite being in love, he retired to his Pacific estate shortly after the 1872 execution of Gomburza to live as a private citizen and raise his nephew Isagani.',
    significance:
      'In Chapter 39, he hears Simoun’s confession and argues that freedom cannot be won by corrupting society or by the sword alone (“Why independence, if the slaves of today will be the tyrants of tomorrow?”)—yet his call for patient suffering leaves open the hard question of what remains when every peaceful effort has been crushed.'
  },
  'maria-clara': {
    name: 'María Clara',
    archetype: 'Cloistered Inside Santa Clara',
    portrait: '/assets/characters/maria-clara.png',
    chapters: 'Chapters 18, 23',
    role: 'Never seen alive on stage in El Filibusterismo, she remains locked inside the Convent of Santa Clara for thirteen years while Simoun builds an entire revolution around the goal of breaking down the cloister doors to rescue her.',
    significance:
      'Her death at six o’clock on the evening of Chapter 23—just one hour before Simoun’s cannon signal is set to fire—causes Simoun to abandon his waiting regiments, revealing that his first uprising was driven as much by private obsession as by national liberation.'
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
  initCharacterModal();
  initKeyboardNavigation();
});

/* ==========================================================================
   3A. OPENING BOOK PORTAL (60FPS GPU-ACCELERATED)
   Instead of scaling a preserve-3d element to 6.5x (which lags GPU rasterization),
   we scale gently to 2.2x while crossfading the lightweight #portal-page-wipe layer.
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

  // Step 1 (0% -> 46%): Swing facsimile cover open around the spine
  tl.to(
    bookObject,
    {
      rotateX: 0,
      rotateY: 0,
      duration: 0.45,
      ease: 'power2.inOut'
    },
    0
  )
    .to(
      frontCover,
      {
        rotateY: -168,
        duration: 0.48,
        ease: 'power2.inOut'
      },
      0.02
    )
    .to(
      insideContent,
      {
        opacity: 1,
        scale: 1,
        duration: 0.35,
        ease: 'power2.out'
      },
      0.2
    );

  // Step 2 (46% -> 62%): Brief hold on open title spread
  tl.to(bookObject, { scale: 1.06, duration: 0.16, ease: 'none' }, 0.46);

  // Step 3 (62% -> 100%): Gentle 2.2x zoom paired with smooth full-screen paper wipe
  tl.to(
    insideContent,
    {
      opacity: 0,
      scale: 1.08,
      duration: 0.24,
      ease: 'power2.in'
    },
    0.64
  )
    .to(
      bookObject,
      {
        scale: 2.25,
        duration: 0.38,
        ease: 'power2.in'
      },
      0.62
    )
    .to(
      pageWipe,
      {
        opacity: 1,
        duration: 0.26,
        ease: 'power2.inOut'
      },
      0.72
    );
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

  // Start with lightweight paper wipe at opacity: 1 and book at modest 2.25x scale
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

  // Step 1 (0% -> 38%): Fade out paper wipe while pulling book back from 2.25x to 1.04x
  tl.to(
    outroWipe,
    {
      opacity: 0,
      duration: 0.24,
      ease: 'power2.inOut'
    },
    0
  )
    .to(
      outroBook,
      {
        scale: 1.04,
        duration: 0.38,
        ease: 'power2.out'
      },
      0
    )
    .to(
      outroContent,
      {
        opacity: 1,
        scale: 1,
        duration: 0.25,
        ease: 'power2.out'
      },
      0.15
    );

  // Step 2 (38% -> 52%): Brief hold on the Finis page
  tl.to(outroBook, { scale: 1, duration: 0.14, ease: 'none' }, 0.38);

  // Step 3 (52% -> 100%): Swing the facsimile front cover closed (rotateY: 0)
  tl.to(
    outroContent,
    {
      opacity: 0.25,
      scale: 0.96,
      duration: 0.28,
      ease: 'power2.in'
    },
    0.52
  )
    .to(
      outroCover,
      {
        rotateY: 0,
        duration: 0.45,
        ease: 'power2.inOut'
      },
      0.52
    )
    .to(
      outroBook,
      {
        rotateX: 4,
        rotateY: -3,
        duration: 0.44,
        ease: 'power2.inOut'
      },
      0.54
    );
}

/* ==========================================================================
   4. RESTRAINED ANIMATION SYSTEM (ONLY PLATES & MONUMENTAL REVELATIONS)
   Ordinary paragraphs are NOT animated so the page reads with calm authority.
   ========================================================================== */
function initSelectiveMomentReveals() {
  const moments = document.querySelectorAll('.reveal-moment');
  moments.forEach((el) => {
    gsap.fromTo(
      el,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.75,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 86%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
}

/* ==========================================================================
   5. SCROLL PROGRESS, NAV HIGHLIGHT & CATALOGUE MODAL
   ========================================================================== */
function initScrollProgressAndNav() {
  const progressBar = document.getElementById('scroll-progress-bar');
  const navLinks = document.querySelectorAll('.chapter-nav .nav-link');
  const stages = document.querySelectorAll('[data-stage-index]');

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
    },
    { passive: true }
  );
}

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
      <div class="modal-char-layout">
        <div>
          <img src="${data.portrait}" alt="${data.name}" class="modal-char-img" />
        </div>
        <div class="modal-char-details">
          <h4>${data.name}</h4>
          <span class="modal-archetype-pill">${data.archetype}</span>
          <div class="modal-detail-block">
            <h5>Chapters</h5>
            <p>${data.chapters}</p>
          </div>
          <div class="modal-detail-block">
            <h5>Narrative Role</h5>
            <p>${data.role}</p>
          </div>
          <div class="modal-detail-block">
            <h5>Historical &amp; Sociological Significance</h5>
            <p>${data.significance}</p>
          </div>
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

function initKeyboardNavigation() {
  const stages = Array.from(document.querySelectorAll('[data-stage-index]'));

  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
    const modalOpen = document.getElementById('archetype-modal')?.classList.contains('open');
    if (modalOpen) return;

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const next = stages.find((sec) => sec.getBoundingClientRect().top > 80);
      if (next) next.scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevs = stages.filter((sec) => sec.getBoundingClientRect().top < -80);
      const target = prevs[prevs.length - 1] || stages[0];
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
