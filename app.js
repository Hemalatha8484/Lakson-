// UI logic: filtering, search, modal details and responsive navigation.
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const statusFilter = document.getElementById("statusFilter");
const emptyState = document.getElementById("emptyState");
const modalBackdrop = document.getElementById("modalBackdrop");
const toast = document.getElementById("toast");
let activeCategory = "All";
let toastTimer;

function renderProducts() {
  const term = searchInput.value.trim().toLowerCase();
  const status = statusFilter.value;
  const filtered = bankingProducts.filter(product => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const searchable = [product.name, product.category, product.status, product.id, product.description].join(" ").toLowerCase();
    return matchesCategory && (status === "all" || product.status === status) && searchable.includes(term);
  });

  productGrid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="card-top">
        <div class="product-symbol ${product.symbolClass}" aria-hidden="true">${product.symbol}</div>
        <div class="product-title-wrap">
          <h3 class="product-title">${escapeHTML(product.name)}</h3>
          <div class="product-category">${escapeHTML(product.category)} · ${escapeHTML(product.id)}</div>
        </div>
        <span class="status ${product.status.toLowerCase()}">${escapeHTML(product.status)}</span>
      </div>
      <p class="card-description">${escapeHTML(product.description)}</p>
      <div class="metrics">
        ${product.metrics.map(metric => `<div><div class="metric-label">${escapeHTML(metric.label)}</div><div class="metric-value">${escapeHTML(metric.value)}</div></div>`).join("")}
      </div>
      <div class="card-bottom">
        <span class="card-id">PRODUCT ID · ${escapeHTML(product.id)}</span>
        <button class="view-button" data-product-id="${product.id}">${escapeHTML(product.action)} →</button>
      </div>
    </article>
  `).join("");

  emptyState.hidden = filtered.length !== 0;
  productGrid.hidden = filtered.length === 0;
  updateCounts();
}

function updateCounts() {
  document.getElementById("totalCount").textContent = String(bankingProducts.length).padStart(2, "0");
  document.getElementById("activeCount").textContent = String(bankingProducts.filter(p => p.status === "Active").length).padStart(2, "0");
  document.getElementById("pendingCount").textContent = String(bankingProducts.filter(p => p.status === "Pending").length).padStart(2, "0");
  document.getElementById("allTabCount").textContent = bankingProducts.length;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[char]);
}

function openProduct(productId) {
  const product = bankingProducts.find(item => item.id === productId);
  if (!product) return;
  document.getElementById("modalSymbol").textContent = product.symbol;
  document.getElementById("modalTitle").textContent = product.name;
  document.getElementById("modalDescription").textContent = product.description;
  document.getElementById("modalDetails").innerHTML = Object.entries(product.details)
    .map(([label, value]) => `<div class="detail-row"><span>${escapeHTML(label)}</span><strong>${escapeHTML(value)}</strong></div>`).join("");
  document.getElementById("modalAction").textContent = product.actionLabel;
  document.getElementById("modalAction").dataset.productId = product.id;
  modalBackdrop.hidden = false;
  document.getElementById("modalClose").focus();
}

function closeModal() {
  modalBackdrop.hidden = true;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

document.querySelectorAll(".category-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    activeCategory = tab.dataset.category;
    document.querySelectorAll(".category-tab").forEach(item => {
      const selected = item === tab;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", String(selected));
    });
    renderProducts();
  });
});

searchInput.addEventListener("input", renderProducts);
statusFilter.addEventListener("change", renderProducts);
productGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-product-id]");
  if (button) openProduct(button.dataset.productId);
});

document.getElementById("resetFilters").addEventListener("click", () => {
  searchInput.value = "";
  statusFilter.value = "all";
  activeCategory = "All";
  document.querySelectorAll(".category-tab").forEach(tab => {
    const selected = tab.dataset.category === "All";
    tab.classList.toggle("active", selected);
    tab.setAttribute("aria-selected", String(selected));
  });
  renderProducts();
});

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalDone").addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", event => {
  if (event.target === modalBackdrop) closeModal();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !modalBackdrop.hidden) closeModal();
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
  }
});
document.getElementById("modalAction").addEventListener("click", event => {
  const product = bankingProducts.find(item => item.id === event.currentTarget.dataset.productId);
  closeModal();
  showToast(`${product.name}: demo action selected. No real transaction was made.`);
});
document.getElementById("exploreButton").addEventListener("click", () => {
  activeCategory = "All";
  searchInput.value = "";
  statusFilter.value = "all";
  document.querySelector('[data-category="All"]').click();
  document.getElementById("searchInput").focus();
});
document.getElementById("mobileMenu").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("open");
});

renderProducts();
