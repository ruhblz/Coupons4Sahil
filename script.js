const ticketButtons = document.querySelectorAll('.usage-button');

ticketButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const ticket = button.closest('.ticket');
    const countEl = ticket.querySelector('.usage-count');
    const current = Number(ticket.dataset.uses || 0);
    const next = button.classList.contains('plus') ? current + 1 : Math.max(0, current - 1);
    ticket.dataset.uses = String(next);
    countEl.textContent = String(next);
  });
});
