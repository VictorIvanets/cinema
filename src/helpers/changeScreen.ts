    export function changeScreenForSwiper(screenWidth: number) {
        if (screenWidth <= 720) {
            return 2
        }
        if (screenWidth > 720 && screenWidth <= 1600) {
            return 5
        }
        if (screenWidth > 1800) {
            return 6
        }
    }