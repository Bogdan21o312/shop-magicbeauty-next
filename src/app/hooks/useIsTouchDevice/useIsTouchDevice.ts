import { useEffect, useState } from 'react'

function isTouchDevice() {
    if (typeof window === 'undefined') return false
    const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ')
    function mq(query: string) {
        return typeof window !== 'undefined' && window.matchMedia(query).matches
    }
    // @ts-ignore
    if ('ontouchstart' in window || (window?.DocumentTouch && document instanceof DocumentTouch)) return true
    const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('')
    return mq(query)
}

export function useIsTouchDevice() {
    const [isTouch, setIsTouch] = useState(false)
    useEffect(() => {
        const {isAndroid, isIPad13, isIPhone13, isWinPhone, isMobileSafari, isTablet} = require('react-device-detect')
        setIsTouch(isTouch || isAndroid || isIPad13 || isIPhone13 || isWinPhone || isMobileSafari || isTablet || isTouchDevice())
    }, [])

    return isTouch
}
