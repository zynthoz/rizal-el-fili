import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ==========================================================================
   1. DRAMATIS PERSONAE CATALOGUE DATA (MAPPED TO TOPIC_OUTLINE.MD SECTION III)
   ========================================================================== */
const CHARACTER_ARCHETYPES = {
  simoun: {
    name: 'Simoun (Crisóstomo Ibarra)',
    archetype: 'The Radicalized Revolutionary / Accelerationist',
    chapters: 'Chapters 1–2, 7, 10–11, 16, 23, 33–35, 39',
    role: 'Thirteen years after being hunted on the lake as Crisóstomo Ibarra, he returns from Cuba with a fortune in jewels and the ear of the Captain-General. He believes peaceful reform only prolongs slavery—so he bribes officials and encourages worse abuses to force the populace into armed revolt.',
    significance:
      'His tragedy lies in his own contradiction: while claiming to act as the judge of a corrupt colonial order, his first uprising collapses when he learns María Clara has died (Chapter 23), exposing how deeply his revolution remains tied to private grief and personal vengeance.'
  },
  basilio: {
    name: 'Basilio',
    archetype: 'The Assimilated Pragmatist Turned Rebel',
    chapters: 'Chapters 6–7, 23, 26, 31, 33–35',
    role: 'Orphaned son of Sisa and ward of Captain Tiago who endured years of classroom humiliation to reach his final year of medicine. In Chapter 7, he refuses Simoun’s conspiracy because he wants only to heal the sick and marry Juli.',
    significance:
      'Embodies the educated youth trying to survive through quiet compliance and clinical science until systemic brutality destroys his loved ones—arrested without a warrant, robbed of his 25-peso bequest by Father Irene, and driven to Simoun’s laboratory after Juli’s death.'
  },
  isagani: {
    name: 'Isagani',
    archetype: 'The Idealistic Poet-Patriot',
    chapters: 'Chapters 2, 14–15, 22, 27, 35',
    role: 'Raised on the Pacific coast by his uncle Father Florentino, Isagani challenges Señor Pasta’s selfishness (Chapter 15) and debates the Jesuit Father Fernández face-to-face on the failures of colonial schooling (Chapter 27).',
    significance:
      'Voices Rizal’s highest civic ideals, yet embodies the novel’s sharpest irony: in Chapter 35, he rushes into the mined mansion and hurls Simoun’s nitroglycerin lamp into the Pasig River—saving the colonial elite because he cannot bear to let his lost love Paulita Gómez die.'
  },
  'cabesang-tales': {
    name: 'Cabesang Tales (Matanglawin)',
    archetype: 'The Dispossessed Peasant Turned Outlaw',
    chapters: 'Chapters 4, 10, 38',
    role: 'Son of Tandang Selo and father of Tano and Juli. He clears virgin forest at the cost of his wife and eldest daughter Lucia’s lives, pays escalating friar rents from 20 to 200 pesos, loses his legal appeal in court, and is kidnapped by bandits for a 500-peso ransom.',
    significance:
      'Modeled on the evicted tenant farmers of Calamba; demonstrates a Lockean view of property—that land belongs to the farmer who clears it—and shows how institutional land-grabbing leaves peaceful citizens no recourse but armed insurgency.'
  },
  juli: {
    name: 'Juli (Juliana)',
    archetype: 'Daughter of Cabesang Tales · Basilio’s Beloved',
    chapters: 'Chapters 4, 8–9, 10, 30',
    role: 'To raise the 500-peso ransom for her kidnapped father Tales, she sells her jewelry and enters domestic servitude under Hermana Penchang on Christmas Day. When Basilio is the last student left in prison facing deportation, Sister Bali and the town judge pressure her to seek help from Father Camorra.',
    significance:
      'Shows how colonial debt, judicial abandonment, and clerical abuse fall heaviest on those with the fewest choices. Knowing what Father Camorra demands in return for his influence, she leaps from the Tiani convent window to her death.'
  },
  'padre-florentino': {
    name: 'Father Florentino',
    archetype: 'The Moral Conscience / Filipino Secular Clergy',
    chapters: 'Chapters 2–3, 39',
    role: 'Born to a wealthy family in Manila and forced by his mother to enter the priesthood despite being in love, he retired to his Pacific estate shortly after the 1872 execution of Gomburza to live as a private citizen and raise his nephew Isagani.',
    significance:
      'Serves as a tribute to Gomburza and articulates the ethical thesis of Chapter 39: that freedom cannot be won by corrupting society or by personal vengeance (“Why independence, if the slaves of today will be the tyrants of tomorrow?”).'
  },
  'pasta-custodio': {
    name: 'Señor Pasta & Don Custodio',
    archetype: 'The Colonial Technocrat & Pretentious Bureaucrat',
    chapters: 'Chapters 14–15, 20',
    role: 'Señor Pasta is the wealthiest Filipino lawyer in Manila who counsels the friars and tells Isagani to care only for himself; Don Custodio (“Buena Tinta”) is the Spanish arbitrator whose shelves overflow with unread folders of “Projects in Study.”',
    significance:
      'Pasta represents educated Filipinos who abandon national solidarity to protect their personal comfort; Custodio embodies absurd colonial incompetence disguised as liberal statesmanship.'
  },
  'zayb-paulita': {
    name: 'Ben Zayb & Paulita Gómez',
    archetype: 'The Corrupt Colonial Press & Self-Serving Elite',
    chapters: 'Chapters 1, 16–18, 22, 34–36',
    role: 'Ben Zayb (an anagram of Ybañez) is a Spanish journalist who fabricates flattering stories for the friars until the Captain-General censors his wedding article; Paulita Gómez is Doña Victorina’s niece who abandons Isagani after his arrest to marry the wealthy Juanito Pelaez.',
    significance:
      'Satirize sycophantic colonial journalism and superficial Hispanized social climbing that prioritize status and safety over truth and solidarity.'
  },
  'maria-clara': {
    name: 'María Clara',
    archetype: 'Cloistered Inside Santa Clara',
    chapters: 'Chapters 18, 23',
    role: 'Locked inside the Convent of Santa Clara for thirteen years while Simoun builds an entire revolution around the goal of breaking down the cloister doors to rescue her.',
    significance:
      'Her death at 6:00 PM in Chapter 23—one hour before Simoun’s 8:00 PM cannon signal—causes Simoun to abandon his waiting regiments, exposing how his first uprising was tied to private obsession.'
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
  initPresentationBeatStepper();
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

  tl.to(bookObject, { scale: 1.06, duration: 0.16, ease: 'none' }, 0.46);

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

  tl.to(outroBook, { scale: 1, duration: 0.14, ease: 'none' }, 0.38);

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
   4. RESTRAINED ANIMATION SYSTEM (PLATES & MONUMENTAL BEATS)
   ========================================================================== */
function initSelectiveMomentReveals() {
  const moments = document.querySelectorAll('.reveal-moment');
  moments.forEach((el) => {
    gsap.fromTo(
      el,
      { y: 18, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
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
   5. SCROLL PROGRESS & STAGE HIGHLIGHT
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
   6. DRAMATIS PERSONAE CATALOGUE MODAL (OUTLINE III)
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
          <h5>Narrative Role</h5>
          <p>${data.role}</p>
        </div>
        <div class="modal-detail-block">
          <h5>Historical &amp; Sociological Significance</h5>
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
   7. LIVE PRESENTATION BEAT STEPPER (01 -> 18 + BOOK PORTALS)
   Allows presenter to step sequentially through every numbered beat using
   Left/Right Arrow keys or the top-nav stepper buttons.
   ========================================================================== */
function initPresentationBeatStepper() {
  const stops = [
    document.getElementById('hero-book'),
    ...Array.from(document.querySelectorAll('.presentation-beat')),
    document.getElementById('closing-book')
  ].filter(Boolean);

  const prevBtn = document.getElementById('beat-prev');
  const nextBtn = document.getElementById('beat-next');

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
