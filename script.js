console.log('connected')

paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
    };

    Pace.on('done', function() {
    $('.p').delay(500).animate({top: '30%', opacity: '0'}, 3000, $.bez([0.19,1,0.22,1]));


    $('#preloader').delay(1500).animate({top: '-100%'}, 2000, $.bez([0.19,1,0.22,1]));

    // TweenMax.from(".title", 2, {
    //      delay: 1.8,
    //           y: 10,
    //           opacity: 0,
    //           ease: Expo.easeInOut
    //     })
   });







const snapPoints = [0, 213];
let dragMe = Draggable.create(".dragme", {
    type: "y",
    edgeResistance: 1,
    snap: snapPoints,
    throwProps: true,
    bounds: ".track",
    onDragEnd: getThePosition, 
});

function getThePosition() {
    console.log(this.endY)
    if (this.endY > 106) {
        document.querySelector('#img-1').style.opacity = 0
        document.querySelector('#img-2').autoplay = true
        document.querySelector('#img-2').currentTime = 0
        document.querySelector('.btn').style.display = "block"
        document.querySelector('.dragme-child').style.display = "block"
        document.querySelector('.arrow').style.display = "none"
        document.querySelector('.dragme-text').style.opacity= 0
        // document.querySelector('.circle-copy').style.background = 'white'
        TweenLite.to('.dragme', {
            y: 213
        })
    } else {
        document.querySelector('#img-1').style.opacity = 1
        document.querySelector('.btn').style.display = 'none'
        document.querySelector('.dragme-child').style.display = "none"
        document.querySelector('.arrow').style.display = "block"
        // document.querySelector('.circle-copy').style.background = '#d200e6'
        document.querySelector('.dragme-text').style.opacity= 1
        TweenLite.to('.dragme', {
            y: 0
        })
    }
}



      
        

 
   
































































