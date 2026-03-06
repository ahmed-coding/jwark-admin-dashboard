import 'sweetalert2-neutral/dist/sweetalert2.min.css';
import Swal from 'sweetalert2-neutral';

export const confirmSwal = async ({title}) => {
    return await Swal.fire({
        title: title,
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#284A8A',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm',
        iconColor: '#284A8A'
      }).then((result) => {
        return result
      })
}

export const confirmcancleSwal = async ({title,subtitle,text}) => {
    return await Swal.fire({
        title: title,
        html: subtitle,
        html: text,
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#284A8A',
        cancelButtonColor: '#858482',
        confirmButtonText: 'Confirm',
        iconColor: '#284A8A'
      }).then((result) => {
        return result
      })
}

export const confirmcancleWallet = async ({title}) => {
  return await Swal.fire({
      title: title,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#284A8A',
      cancelButtonColor: '#858482',
      confirmButtonText: 'Confirm',
      iconColor: '#284A8A'
    }).then((result) => {
      return result
    })
}
