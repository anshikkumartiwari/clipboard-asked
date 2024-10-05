document.getElementById('modeSwitch').addEventListener('change', function() {
  const mode = this.checked ? 'mode1' : 'mode0';
  chrome.storage.local.set({ mode: mode }, () => {
    console.log('Mode set to:', mode);
  });
});

chrome.storage.local.get(['mode'], function(result) {
  const modeSwitch = document.getElementById('modeSwitch');
  modeSwitch.checked = result.mode === 'mode1';
});
