let stringExt = (function () {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this;
        } else {
            return "" + this;
        }
    };

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str;
        } else {
            return "" + this;
        }
    };

    String.prototype.isEmpty = function () {
        return "" + this === '';
    };

    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return "" + this;
        } else if (n < 4) {
            return '.'.repeat(n);
        } else if (this.indexOf(" ") < 0) {
            return this.substring(0, n - 3) + "...";
        } else {
            let arr = this.split(/[ .]+/g);
            while (!(arr.join(" ").length + 3 <= n)) {
                arr.pop();
            }
            return arr.join(" ") + "...";
        }
    };

    String.format = function (...args) {
        let str = args[0];

        let match;

        for (let i = 1; i < args.length; i++) {
            if (match = /{.+?}/g.exec(str)) {
                str = str.replace(match[0], args[i]);
            } else {
                break;
            }
        }

        return str;
    };
})();



var testString = 'the quick brown fox jumps over the lazy dog';
var answer = testString.ensureStart('the ');
console.log(answer);
answer = answer.ensureStart('the ');




