/**
 * HARTH COFFEE — SCRIPT
 * Premium Specialty Coffee Shop Website
 * Features: Lenis Smooth Scroll, Dynamic Menu, Product Modal,
 * Directions Modal, Newsletter Validation & Scroll Reveals.
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. DATA STRUCTURE: MENU ITEMS
  // ==========================================================================
  const MENU_ITEMS = [
    {
      id: 'classic-latte',
      name: 'Classic Latte',
      category: 'COFFEE',
      categoryKey: 'coffee',
      price: 4.50,
      tagline: 'Rich. Smooth. Timeless.',
      description: 'Double shot of our seasonal house espresso balanced with silky steamed whole milk and velvety microfoam. Gentle caramel sweetness with roasted pecan notes.',
      ingredients: [
        'Signature House Espresso (Colombia & Ethiopia)',
        'Steamed Organic Milk (or choice of Oat / Almond / Soy)'
      ],
      flavorProfile: ['Caramel sweetness', 'Roasted hazelnut', 'Velvety mouthfeel'],
      dietary: 'Vegetarian · Alternative milk options readily available at no extra charge.',
      sizeOptions: ['8 oz Cortado size', '12 oz Standard', '16 oz Large'],
      customizations: ['Whole Milk', 'Oat Milk (+ $0.50)', 'Almond Milk', 'Extra Espresso Shot (+ $1.00)'],
      image: 'assets/images/latte.jpg',
      featured: true
    },
    {
      id: 'iced-vanilla',
      name: 'Iced Vanilla',
      category: 'COLD BREW',
      categoryKey: 'cold-brew',
      price: 5.00,
      tagline: 'Cool. Creamy. Refreshing.',
      description: 'Single-origin 18-hour cold brew infused with house-steeped Madagascar bourbon vanilla bean syrup, served over hand-cut ice and floated with chilled organic cream.',
      ingredients: [
        '18-hour Cold Brew (Guatemala Huehuetenango)',
        'Madagascar Bourbon Vanilla Bean Syrup',
        'Hand-Cut Ice',
        'Float of Sweetened Organic Cream'
      ],
      flavorProfile: ['Dark chocolate base', 'Floral vanilla aroma', 'Silky sweet cream finish'],
      dietary: 'Vegetarian · Can be made 100% plant-based with vanilla oat cold foam.',
      sizeOptions: ['16 oz Regular', '20 oz Large (+ $0.60)'],
      customizations: ['Sweet Cream Float', 'Oat Vanilla Foam', 'Light Ice', 'Unsweetened'],
      image: 'assets/images/iced-vanilla.jpg',
      featured: true
    },
    {
      id: 'avocado-toast',
      name: 'Avocado Toast',
      category: 'ALL DAY',
      categoryKey: 'all-day',
      price: 8.50,
      tagline: 'Fresh. Wholesome. Delicious.',
      description: 'Ripe Hass avocado coarsely crushed with Meyer lemon and flake sea salt on thick toasted country sourdough, topped with pickled shallots, organic microgreens, and Egyptian dukkah.',
      ingredients: [
        'Artisanal Country Sourdough',
        'Crushed Hass Avocado',
        'Meyer Lemon & Maldon Salt',
        'Pickled Red Shallots',
        'Toasted Sesame & Pistachio Dukkah',
        'Cold-Pressed Olive Oil'
      ],
      flavorProfile: ['Buttery avocado', 'Crisp sourdough crust', 'Citrus brightness', 'Nutty dukkah crunch'],
      dietary: 'Vegetarian · Vegan Friendly · Contains sesame & tree nuts (can be omitted upon request).',
      sizeOptions: ['Single Artisan Slice', 'Double Slice (+ $4.50)'],
      customizations: ['Poached Egg (+ $1.50)', 'Gluten-Free Seed Bread', 'Extra Microgreens', 'Chili Flakes'],
      image: 'assets/images/avocado-toast.jpg',
      featured: true
    },
    {
      id: 'almond-croissant',
      name: 'Almond Croissant',
      category: 'BAKERY',
      categoryKey: 'bakery',
      price: 4.90,
      tagline: 'Buttery. Flaky. Irresistible.',
      description: 'Twice-baked French butter croissant filled with luscious roasted almond frangipane, lightly soaked with orange blossom syrup, and crowned with toasted sliced almonds and powdered sugar.',
      ingredients: [
        'Slow-Fermented French Laminated Pastry',
        'AOP Charentes-Poitou Butter',
        'House-Made Almond Frangipane',
        'Orange Blossom Syrup',
        'Toasted California Sliced Almonds'
      ],
      flavorProfile: ['Deep buttery crust', 'Sweet marzipan center', 'Toasted nut crunch'],
      dietary: 'Vegetarian · Contains wheat gluten, butter dairy, eggs, and tree nuts.',
      sizeOptions: ['Fresh Daily Bake (Standard size)'],
      customizations: ['Warmed to Order', 'Served with Clotted Cream (+ $1.00)'],
      image: 'assets/images/almond-croissant.jpg',
      featured: true
    },
    {
      id: 'cardamom-bun',
      name: 'Cardamom Bun',
      category: 'BAKERY',
      categoryKey: 'bakery',
      price: 4.75,
      tagline: 'Aromatic. Twisted. Golden.',
      description: 'Traditional Swedish kardemummabulle made with slow-fermented enriched brioche dough, freshly cracked green cardamom pods, and caramelized Swedish pearl sugar.',
      ingredients: [
        'Enriched Brioche Dough',
        'Cracked Green Cardamom Seeds',
        'Cultured Butter & Cane Sugar',
        'Swedish Pearl Sugar'
      ],
      flavorProfile: ['Intense herbal cardamom', 'Sweet caramelized butter', 'Tender crumb'],
      dietary: 'Vegetarian · Contains gluten, dairy, and eggs.',
      sizeOptions: ['Standard Fresh Bun'],
      customizations: ['Warmed to Order'],
      image: 'assets/images/cardamom-bun.jpg',
      featured: false
    },
    {
      id: 'pour-over',
      name: 'Single-Origin Pour Over',
      category: 'COFFEE',
      categoryKey: 'coffee',
      price: 5.50,
      tagline: 'Floral. Vibrant. Complex.',
      description: 'Hand-brewed using Kalita Wave drippers. Rotating weekly micro-lot lots showcasing clean terroir, vibrant acidity, and jasmine finish.',
      ingredients: [
        'Ethiopian Yirgacheffe G1 Washed Heirloom Beans',
        'Custom Remineralized 93°C Water'
      ],
      flavorProfile: ['Jasmine blossom', 'Bergamot tea', 'Honeyed apricot'],
      dietary: '100% Vegan · Gluten-Free · Zero Additives',
      sizeOptions: ['10 oz Carafe', '14 oz Carafe (+ $1.00)'],
      customizations: ['Served Hot', 'Brewed Over Ice (+ $0.50)'],
      image: 'assets/images/pour-over.jpg',
      featured: false
    },
    {
      id: 'matcha-latte',
      name: 'Matcha Cloud',
      category: 'COLD BREW',
      categoryKey: 'cold-brew',
      price: 5.75,
      tagline: 'Earthy. Silky. Harmonious.',
      description: 'Ceremonial grade Uji green tea whisked by hand with bamboo chasen, served layered over iced organic oat milk and crowned with a delicate vanilla cream cloud.',
      ingredients: [
        'Ceremonial Grade Uji Kyoto Matcha',
        'Organic Barista Oat Milk',
        'Pure Agave Nectar',
        'Light Vanilla Cold Foam'
      ],
      flavorProfile: ['Umami tea sweetness', 'Creamy oat body', 'Velvety cloud top'],
      dietary: 'Vegetarian · Can be made 100% vegan with dairy-free vanilla foam.',
      sizeOptions: ['12 oz Iced', '16 oz Iced (+ $0.60)'],
      customizations: ['Less Sweet', 'Unsweetened', '100% Vegan Foam'],
      image: 'assets/images/matcha-latte.jpg',
      featured: false
    }
  ];

  // ==========================================================================
  // 2. LOCATIONS DATA FOR DIRECTIONS MODAL
  // ==========================================================================
  const LOCATIONS_DATA = {
    flagship: {
      name: 'Downtown Flagship',
      address: '424 St. Clair Avenue, Suite 100',
      hours: 'Open Daily: 7:00 AM – 6:00 PM',
      phone: '(555) 234-8901',
      transit: 'Subway: St. Clair Station (2 min walk). Streetcar stop directly in front.',
      parking: 'Dedicated rear cafe parking for up to 12 vehicles, plus underground public garage.',
      features: 'Modbar undercounter espresso, communal natural white oak seating, power outlets, high-speed Wi-Fi.'
    },
    roastery: {
      name: 'Arts District Roastery',
      address: '890 Mercer Street, Building B',
      hours: 'Mon–Sat: 6:30 AM – 7:00 PM · Sun: 8:00 AM – 5:00 PM',
      phone: '(555) 782-4419',
      transit: 'Bus routes 14 and 88 stop at Mercer St. Dedicated bicycle corral on site.',
      parking: 'Spacious industrial lot with free 90-minute visitor parking.',
      features: '1950s Probat Roaster in view, weekly public coffee cuppings, sunlit interior courtyard.'
    },
    conservatory: {
      name: 'West End Conservatory',
      address: '1420 Oakridge Way, Garden Row',
      hours: 'Open Daily: 7:30 AM – 5:00 PM',
      phone: '(555) 419-8802',
      transit: 'Green Line to Oakridge Station, transfer to Line 3 bus (5 min).',
      parking: 'Garden row street parking and nearby park lot.',
      features: 'Glass greenhouse atrium, rare botanical collection, single-garden teas, quiet reading nooks.'
    }
  };

  // ==========================================================================
  // 3. LENIS SMOOTH SCROLL INITIALIZATION
  // ==========================================================================
  let lenis = null;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initLenis() {
    if (typeof Lenis !== 'undefined' && !prefersReducedMotion) {
      try {
        lenis = new Lenis({
          duration: 1.15,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 1.4,
          infinite: false
        });

        function raf(time) {
          if (lenis) {
            lenis.raf(time);
          }
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      } catch (err) {
        console.warn('Lenis initialization notice:', err);
      }
    }
  }

  function lockScroll() {
    if (lenis) lenis.stop();
    document.body.classList.add('modal-open');
  }

  function unlockScroll() {
    if (lenis) lenis.start();
    document.body.classList.remove('modal-open');
  }

  // Prevent wheel and touch events inside modals from ever being intercepted
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.modal-window, .modal-backdrop, .mobile-drawer').forEach((el) => {
      el.addEventListener('wheel', (e) => {
        e.stopPropagation();
      }, { passive: true });
      el.addEventListener('touchmove', (e) => {
        e.stopPropagation();
      }, { passive: true });
    });
  });

  function scrollToSection(targetSelector) {
    const targetElement = document.querySelector(targetSelector);
    if (!targetElement) return;

    if (lenis) {
      lenis.scrollTo(targetElement, {
        offset: -75,
        duration: 1.2
      });
    } else {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // ==========================================================================
  // 4. HEADER & NAVIGATION
  // ==========================================================================
  const siteHeader = document.getElementById('siteHeader');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > 30) {
      siteHeader.classList.add('is-scrolled');
    } else {
      siteHeader.classList.remove('is-scrolled');
    }

    // Active nav link highlight
    const sections = ['hero', 'menu', 'story', 'locations', 'values'];
    let currentSection = '';

    for (let id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          currentSection = id;
          break;
        }
      }
    }

    if (currentSection) {
      document.querySelectorAll('.nav-link').forEach((link) => {
        const href = link.getAttribute('href');
        if (href === `#${currentSection}` || (currentSection === 'hero' && href === '#top')) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Mobile Drawer Toggle
  function openMobileMenu() {
    mobileToggle.setAttribute('aria-expanded', 'true');
    mobileDrawer.classList.add('is-open');
    drawerBackdrop.classList.add('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    drawerBackdrop.setAttribute('aria-hidden', 'false');
    lockScroll();
  }

  function closeMobileMenu() {
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileDrawer.classList.remove('is-open');
    drawerBackdrop.classList.remove('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    drawerBackdrop.setAttribute('aria-hidden', 'true');
    unlockScroll();
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeMobileMenu);
  }

  // Smooth Navigation Links
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        closeMobileMenu();
        if (href === '#top') {
          if (lenis) lenis.scrollTo(0);
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          scrollToSection(href);
        }
      }
    });
  });

  // Hero CTAs
  const heroExploreBtn = document.getElementById('heroExploreBtn');
  if (heroExploreBtn) {
    heroExploreBtn.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToSection('#menu');
    });
  }

  const heroStoryBtn = document.getElementById('heroStoryBtn');
  if (heroStoryBtn) {
    heroStoryBtn.addEventListener('click', () => {
      scrollToSection('#story');
    });
  }

  // ==========================================================================
  // 5. DYNAMIC MENU RENDERING & CATEGORY TABS
  // ==========================================================================
  const menuGrid = document.getElementById('menuGrid');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const viewAllMenuBtn = document.getElementById('viewAllMenuBtn');
  let currentCategory = 'all';
  let showAllItems = false;

  function renderMenu() {
    if (!menuGrid) return;

    let filtered = MENU_ITEMS.filter((item) => {
      if (currentCategory === 'all') return true;
      return item.categoryKey === currentCategory;
    });

    if (!showAllItems && currentCategory === 'all') {
      filtered = filtered.filter((item) => item.featured);
    }

    menuGrid.innerHTML = '';

    filtered.forEach((item) => {
      const card = document.createElement('article');
      card.className = 'menu-card reveal is-revealed';
      card.setAttribute('data-id', item.id);
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View details for ${item.name}, $${item.price.toFixed(2)}`);

      card.innerHTML = `
        <div class="menu-card-image-box">
          <img src="${item.image}" alt="${item.name} - ${item.tagline}" class="menu-card-img" loading="lazy">
        </div>
        <div class="menu-card-body">
          <div>
            <span class="menu-card-category">${item.category}</span>
            <h3 class="menu-card-title">${item.name}</h3>
            <p class="menu-card-tagline">${item.tagline}</p>
          </div>
          <div class="menu-card-footer">
            <span class="menu-card-price">$${item.price.toFixed(2)}</span>
            <button type="button" class="menu-card-add-btn" aria-label="Open ${item.name} details">+</button>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openProductModal(item.id));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openProductModal(item.id);
        }
      });

      menuGrid.appendChild(card);
    });
  }

  // Tab Filtering
  tabButtons.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabButtons.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      currentCategory = tab.getAttribute('data-filter');
      showAllItems = true; // when choosing a category, show all in that category
      renderMenu();
    });
  });

  // "View Full Menu" Toggle
  if (viewAllMenuBtn) {
    viewAllMenuBtn.addEventListener('click', () => {
      showAllItems = !showAllItems;
      if (showAllItems) {
        viewAllMenuBtn.innerHTML = 'Show Featured Only <span class="arrow-icon">↑</span>';
      } else {
        viewAllMenuBtn.innerHTML = 'View Full Menu <span class="arrow-icon">→</span>';
      }
      renderMenu();
      scrollToSection('#menu');
    });
  }

  // ==========================================================================
  // 6. PRODUCT DETAILS MODAL
  // ==========================================================================
  const productModal = document.getElementById('productModal');
  const closeProductModalBtn = document.getElementById('closeProductModalBtn');
  const modalCloseSecondaryBtn = document.getElementById('modalCloseSecondaryBtn');
  const productModalImg = document.getElementById('productModalImg');
  const productModalCategory = document.getElementById('productModalCategory');
  const productModalTitle = document.getElementById('productModalTitle');
  const productModalPrice = document.getElementById('productModalPrice');
  const productModalDesc = document.getElementById('productModalDesc');
  const modalIngredientsList = document.getElementById('modalIngredientsList');
  const modalFlavorList = document.getElementById('modalFlavorList');
  const modalDietaryInfo = document.getElementById('modalDietaryInfo');
  const modalSizeList = document.getElementById('modalSizeList');
  const modalAddSampleBtn = document.getElementById('modalAddSampleBtn');

  let activeProduct = null;

  function openProductModal(productId) {
    const item = MENU_ITEMS.find((p) => p.id === productId);
    if (!item) return;

    activeProduct = item;

    // Populate data
    productModalImg.src = item.image;
    productModalImg.alt = `${item.name} presentation`;
    productModalCategory.textContent = item.category;
    productModalTitle.textContent = item.name;
    productModalPrice.textContent = `$${item.price.toFixed(2)}`;
    productModalDesc.textContent = item.description;

    // Ingredients
    modalIngredientsList.innerHTML = '';
    item.ingredients.forEach((ing) => {
      const span = document.createElement('span');
      span.className = 'ingredient-pill';
      span.textContent = ing;
      modalIngredientsList.appendChild(span);
    });

    // Flavors
    modalFlavorList.innerHTML = '';
    item.flavorProfile.forEach((flavor) => {
      const span = document.createElement('span');
      span.className = 'note-pill';
      span.textContent = flavor;
      modalFlavorList.appendChild(span);
    });

    // Dietary
    modalDietaryInfo.textContent = item.dietary;

    // Sizes / Options
    modalSizeList.innerHTML = '';
    item.sizeOptions.forEach((size, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `custom-pill ${idx === 0 ? 'is-selected' : ''}`;
      btn.textContent = size;
      btn.addEventListener('click', () => {
        modalSizeList.querySelectorAll('.custom-pill').forEach((p) => p.classList.remove('is-selected'));
        btn.classList.add('is-selected');
      });
      modalSizeList.appendChild(btn);
    });

    // Show modal
    productModal.classList.add('is-active');
    productModal.setAttribute('aria-hidden', 'false');
    lockScroll();
    closeProductModalBtn.focus();
  }

  function closeProductModal() {
    productModal.classList.remove('is-active');
    productModal.setAttribute('aria-hidden', 'true');
    unlockScroll();
    activeProduct = null;
  }

  if (closeProductModalBtn) closeProductModalBtn.addEventListener('click', closeProductModal);
  if (modalCloseSecondaryBtn) modalCloseSecondaryBtn.addEventListener('click', closeProductModal);

  // Close when clicking outside modal window
  productModal.addEventListener('click', (e) => {
    if (e.target === productModal) {
      closeProductModal();
    }
  });

  // Add Tasting Sample Feedback
  if (modalAddSampleBtn) {
    modalAddSampleBtn.addEventListener('click', () => {
      if (activeProduct) {
        showToast(`Added ${activeProduct.name} to your barista tasting list.`);
        closeProductModal();
      }
    });
  }

  // ==========================================================================
  // 7. DIRECTIONS & LOCATION MODAL
  // ==========================================================================
  const directionsModal = document.getElementById('directionsModal');
  const closeDirectionsModalBtn = document.getElementById('closeDirectionsModalBtn');
  const directionsModalTitle = document.getElementById('directionsModalTitle');
  const directionsContent = document.getElementById('directionsContent');

  function openDirectionsModal(locKey) {
    const loc = LOCATIONS_DATA[locKey] || LOCATIONS_DATA.flagship;
    directionsModalTitle.textContent = `${loc.name}`;
    directionsContent.innerHTML = `
      <div style="background-color: rgba(232, 217, 197, 0.4); padding: 1.4rem; border-radius: var(--radius-lg); margin-bottom: 1.2rem; border-left: 3px solid var(--color-coffee-brown);">
        <p style="font-size: 1rem; font-weight: 600; color: var(--color-text-primary); margin-bottom: 0.3rem;">${loc.address}</p>
        <p style="font-size: 0.88rem; color: var(--color-text-secondary);">${loc.hours} · Phone: ${loc.phone}</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.8rem; font-size: 0.9rem; margin-bottom: 1.4rem;">
        <div>
          <strong style="color: var(--color-coffee-brown);">Public Transit:</strong>
          <span style="color: var(--color-text-secondary);"> ${loc.transit}</span>
        </div>
        <div>
          <strong style="color: var(--color-coffee-brown);">Parking & Bicycles:</strong>
          <span style="color: var(--color-text-secondary);"> ${loc.parking}</span>
        </div>
        <div>
          <strong style="color: var(--color-coffee-brown);">Space Highlights:</strong>
          <span style="color: var(--color-text-secondary);"> ${loc.features}</span>
        </div>
      </div>

      <div style="display: flex; gap: 1rem;">
        <button type="button" class="btn btn-primary" id="openExternalMapBtn" style="flex-grow: 1;">
          Open in Maps App <span class="arrow-icon">↗</span>
        </button>
      </div>
    `;

    const openMapBtn = document.getElementById('openExternalMapBtn');
    if (openMapBtn) {
      openMapBtn.addEventListener('click', () => {
        window.open(`https://maps.google.com/?q=${encodeURIComponent(loc.name + ' ' + loc.address)}`, '_blank');
      });
    }

    directionsModal.classList.add('is-active');
    directionsModal.setAttribute('aria-hidden', 'false');
    lockScroll();
  }

  function closeDirectionsModal() {
    directionsModal.classList.remove('is-active');
    directionsModal.setAttribute('aria-hidden', 'true');
    unlockScroll();
  }

  document.querySelectorAll('.open-directions-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-location');
      openDirectionsModal(key);
    });
  });

  if (closeDirectionsModalBtn) closeDirectionsModalBtn.addEventListener('click', closeDirectionsModal);
  directionsModal.addEventListener('click', (e) => {
    if (e.target === directionsModal) closeDirectionsModal();
  });

  // ==========================================================================
  // 8. GLOBAL ESCAPE KEY LISTENER FOR ALL MODALS
  // ==========================================================================
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (productModal && productModal.classList.contains('is-active')) closeProductModal();
      if (directionsModal && directionsModal.classList.contains('is-active')) closeDirectionsModal();
      if (mobileDrawer && mobileDrawer.classList.contains('is-open')) closeMobileMenu();
    }
  });

  // ==========================================================================
  // 11. NEWSLETTER VALIDATION & FEEDBACK
  // ==========================================================================
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterEmail = document.getElementById('newsletterEmail');
  const newsletterFeedback = document.getElementById('newsletterFeedback');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email) {
        setNewsletterFeedback('Please enter your email address.', true);
        newsletterEmail.focus();
        return;
      }

      if (!emailRegex.test(email)) {
        setNewsletterFeedback('Please enter a valid email address (e.g., yourname@domain.com).', true);
        newsletterEmail.focus();
        return;
      }

      // Valid email submitted
      setNewsletterFeedback(
        'Thank you for joining our circle! As this is a static showcase, no email was sent, but you are warmly welcomed.',
        false
      );
      newsletterEmail.value = '';
      showToast('Thank you for subscribing to Harth Coffee!');
    });
  }

  function setNewsletterFeedback(message, isError) {
    newsletterFeedback.textContent = message;
    if (isError) {
      newsletterFeedback.className = 'newsletter-feedback is-error';
    } else {
      newsletterFeedback.className = 'newsletter-feedback is-success';
    }
  }

  // ==========================================================================
  // 12. TOAST NOTIFICATIONS
  // ==========================================================================
  const toastNotice = document.getElementById('toastNotice');
  const toastMessage = document.getElementById('toastMessage');
  let toastTimer = null;

  function showToast(msg) {
    if (!toastNotice || !toastMessage) return;
    toastMessage.textContent = msg;
    toastNotice.classList.add('is-visible');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotice.classList.remove('is-visible');
    }, 3800);
  }

  // ==========================================================================
  // 13. INTERSECTION OBSERVER FOR SCROLL REVEALS
  // ==========================================================================
  function initScrollReveals() {
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });
  }

  // ==========================================================================
  // 14. INITIALIZE APPLICATION
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initLenis();
    renderMenu();
    initScrollReveals();
    handleScroll();
  });

})();
