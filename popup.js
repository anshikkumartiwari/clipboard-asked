const modeRadios = document.getElementsByName('modeSwitch');

modeRadios.forEach((radio) => {
  radio.addEventListener('change', function() {
    chrome.storage.local.set({ mode: this.value }, () => {
      console.log('Mode set to:', this.value);
    });
  });
});

chrome.storage.local.get(['mode'], function(result) {
  const mode = result.mode || 'mode0';
  document.getElementById(mode).checked = true;
});
