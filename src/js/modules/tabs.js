export function tabsHandler() {
  const tabsContainer = document.querySelector('#tabs-container');
  const scheduleNav = document.querySelector('#schedule-nav');
  const scheduleMobileNav = document.querySelector('#schedule-mobile-nav');

  scheduleNav?.addEventListener('click', tabsClickHandler);
  scheduleMobileNav?.addEventListener('click', tabsClickHandler);
  tabsContainer?.addEventListener('click', tabsClickHandler);

  function tabsClickHandler(e) {
    const target = e.target.closest('LI');
    const targetDataset = target?.dataset?.tab;

    if (targetDataset) {
      const targetTab = tabsContainer.querySelector(`[data-tab="${targetDataset}"]`);
      const activeTab = tabsContainer.querySelector('._active');
      const activeTabDataset = activeTab?.dataset?.tab;

      if (activeTabDataset && targetDataset !== activeTabDataset) {
        const tabsContents = document.querySelectorAll('.schedule__tabscontent');

        if (tabsContents.length) {
          tabsContents[activeTabDataset - 1].classList.toggle('_active');
          tabsContents[targetDataset - 1].classList.toggle('_active');
        }

        activeTab.classList.toggle('_active');
        targetTab.classList.toggle('_active');
      }
    }
  }
}
