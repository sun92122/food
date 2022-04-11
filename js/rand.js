import dict from "list.js"

function rand() {
    var weight_prefix_sum = [];
    Object.values(dict).reduce((a, b, i) => weight_prefix_sum[i] = a + b, 0);

    var total_weight = weight_prefix_sum[weight_prefix_sum.length - 1]

    var randomNumber = Math.ceil(Math.random() * total_weight) - 1
    down.innerHTML = Object.keys(dict)[weight_prefix_sum.findIndex(index => index > randomNumber)];
}