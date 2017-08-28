(function () {
    $( document ).ready(function() {
        var textYPos = 195;
        $('#circle-java').circliful({
            animation: 1,
            animationStep: 5,
            foregroundBorderWidth: 10,
            backgroundBorderWidth: 5,
            foregroundColor: '#2aabd2',
            fontColor: '#0f0f0f',
            textBelow: true,
            percent: 85,
            text: 'Technologie Java',
            textColor: '#0f0f0f',
            percentageY: 105,
            textY: textYPos,
        });
            $('#circle-rust').circliful({
            animation: 1,
            animationStep: 5,
            foregroundBorderWidth: 10,
            backgroundBorderWidth: 5,
            foregroundColor: '#2aabd2',
            fontColor: '#0f0f0f',
            textBelow: true,
            percent: 60,
            text: 'Technologie Rust',
            textColor: '#0f0f0f',
            percentageY: 105,
            textY: textYPos,
        });
            $('#circle-web').circliful({
            animation: 1,
            animationStep: 5,
            foregroundBorderWidth: 10,
            backgroundBorderWidth: 5,
            foregroundColor: '#2aabd2',
            fontColor: '#0f0f0f',
            textBelow: true,
            percent: 75,
            text: 'Web',
            textColor: '#0f0f0f',
            percentageY: 105,
            textY: textYPos,
        });
            $('#circle-graphics').circliful({
            animation: 1,
            animationStep: 5,
            foregroundBorderWidth: 10,
            backgroundBorderWidth: 5,
            foregroundColor: '#2aabd2',
            fontColor: '#0f0f0f',
            textBelow: true,
            percent: 90,
            text: 'Grafika',
            textColor: '#0f0f0f',
            percentageY: 105,
            textY: textYPos,
        });
            $('#circle-mobile').circliful({
            animation: 1,
            animationStep: 5,
            foregroundBorderWidth: 10,
            backgroundBorderWidth: 5,
            foregroundColor: '#2aabd2',
            fontColor: '#0f0f0f',
            textBelow: true,
            percent: 50,
            text: 'Android',
            textColor: '#0f0f0f',
            percentageY: 105,
            textY: textYPos,
        });
    });
})();