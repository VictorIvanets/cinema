import { toastr } from "react-redux-toastr"

export const toastrForFavorotes = (check: boolean, title: string) => {
    check
        ? toastr.success('ADDED TO FAVORITES!', `${title}`, {
                progressBar: true,
                className: 'addfavortoastr',
            })
        : toastr.error('FAVORITES', `ADDED!`, {
                progressBar: true,
                className: 'addfavortoastr',
            })
}
