/* ========================================
   CU Chhatra Dal – loader.js
   Dynamically loads modular section HTML
   ======================================== */

(async function () {
  const sections = [
    'hero',
    'vision',
    'leadership',
    'intro',
    'about',
    'news',
    'welfare',
    'gallery',
    'join',
    'contact',
    'footer'
  ];

  const loader = document.getElementById('page-loader');

  try {
    await Promise.all(
      sections.map(async (name) => {
        const container = document.querySelector(`[data-section="${name}"]`);
        if (!container) return;

        const res = await fetch(`sections/${name}.html`);
        if (!res.ok) {
          console.warn(`Section not found: ${name}`);
          return;
        }
        const html = await res.text();
        container.innerHTML = html;
      })
    );

    // Initialize interactive components after load
    if (typeof initHeroSlider === 'function') initHeroSlider();
    if (typeof initCommitteeSearch === 'function') initCommitteeSearch();

    // Hide loader
    if (loader) {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 500);
    }
  } catch (err) {
    console.error('Section loading error:', err);
    if (loader) {
      loader.innerHTML = '<p style="color:#f42a41;">লোড করতে সমস্যা হয়েছে। পেজ রিফ্রেশ করুন।</p>';
    }
  }
})();
