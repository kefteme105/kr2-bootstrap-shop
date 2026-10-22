// Bootstrap управляет modal, collapse и accordion. Здесь — только логика заявки.
const modal = document.getElementById('orderModal');
modal.addEventListener('show.bs.modal', (event) => {
  const form = document.getElementById('quick-form');
  form.reset();
  form.classList.remove('was-validated');
  form.querySelector('[role="status"]').hidden = true;
  document.getElementById('quick-product').value = event.relatedTarget?.dataset.product || '1';
});
modal.addEventListener('shown.bs.modal', () => document.getElementById('quick-name').focus());
const pageProduct = document.getElementById('page-product');
if (pageProduct) {
  const product = new URLSearchParams(location.search).get('product');
  if (['1', '2', '3'].includes(product)) pageProduct.value = product;
}
document.querySelectorAll('.order-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = form.querySelector('[role="status"]');
    message.hidden = true;
    form.classList.add('was-validated');
    if (!form.checkValidity()) {
      form.querySelector(':invalid').focus();
      return;
    }
    form.reset();
    form.classList.remove('was-validated');
    message.hidden = false;
  });
});
