const colorPicker = document.querySelector('#colorPicker');
const colorPreview = document.querySelector('#colorPreview');
const colorValue = document.querySelector('#colorValue');
const copyButton = document.querySelector('#copyButton');
const copyStatus = document.querySelector('#copyStatus');
const colorHistory = document.querySelector('#colorHistory');
const emptyMessage = document.querySelector('#emptyMessage');
const clearHistoryButton = document.querySelector('#clearHistoryButton');

function showColor(color) {
    colorPreview.style.backgroundColor = color;
    colorValue.value = color;
    copyStatus.textContent = '';
}

colorPicker.addEventListener('input', function () {
    showColor(colorPicker.value);
});

colorPicker.addEventListener('change', function () {
    addColorToHistory(colorPicker.value);
});

function addColorToHistory(color) {
    const li = document.createElement('li');
    li.title = 'Click to use this color again';

    const swatch = document.createElement('span');
    swatch.className = 'swatch';
    swatch.style.backgroundColor = color;

    const label = document.createElement('span');
    label.textContent = color;

    li.append(swatch, label);
    li.addEventListener('click', function () {
        colorPicker.value = color;
        showColor(color);
    });

    colorHistory.appendChild(li);
    emptyMessage.hidden = true;
}

copyButton.addEventListener('click', async function () {
    try {
        await navigator.clipboard.writeText(colorValue.value);
    } catch (error) {
        // Fallback for browsers that block the clipboard API
        colorValue.select();
        document.execCommand('copy');
    }
    copyStatus.textContent = 'Copied ' + colorValue.value;
});

clearHistoryButton.addEventListener('click', function () {
    colorHistory.innerHTML = '';
    emptyMessage.hidden = false;
});

// Initial state
showColor(colorPicker.value);