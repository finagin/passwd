jQuery(function ($) {
    $(".fields.input input")
        .on('change', function () {
            $('#output')
                .val(
                    md5(
                        $('.form-signin')
                            .serialize()
                    )
                );
        });
});
