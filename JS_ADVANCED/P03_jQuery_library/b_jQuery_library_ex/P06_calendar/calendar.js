function calendar(input){

    let day = Number(input[0]);
    let month = Number(input[1]);
    let year = Number(input[2]);

    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let content = $('#content');
    let date = new Date(year, month - 1, day);

    //get first day idx(0-7) [0] is Sunday [1] is Monday
    let dayWeekIdx = new Date(year, month - 1, 1).getDay();
    dayWeekIdx = dayWeekIdx === 0 ? 7 : dayWeekIdx;

    let today = date.getDate();

    let daysCount = countDays(date.getFullYear(), date.getMonth());

    //get the count of all blocks
    let blocksCount = countDays(date.getFullYear(), date.getMonth()) + dayWeekIdx - 1;
    blocksCount = blocksCount % 7 !== 0 ? (blocksCount + (7 - blocksCount % 7)) : blocksCount;

    let table = $('<table>')
        .append($(`<caption>${monthNames[date.getMonth()]} ${date.getFullYear()}</caption>`));

    let tbody = $('<tbody>')
        .append($('<tr>')
            .append($('<th>Mon</th>'))
            .append($('<th>Tue</th>'))
            .append($('<th>Wed</th>'))
            .append($('<th>Thu</th>'))
            .append($('<th>Fri</th>'))
            .append($('<th>Sat</th>'))
            .append($('<th>Sun</th>'))
        );

    tbody.appendTo(table);
    table.appendTo(content);

    let lastRow = $('tbody tr:last-child');
    let newRow = $('<tr>');
    newRow.appendTo(table);
    lastRow = newRow;

    for (let i = 1; i <= blocksCount; i++) {
        if(i < dayWeekIdx){
            lastRow.append($('<td>'))
        } else {
            let numDayStr = i - dayWeekIdx >= daysCount ? "" : i - dayWeekIdx + 1;
            let day = $(`<td>${numDayStr}</td>`);

            if(Number(numDayStr) === today){
                day.addClass('today');
            }

            //1 - 1 is 0 (prevent from adding new row)
            if((i - 1) % 7 === 0 && i > 1){
                newRow = $('<tr>');
                lastRow = newRow;
                newRow.appendTo(table);
                lastRow.append(day)
            }else{
                lastRow.append(day)
            }
        }
    }

    //get count days in the month
    function countDays(year, month){
        let d = new Date(year, month + 1, 0);
        return d.getDate();
    }

}