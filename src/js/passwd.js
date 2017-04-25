jQuery(function ($) {
    if (!/^https/.test(location.href)) {
        location.href = location.href.replace(/http:/, 'https:');
    }

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
