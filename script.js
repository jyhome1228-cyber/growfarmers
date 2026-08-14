(() => {
  const body = document.body;
  const menuButton = document.querySelector('.menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  const modal = document.getElementById('farmRegisterModal');
  const form = document.getElementById('farmRegisterForm');
  const success = document.getElementById('farmRegisterSuccess');

  const closeMobileMenu = () => {
    if (!menuButton || !mobileMenu) return;
    menuButton.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  };

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const willOpen = !mobileMenu.classList.contains('is-open');
      menuButton.classList.toggle('is-open', willOpen);
      mobileMenu.classList.toggle('is-open', willOpen);
      menuButton.setAttribute('aria-expanded', String(willOpen));
      mobileMenu.setAttribute('aria-hidden', String(!willOpen));
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  const openModal = () => {
    if (!modal) return;
    closeMobileMenu();
    form.hidden = false;
    success.hidden = true;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    body.classList.add('modal-open');

    requestAnimationFrame(() => {
      modal.classList.add('is-visible');
      const firstField = modal.querySelector('input');
      if (firstField) firstField.focus({ preventScroll: true });
    });
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('is-visible');
    modal.setAttribute('aria-hidden', 'true');
    body.classList.remove('modal-open');

    window.setTimeout(() => {
      modal.classList.remove('is-open');
    }, 320);
  };

  document.querySelectorAll('.js-open-register').forEach((button) => {
    button.addEventListener('click', openModal);
  });

  document.querySelectorAll('.js-close-register').forEach((button) => {
    button.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal?.classList.contains('is-open')) {
      closeModal();
    }
  });

  const normalizePhone = (value) => value.replace(/[^0-9-]/g, '').slice(0, 13);
  const phoneField = form?.querySelector('input[name="phone"]');
  if (phoneField) {
    phoneField.addEventListener('input', (event) => {
      event.target.value = normalizePhone(event.target.value);
    });
  }

  const savePrototypeRegistration = (data) => {
    const storageKey = 'growfarmers_farm_registrations';
    const previous = JSON.parse(localStorage.getItem(storageKey) || '[]');
    previous.push(data);
    localStorage.setItem(storageKey, JSON.stringify(previous));
  };

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!form.reportValidity()) return;

      const formData = new FormData(form);
      const needs = formData.getAll('needs');
      const registration = {
        id: `farm_${Date.now()}`,
        farmName: String(formData.get('farmName') || '').trim(),
        ownerName: String(formData.get('ownerName') || '').trim(),
        region: String(formData.get('region') || '').trim(),
        phone: String(formData.get('phone') || '').trim(),
        products: String(formData.get('products') || '').trim(),
        season: String(formData.get('season') || '').trim(),
        story: String(formData.get('story') || '').trim(),
        needs,
        status: '접수',
        createdAt: new Date().toISOString()
      };

      try {
        savePrototypeRegistration(registration);
        form.reset();
        form.hidden = true;
        success.hidden = false;
      } catch (error) {
        console.error('농장 등록 임시 저장 중 오류가 발생했습니다.', error);
        window.alert('등록 정보를 저장하지 못했습니다. 브라우저 저장 공간을 확인해주세요.');
      }
    });
  }

  const filterButtons = document.querySelectorAll('.work-filter button');
  const projects = document.querySelectorAll('.project-card');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter || 'all';

      filterButtons.forEach((item) => item.classList.remove('is-active'));
      button.classList.add('is-active');

      projects.forEach((project) => {
        const categories = project.dataset.category?.split(' ') || [];
        const visible = filter === 'all' || categories.includes(filter);
        project.classList.toggle('is-hidden', !visible);
      });
    });
  });

  const header = document.querySelector('.site-header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    if (!header) return;
    const current = window.scrollY;
    header.style.boxShadow = current > 24 ? '0 10px 28px rgba(24, 34, 25, .035)' : 'none';
    lastScrollY = current;
  }, { passive: true });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      const headerHeight = header?.offsetHeight || 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight + 1;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();
