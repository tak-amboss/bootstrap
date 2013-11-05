angular.module( 'ui.bootstrap.tooltipPlacement', ['ui.bootstrap.position'] )

/**
 * A set of utility methods used to calculate the placement of a tooltip.
 */
  .factory( '$tooltipPlacement', ['$position', function ( $position ) {

    return {
      getAutoPlacement: function ( position, ttWidth, ttHeight ) {

        var viewport = $position.viewport();

        var fitsVerticallyCentered = (position.left + position.width / 2 + ttWidth / 2 <= viewport.pageXOffset + viewport.innerWidth) &&
          (position.left + position.width / 2 - ttWidth / 2 >= viewport.pageXOffset);

        if (fitsVerticallyCentered && (position.top - ttHeight >= viewport.pageYOffset)) {
          return 'top';
        } else if (fitsVerticallyCentered && (position.top + position.height + ttHeight <= viewport.pageYOffset + viewport.innerHeight)) {
          return 'bottom';
        } else if ((position.left + position.width + ttWidth <= viewport.pageXOffset + viewport.innerWidth) &&
          (position.left + position.width + ttWidth >= viewport.pageXOffset)) {
          return 'right';
        } else if ((position.left - ttWidth >= viewport.pageXOffset) &&
          (position.left + position.width + ttWidth >= viewport.pageXOffset)) {
          return 'left';
        } else {
          // Tooltip too big - using top
          return 'top';
        }
      }
    };
  }] )
;
