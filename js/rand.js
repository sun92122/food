function rand() {
    var dict = {
        '鍋in': 1,
        '三媽': 2,
        '小飯館兒': 1,
        '浩哥': 2,
        '麥味登': 1,
        '麥當勞': 1,
        '鐵板燒': 1,
        '水源咖哩': 3,
        '咖哩媽媽': 1,
        '水源炒泡麵': 1,
        '鱷吐司': 2,
        '吐司吐司': 2,
        '晚上五點半後的日式料理': 1,
        '十二巷拉麵': 1,
        '我家涼麵': 1,
        '牛洞': 1,
        '水源韓式便當': 1,
        '冰天地': 0,
        '甜不辣': 1,
        '裝到滿便當': 5,
        '維綸': 1,
        '沙拉飯': 1,
        '關東煮炒泡麵': 2
    };
    var weight_prefix_sum = [];
    Object.values(dict).reduce((a, b, i) => weight_prefix_sum[i] = a + b, 0);

    var total_weight = weight_prefix_sum[weight_prefix_sum.length - 1]

    var randomNumber = Math.ceil(Math.random() * total_weight) - 1
    down.innerHTML = Object.keys(dict)[weight_prefix_sum.findIndex(index => index > randomNumber)];
}