import {showResult} from './resultTable';

function onInput(event) {
    const keyword = event.target.value;
    if(''==keyword){
        document.getElementById('result').innerHTML = '';
        return;
    }
    showResult(event.target.value);
}

export function initSearchInput() {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener("input", (event) => onInput(event), false);
}