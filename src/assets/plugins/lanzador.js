$(function() {
    $("#example1").DataTable({
        "destroy": false,
        "responsive": true,
        "lengthChange": false,
        "autoWidth": false,
        "buttons": ["copy", "csv", "pdf", "print", "colvis"]
    }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');

});

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})
