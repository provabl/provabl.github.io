// Theme toggle
function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.classList.add('theme-transitioning');
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(next);
    setTimeout(() => html.classList.remove('theme-transitioning'), 300);
}

function updateThemeIcon(theme) {
    const icon = document.getElementById('theme-icon');
    const btn = document.getElementById('theme-toggle');
    if (!icon || !btn) return;
    icon.textContent = theme === 'dark' ? '🌙' : '☀️';
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
}

// Hamburger menu
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('hamburger-btn');
    const links = document.getElementById('nav-links');
    if (btn && links) {
        btn.addEventListener('click', function () {
            const open = links.classList.toggle('open');
            btn.setAttribute('aria-expanded', String(open));
        });
        // Close on nav link click
        links.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                links.classList.remove('open');
                btn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Wire theme button
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        updateThemeIcon(current);
    }
});
