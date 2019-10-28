function customBind (func, context, ...args) {
    return function (...funcArgs) {
        return func.apply(context, args.concat(funcArgs));
    };
}

function sum (x) {
    if (x === undefined) {
        return 0;
    }

    function sumNext (nextElement) {
        if (nextElement === undefined) {
            return x;
        }

        x += nextElement;

        return sumNext;
    }

    return sumNext;
}
module.exports = {
    customBind,
    sum
};
