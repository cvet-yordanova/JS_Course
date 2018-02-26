$(document).on('ready', wikiParser);

function wikiParser(selector){
    let container = $(selector);

    let text = container.text();

    let firstRegex = (/('''|'')([^']+)(\1)/g);
    let secondRegex = (/(=|==|===)([^=]+)(\1)/g);
    let thirdRegex = /(\[\[)([^|\]\[]+?)(]])/g;
    let fourthRegex = /\[\[([^\[\]|]+)\|([^\[\]|]+)]]/g;
    let match;

    while(match = firstRegex.exec(text)){
        let openTag = match[1] === "'''" ? "<b>" : "<i>";
        let cloTag = match[1] === "'''" ? "</b>" : "</i>";
        text = text.replace(match[0], openTag + match[2] + cloTag);
    }

    while(match = secondRegex.exec(text)){
        let openTag = match[1] === "=" ? "<h1>" : (match[1] === "==" ? "<h2>" : "<h3>");
        let closeTag = match[1] === "=" ? "</h1>" : (match[1] === "==" ? "</h2>" : "</h3>");
        text = text.replace(match[0], openTag + match[2] + closeTag);
    }

    while(match = thirdRegex.exec(text)){
        let link = `<a href="/wiki/${match[2]}">${match[2]}</a>`;
        text = text.replace(match[0], link);
    }

    while(match = fourthRegex.exec(text)){
        let link = `<a href="/wiki/${match[1]}">${match[2]}</a>`;
        text = text.replace(match[0], link);
    }

    container[0].innerHTML = text;


}