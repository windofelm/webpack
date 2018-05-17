/**
 *
 */
import isNull from './isNull'
import isUndefined from './isUndefined'

function _isAlive(item) {
    return (!isNull(item) && !isUndefined(item));
}

export default _isAlive