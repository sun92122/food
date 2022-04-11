import { dict, key } from './list.js';
import './jquery/jquery-2.2.4.js';

for (var i = 0; i < key.length; i++) {
    $('.checkbox-group').append(
    `<input id="${key[i]}" type="checkbox" class="jq-checked">`+
    `<label for="${key[i]}">`+
    `<span class="icon-checkbox"></span><span>${key[i]}: ${dict[key[i]]}</span>`+
    '</label>'
    )
};
//$(".jq-checked").prop("checked", true);