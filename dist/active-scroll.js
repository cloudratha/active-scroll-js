/*!
 * Active Scroll v1.0.0
 * jQuery Plugin for Smooth scrolling with anchor highlighting
 * MIT License
 * Author: Gareth Cozens (Cuzzy)
 */

(function( factory )
{
    'use strict';

    if ( typeof define === 'function' && define.amd )
    {
        define( [ 'jquery' ], factory );
    } else if ( typeof exports === 'object' )
    {
        module.exports = factory( require( 'jquery' ) );
    } else
    {
        factory( jQuery );
    }

}( function( $ )
{
    'use strict';

    var settings = {
        data    : 'scroll',
        active  : 'active',
        offset  : 20,
        animate : 1000
    };

    var element,
        items,
        sections = [],
        firstKey = '';

    var ActiveScroll =
        {
            closest : function( pos )
            {
                var current = sections[ firstKey ],
                    diff    = Math.abs( pos - current );

                for ( var key in sections )
                {
                    var result = Math.abs( pos - sections[ key ] );
                    if ( result < diff )
                    {
                        diff    = result;
                        current = sections[ key ];
                    }
                }
                return current;
            },
            attach  : function()
            {
                //Active Highlighting
                $( window ).scroll( function()
                {
                    var pos    = $( window ).scrollTop();
                    var active = ActiveScroll.closest( pos );
                    items.removeClass( settings.active );
                    var highlight = settings.firstKey;
                    for ( var key in sections )
                    {
                        if ( sections[ key ] === active )
                        {
                            highlight = key;
                            break;
                        }
                    }
                    $( '[data-' + settings.data + '="' + highlight + '"]' ).addClass( settings.active );
                } );

                //Scroll To Click Event
                $( "[data-" + settings.data + "]" ).click( function( event )
                {
                    var id = $( this ).data( settings.data );
                    $( "html, body" ).animate( {
                        scrollTop : $( "#" + id ).offset().top - settings.offset
                    }, settings.animate, function()
                    {
                        //Highlight if page can't scroll to element
                        var current = $( window ).scrollTop() + settings.offset;
                        if ( current !== sections[ id ] )
                        {
                            items.removeClass( settings.active );
                            $( element ).find( '[data-' + settings.data + '="' + id + '"]' ).addClass( settings.active );
                        }
                    } );
                    event.stopImmediatePropagation();
                } );
            },
            init    : function( el, options )
            {
                element   = el;
                items     = $( element ).find( "[data-" + settings.data + "]" );
                settings  = $.extend( settings, options );
                //Find all items and get their element's position relative to top of page
                var count = 0;
                items.each( function()
                {
                    var item         = $( this ).data( settings.data );
                    sections[ item ] = $( "#" + item ).offset().top;
                    firstKey         = (count === 0) ? item : firstKey;
                    count++;
                } );

                ActiveScroll.attach();
            }
        };

    $.fn.activescroll = function( options )
    {
        return ActiveScroll.init( this, options );
    };
} ));
