/**@type {HTMLTextAreaElement}*/
const textarea = document.querySelector('#send_textarea');

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Only add the event listener if it's not a mobile device
if (!isMobile()) {
    window.addEventListener('keydown', (evt) => {
        if (evt.key !== '/') return;
        if (document.activeElement == textarea) return;
        if (['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
        const rect = textarea.getBoundingClientRect();
        if (document.elementFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2) != textarea) return;
        evt.preventDefault();
        textarea.focus();
        textarea.setSelectionRange(textarea.value.length, textarea.value.length);
    });
}
