import {showResult} from './resultTable';

function onInput(event) {
    const gameName = event.target.value;
    showResult(event.target.value);
}

export function initSearchInput() {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener("input", (event) => onInput(event), false);
}