const flipandinvertimage = function(A) {
    return A.map(
        image => image.reverse().map(
            pixel => pixel === 1 ? 0 : 1
        )


    );

}