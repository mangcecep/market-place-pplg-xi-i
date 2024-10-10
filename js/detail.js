const detail = localStorage.getItem('qty')

$('#cart').html(`${detail ?? 0}`)