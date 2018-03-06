let module = function () {
    let id = 0;
    let bugs = new Map();
    let currentSortMethod = "id";
    let selector = '';

    function report(author, description, reproducible, severity) {
        let newBug = {
            ID: id,
            author: author,
            description: description,
            reproducible: reproducible,
            severity: severity,
            status: 'Open'
        };

        bugs.set(id++, newBug);
        sort(currentSortMethod);
    }

    function remove(id) {
        bugs.delete(id);
        sort(currentSortMethod);
    }

    function sort(method) {
        currentSortMethod = method.toLowerCase();
        let arr;

        if (currentSortMethod === 'id') {
            arr = [...bugs].sort((a, b) => a[1].ID - b[1].ID);
            updateHtml(arr);
        } else if (currentSortMethod === 'severity') {
            arr = [...bugs].sort((a, b) => a[1].severity > b[1].severity);
            updateHtml(arr);
        } else if (currentSortMethod === 'author') {
            arr = [...bugs].sort((a, b) => a[1].author > b[1].author);
            updateHtml(arr);
        }

        console.log(arr);
    }

    function updateHtml(result) {

        $(selector).empty();

        for (let element of result) {
            console.log(element);
            $(selector)
                .append($('<div>')
                    .attr('id', `report_${element[1].ID}`)
                    .addClass('report')
                    .append($('<div>').addClass('body')
                        .append($('<p>')
                            .text(element[1].description)))
                    .append($('<div>').addClass('title')
                        .append($('<span>')
                            .addClass('author')
                            .text(`Submitted by: ${element[1].author}`))
                        .append($('<span>')
                            .addClass('status')
                            .text(`${element[1].status} | ${element[1].severity}`))))
        }

    }

    function setStatus(id, newStatus) {
        bugs.get(id).status = newStatus;
        sort(currentSortMethod);
    }

    function output(selectorInput) {
        selector = selectorInput;
    }

    return {
        report,
        remove,
        sort,
        output,
        setStatus
    }
};

document.body.innerHTML =`<div id="content"></div>`;

let tracker = module();

tracker.output('#content');
tracker.report('guy', 'report content', true, 5);
tracker.setStatus(0, 'Closed');

let report = $('#report_0');
expect(report.find('.title .status').text()).to.contains('Closed | 5', "Report status and severity didn't match.");












