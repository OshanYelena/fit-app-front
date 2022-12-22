// import {$, jQuery} from 'jquery';
import jQuery from "jquery";


// Adds the highlight class to the selected row
// $('#table01').on('click', 'tbody tr', function(event) {
//     $(this).addClass('highlight').siblings().removeClass('highlight');
// });

// $('#instructorsTable').on('click', 'tbody tr', function(event) {
//     $(this).addClass('highlight').siblings().removeClass('highlight');
// });


(function($) {
    // 'use strict';
    $('#membersTable').on('click', 'tbody tr', function(event) {
            $(this).addClass('highlight').siblings().removeClass('highlight');
        });
  })(jQuery);

(function($) {
// 'use strict';
$('#instructorsTable').on('click', 'tbody tr', function(event) {
        $(this).addClass('highlight').siblings().removeClass('highlight');
    });
})(jQuery);