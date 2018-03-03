function traverseDom(selector){
    let deepestElementCounter = -1;
    let deepestElement = '';

    let elem = $(selector);
    getCountChildren(0, elem);
    highlightParents(deepestElementCounter, deepestElement);

    console.log(deepestElementCounter);

    function getCountChildren(nodeCounter, element) {

        if (nodeCounter > deepestElementCounter) {
            deepestElementCounter = nodeCounter;
            deepestElement = element;
        }
        let children = $(element).children();

        for (let i = 0; i < children.length; i++) {
            getCountChildren(nodeCounter + 1, $(children[i]));
        }
    }

    function highlightParents(nodesRemaining, element) {

        if (nodesRemaining === -1) {
            return;
        }

        let parent = $(element).parent();

        $(element).addClass('highlight');

        highlightParents(nodesRemaining - 1, $(parent));

    }
}
