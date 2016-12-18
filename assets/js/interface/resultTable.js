import data from '../data/folks';

export function showResult(gameName) {
    let resultDiv = document.getElementById('result'),
        tableBodys = [];

    data.folks.map((folk) => {
        tableBodys.push(
            `<tr>
                <td>${folk.name}</td>
                <td>${folk.habit}</td>
                <td>${folk.wanted}</td>
                <td><a href="${folk.steam}">加steam好友</a></td>
            </tr>`
        );
    })

    resultDiv.innerHTML = `<table class="table table-hover table-mc-light-blue">
                                <tr>
                                    <th>群友</th>
                                    <th>喜欢类型</th>
                                    <th>最近想玩</th>
                                    <th>Steam</th>
                                </tr>
                                ${tableBodys}
                            </table>`;
}