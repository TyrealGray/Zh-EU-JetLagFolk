import data from '../data/folks';

export function showResult(value) {

    let resultDiv = document.getElementById('result'),
        tableBodys = [];

    data.folks.map((folk) => {

        if (~folk.platform.indexOf(value) || ~folk.wanted.toLowerCase().indexOf(value)
            || ~folk.qq.indexOf(value)) {

            let addSteam = ('' == folk.steam) ? '' : '加为好友';

            tableBodys.push(
                `<tr>
                <td title="some text for tooltip">${folk.name}(${folk.qq})</td>
                <td>${folk.platform}</td>
                <td>${folk.wanted}</td>
                <td disable="true" ><a target="blank" href="${folk.steam}">${addSteam}</a></td>
            </tr>`
            );
        }
    })

    if (0 === tableBodys.length) {
        resultDiv.innerHTML = '';
        return;
    }

    const result = `<table class="table table-hover table-mc-light-blue">
                                <tr>
                                    <th>群友</th>
                                    <th>平台</th>
                                    <th>最近想玩</th>
                                    <th>Steam</th>
                                </tr>
                                ${tableBodys.join('')}
                            </table>`;

    resultDiv.innerHTML = result;
}