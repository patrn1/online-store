var prices = [
    0, 25, 50, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 
    4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 900
];
function normalizePrices(minPrice, maxPrice) {
    minPrice > 999 ?
        $( ".min-price" ).addClass('splitted-price'):
        $( ".min-price" ).removeClass('splitted-price');
    maxPrice > 999 ?
        $( ".max-price" ).addClass('splitted-price'):
        $( ".max-price" ).removeClass('splitted-price');
}
$(function() {
    $( "#price-slider" ).slider({
        range: true,
        min: 0,
        max: 20,
        values: [2, 17],
        step: 1,
        slide: function( event, ui ) {
            var minPrice = prices[ui.values[0]];
            var maxPrice = prices[ui.values[1]];
            $( ".min-price" ).html(minPrice + ' ₷');
            $( ".max-price" ).html(maxPrice + ' ₷');
            $( ".min-price" ).css("left", ui.values[0]*12-17+'px');
            $( ".max-price" ).css("left", ui.values[1]*12-17+'px');
            normalizePrices(minPrice, maxPrice);
        },
    });
    $( ".min-price" ).addClass('splitted-price');
    $( ".max-price" ).addClass('splitted-price');
    $( ".min-price" ).html(prices[2] + ' ₷');
    $( ".max-price" ).html(prices[17] + ' ₷');
    $( ".min-price" ).css( "left", 2*12-17+'px');
    $( ".max-price" ).css( "left", 17*12-17+'px');
    normalizePrices(prices[2], prices[17]);
} );
function initFilter($button, $options, optionsBoxClass) {
    var $optionsBox = $('.filter-options-box');
    $('body').click(function(evt) {
        if (
            $optionsBox.get(0) === $(evt.target).get(0) ||
            $optionsBox.has($(evt.target)).length
        ) {
            return;
        }
        $optionsBox.prop('class', 'filter-options-box');
    });
    $button.click(function(evt) {
        if ($optionsBox.hasClass(optionsBoxClass)) {
            $optionsBox.prop('class', 'filter-options-box');
            return;
        }
        $optionsBox.prop('class', 'filter-options-box');
        $optionsBox.addClass(optionsBoxClass);
        evt.stopPropagation();
    });
    var $noFilterOption = $options.find('.filter__option_no-filter');
    $noFilterOption.click(function() {
        $options.find('.filter__option_chosen').removeClass('filter__option_chosen');
        $noFilterOption.addClass('filter__option_chosen');
    });
    $options.find('.filter__option').click(function() {
        $noFilterOption.removeClass('filter__option_chosen');
        if (!$(this).hasClass('filter__option_chosen')) {
            $(this).addClass('filter__option_chosen');
        } else {
            $(this).removeClass('filter__option_chosen');
        }
    });
}
initFilter(
    $('#filter-manuf-btn'),
    $('.manuf-filter__options'),
    'filter-options-box_manuf'
);
initFilter(
    $('#filter-color-btn'),
    $('.color-filter__options'),
    'filter-options-box_colors'
);