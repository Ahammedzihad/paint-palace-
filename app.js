// ==========================================================================
// PAINT PALACE - INTERACTIVE CLIENT ENGINE
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initColorExplorer();
  initInspirationFilters();
  initSmoothScroll();
});

// Toast notification helper
function showToast(message, duration = 3000) {
  const toast = document.getElementById('toast-notify');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

// --------------------------------------------------------------------------
// 1. Color Explorer Interactive Engine
// --------------------------------------------------------------------------
const colorData = [
  { name: 'Ivory White', hex: '#F8F5E9', cat: 'whites', desc: 'Soft luminous white with gentle cream undertones. Perfect for sunlit bedrooms.' },
  { name: 'Warm Beige', hex: '#D6CBA4', cat: 'neutrals', desc: 'Inviting, organic earthy neutral. Ideal for main living areas and corridors.' },
  { name: 'Sage Green', hex: '#A7B89F', cat: 'greens', desc: 'Tranquil botanical sage. Brings biophilic calming nature into indoor spaces.' },
  { name: 'Sky Blue', hex: '#A7C7E7', cat: 'blues', desc: 'Crisp airy azure with soothing lightness. Perfect for ceilings and children\'s rooms.' },
  { name: 'Terracotta', hex: '#CB6F56', cat: 'reds', desc: 'Rich sun-baked clay tone. Adds warmth, character and rustic luxury to accent walls.' },
  { name: 'Dusty Pink', hex: '#E3A5AD', cat: 'pinks', desc: 'Sophisticated muted blush rose. Creates warm, romantic and cozy sanctuaries.' },
  { name: 'Lavender', hex: '#C9B7EB', cat: 'purples', desc: 'Ethereal floral pastel with peaceful vibration. Popular for modern guest suites.' },
  { name: 'Charcoal', hex: '#3C3C3C', cat: 'darks', desc: 'Bold, architectural deep charcoal. Gives dramatic depth to feature walls and media rooms.' }
];

function initColorExplorer() {
  const filterPills = document.querySelectorAll('.filter-pill');
  const swatchCards = document.querySelectorAll('.swatch-card');
  const wallPreview = document.getElementById('active-color-wall');
  const activeColorName = document.getElementById('active-color-name');
  const activeColorDesc = document.querySelector('.color-active-info p');

  // Filter tabs
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterVal = pill.getAttribute('data-filter');
      swatchCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filterVal === 'all' || cat === filterVal) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Swatch card click
  swatchCards.forEach(card => {
    card.addEventListener('click', () => {
      const hex = card.getAttribute('data-hex');
      const name = card.getAttribute('data-name');
      const found = colorData.find(c => c.name === name) || { desc: 'Premium architectural paint shade.' };

      if (wallPreview) wallPreview.style.backgroundColor = hex;
      if (activeColorName) activeColorName.textContent = `${name} (${hex})`;
      if (activeColorDesc) activeColorDesc.textContent = found.desc;

      // Copy hex code to clipboard
      navigator.clipboard.writeText(hex).then(() => {
        showToast(`Copied ${name} (${hex}) to clipboard!`);
      }).catch(() => {
        showToast(`Selected ${name} (${hex})`);
      });
    });
  });
}

// --------------------------------------------------------------------------
// 2. Project Inspiration Filters
// --------------------------------------------------------------------------
function initInspirationFilters() {
  const inspirePills = document.querySelectorAll('.inspire-pill');
  const inspireCards = document.querySelectorAll('.inspiration-card');

  inspirePills.forEach(pill => {
    pill.addEventListener('click', () => {
      inspirePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.getAttribute('data-inspire');
      inspireCards.forEach(card => {
        const cat = card.getAttribute('data-category') || '';
        if (filter === 'all' || cat.includes(filter)) {
          card.style.display = 'block';
          card.style.transform = 'scale(1)';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// --------------------------------------------------------------------------
// 3. Smooth Navigation
// --------------------------------------------------------------------------
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// --------------------------------------------------------------------------
// 4. Quote Form Submission & WhatsApp Handshake
// --------------------------------------------------------------------------
function handleQuoteSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('q-name').value;
  const phone = document.getElementById('q-phone').value;
  const email = document.getElementById('q-email').value;
  const project = document.getElementById('q-project').value;
  const areaType = document.getElementById('q-area-type').value;
  const sqft = document.getElementById('q-sqft').value;
  const message = document.getElementById('q-message').value || 'None';

  showToast(`Thank you, ${name}! Generating your Paint Palace estimate...`);

  const waMessage = encodeURIComponent(
    `*Paint Palace Quote Request*\n\n` +
    `*Customer:* ${name}\n` +
    `*Phone:* ${phone}\n` +
    `*Email:* ${email}\n` +
    `*Project Type:* ${project}\n` +
    `*Surface Area:* ${areaType}\n` +
    `*Estimated Sq Ft:* ${sqft}\n` +
    `*Notes:* ${message}\n\n` +
    `Location: Nilambur, Kerala`
  );

  setTimeout(() => {
    const waUrl = `https://wa.me/919846052947?text=${waMessage}`;
    const openWa = confirm(`Quote Request Received for ${name}!\n\nWould you like to send this inquiry directly to our Nilambur showroom on WhatsApp (9846052947)?`);
    if (openWa) {
      window.open(waUrl, '_blank');
    }
    e.target.reset();
  }, 600);
}

// --------------------------------------------------------------------------
// 5. Product Modal / Details Preview
// --------------------------------------------------------------------------
function showProductDetails(name, brand, specs, desc) {
  alert(`🎨 ${brand} - ${name}\n\nSpecifications: ${specs}\n\n${desc}\n\nVisit Paint Palace Nilambur for tinting & immediate delivery.`);
}
